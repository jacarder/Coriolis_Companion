export enum BazaarCategory {
	EVERYDAY_ITEMS,
	MEDICURGICAL_TECHNOLOGY,
	TOOLS_REPAIRS,
	SURVIVAL_COLONIZATION,
	EXOS_VEHICLES,
	RECON_INFILTRATION,
	WEAPON_GEAR_COMBAT
}

export interface IBazaarCategory {
	id: BazaarCategory,
	title: string
}

export const BazaarCategories: IBazaarCategory[] = [
	{
		id: BazaarCategory.EVERYDAY_ITEMS,
		title: "Everyday Items"
	},
	{
		id: BazaarCategory.MEDICURGICAL_TECHNOLOGY,
		title: "Medicurgical Technology"
	},
	{
		id: BazaarCategory.TOOLS_REPAIRS,
		title: "Tools & Repairs"
	},
	{
		id: BazaarCategory.SURVIVAL_COLONIZATION,
		title: "Survival & Colonization"
	},
	{
		id: BazaarCategory.EXOS_VEHICLES,
		title: "Exos & Vehicles"
	},
	{
		id: BazaarCategory.RECON_INFILTRATION,
		title: "Recon & Infiltration"
	},
	{
		id: BazaarCategory.WEAPON_GEAR_COMBAT,
		title: "Weapon Gear & Combat"
	},	
]