import { CHARACTER_CONCEPT, ICharacter, ICharacterSubConcept } from "../interfaces/character";
import * as _ from 'lodash';
import GeneratePersonService from "./GeneratePerson.service";
import { uniqueId } from "lodash";
import { createText } from "./OpenAI.service";
import { OPENAI_COMMAND } from "../constants/OpenAI";

export const generateNPC = async (): Promise<ICharacter> => {
	const characterConcept = _.sample(Object.values(CHARACTER_CONCEPT)) as CHARACTER_CONCEPT,
		characterSubConcept = _.sample(getSubConcepts().filter(x => x.parentConcept === characterConcept)) as ICharacterSubConcept,
		{ firstName, lastName } = await GeneratePersonService.getNames("m"),
		{ data: { choices: characteristics } } = await createText(OPENAI_COMMAND.CREATE_CHARACTER_CHARACTERISTICS),
		{ data: { choices: speechPattern } } = await createText(OPENAI_COMMAND.CREATE_CHARACTER_SPEECH_PATTERN);

	return {
		id: uniqueId(),
		name: `${firstName} ${lastName}`,
		concept: characterConcept,
		subConcept: characterSubConcept,
		description: '', //TODO generate
		features: characteristics?.length === 1 ? (characteristics[0].text ?? '') : '',
		speechPattern: speechPattern?.length === 1 ? (speechPattern[0].text ?? '') : ''
	}

}
const getSubConcepts = (): ICharacterSubConcept[] => require('../json/character-creation.json').subConcepts;