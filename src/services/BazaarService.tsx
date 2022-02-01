import { BazaarCategory } from "../constants/BazaarCategory";
import IBazaarItem from "../interfaces/bazaar-item";

class BazaarService {
	getBazaarInventory = (category: BazaarCategory): IBazaarItem[] => {
		let inventory = require('../json/everyday-items.json') as IBazaarItem[];
		return inventory.filter((item) => item.category === category);
	}
}

export default new BazaarService;