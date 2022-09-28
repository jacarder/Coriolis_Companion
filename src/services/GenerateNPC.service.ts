import { CHARACTER_CONCEPT, ICharacter, ICharacterSubConcept } from "../interfaces/character";
import * as _ from 'lodash';
import GeneratePersonService from "./GeneratePerson.service";
import { uniqueId } from "lodash";

export const generateNPC = async (): Promise<ICharacter> => {
	const characterConcept = _.sample(Object.values(CHARACTER_CONCEPT)) as CHARACTER_CONCEPT,
		characterSubConcept = _.sample(getSubConcepts().filter(x => x.parentConcept === characterConcept)) as ICharacterSubConcept,
		{ firstName, lastName } = await GeneratePersonService.getNames("m");

	return {
		id: uniqueId(),
		name: `${firstName} ${lastName}`,
		concept: characterConcept,
		subConcept: characterSubConcept,
		description: '', // TODO generate
		features: [] // TODO generate
	}

}
const getSubConcepts = (): ICharacterSubConcept[] => require('../json/character-creation.json').subConcepts;