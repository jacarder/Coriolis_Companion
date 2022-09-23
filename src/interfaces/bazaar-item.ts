import { BazaarCategory } from "../constants/BazaarCategory";

interface IBazaarItem {
	id: number;
	name: string;
	cost: number;
}

export interface IBazaarItemDisplay extends IBazaarItem {
	bonusEffects: string[];
	weight: number;
	techTier: "P" | "O" | "A" | string;
	description: string;
	category: BazaarCategory;
}

export interface IBazaarCartItem extends IBazaarItem {
	quantity: number;
	total: number;
}