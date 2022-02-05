import { BazaarCategory } from "../constants/BazaarCategory";
import { IBazaarItemDisplay } from "../interfaces/bazaar-item";

class BazaarService {
	getBazaarInventory = (category: BazaarCategory): IBazaarItemDisplay[] => {
		let inventory = require('../json/everyday-items.json') as IBazaarItemDisplay[];
		return inventory.filter((item) => item.category === category);
	}
}

export default new BazaarService;