import create from 'zustand'
import { IBazaarCartItem } from "../interfaces/bazaar-item"

type MarketState = {
	cart: IBazaarCartItem[],
	setCart: (cart: IBazaarCartItem[]) => void
}
/**
 * TODO: Move market/cart logic out of components and into store
 */
const useMarketStore = create<MarketState>((set) => ({
	cart: [],
	setCart: (cart: IBazaarCartItem[]) =>
		set((state) => ({
			...state,
			cart
		}))
}));
export default useMarketStore;
