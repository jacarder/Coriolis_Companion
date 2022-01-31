export default interface IBazaarItem {
	id: number;
	name: string;
	bonusEffects: string[],
	cost: string,
	weight: number,
	techTier: "P" | "O" | "A" | string,
	description: string
}