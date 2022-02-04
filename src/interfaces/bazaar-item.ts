import { BazaarCategory } from "../constants/BazaarCategory";

export default interface IBazaarItem {
	id: number;
	name: string;
	bonusEffects: string[],
	cost: number,
	weight: number,
	techTier: "P" | "O" | "A" | string,
	description: string,
	category: BazaarCategory
}