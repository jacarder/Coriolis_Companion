export interface ICharacter {
	id: string,
	name: string,
	concept: CHARACTER_CONCEPT,
	subConcept: ICharacterSubConcept,
	description: string,
	features: string[]
}

export interface ICharacterConcept {
	name: string,
	reputation: number,
	keyAttribute: ATTRIBUTE
}

export interface ICharacterSubConcept {
	parentConcept: CHARACTER_CONCEPT,
	name: string,
	skills: ISkill[],
	summary: string,
}

export interface ISkill {
	name: SKILL_NAME,
	coreAttribute: ATTRIBUTE,
}

export enum CHARACTER_CONCEPT {
	ARTIST = 'Artist',
	DATA_SPIDER = 'Data Spider',
	FUGITIVE = 'Fugitive',
	NEGOTIATOR = 'Negotiator',
	OPERATIVE = 'Operative',
	PILOT = 'Pilot',
	PREACHER = 'Preacher',
	SCIENTIST = 'Scientist',
	SHIP_WORKER = 'Ship Worker',
	SOLDIER = 'Soldier',
	TRAILBLAZER = 'Trailblazer'
}

export enum SKILL_NAME {
	DEXTERITY = 'Dexterity',
	FORCE = 'Force',
	INFILTRATION = 'Infiltration',
	MELEE_COMBAT = 'Melee Combat',
	OBSERVATION = 'Observation',
	RANGED_COMBAT = 'Ranged Combat',
	SURVIVAL = 'Survival',
	COMMAND = 'Command',
	CULTURE = 'Culture',
	DATA_DJINN = 'Data Djinn',
	MEDICURGY = 'Medicurgy',
	MYSTIC_POWERS = 'Mystic Powers',
	PILOT = 'Pilot',
	SCIENCE = 'Science',
	TECHNOLOGY = 'Technology',
}
export enum ATTRIBUTE {
	AGILITY = 'Agility',
	STRENGTH = 'Strength',
	EMPATHY = 'Empathy',
	WITS = 'Wits'
} 