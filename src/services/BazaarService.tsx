import IBazaarItem from "../interfaces/bazaar-item";

class BazaarService {
	getBazaarInventory = (): IBazaarItem[] => {
		return require('../json/everyday-items.json');
	}
}

export default new BazaarService;