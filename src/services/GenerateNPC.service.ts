import { CHARACTER_CONCEPT, ICharacterSubConcept } from "../interfaces/character";
import * as _ from 'lodash';

export const generateNPC = () => {
	const characterConcept = _.sample(Object.values(CHARACTER_CONCEPT)),
		characterSubConcept = _.sample(getSubConcepts().filter(x => x.parentConcept === characterConcept));
	console.log(characterConcept, characterSubConcept)
}
const getSubConcepts = (): ICharacterSubConcept[] => require('../json/character-creation.json').subConcepts;