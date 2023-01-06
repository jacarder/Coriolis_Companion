import { BazaarCategory } from "../constants/BazaarCategory";

interface IBazaarItem {
	id: number;
	name: string;
	cost: number;
}

export interface IBazaarItemDisplay extends IBazaarItem {
	id: number;
	created_at: string | null;
	name: string;
	bonus_effects: string[] | null;
	cost: number;
	weight: number | null;
	tech_tier: string;
	bazaar_categories_id: BazaarCategory;
	description: string;
}

export interface IBazaarCartItem extends IBazaarItem {
	quantity: number;
	total: number;
}