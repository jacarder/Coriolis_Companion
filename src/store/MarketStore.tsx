import create from 'zustand'
import { IBazaarCartItem } from "../interfaces/bazaar-item"

type MarketState = {
	cart: IBazaarCartItem[],
	addItemToCart: (cart: IBazaarCartItem) => void,
	updateCart: (itemId: number, quantity: number) => void,
}
/**
 * TODO: Move market/cart logic out of components and into store
 */
const useMarketStore = create<MarketState>((set) => ({
	cart: [],
	addItemToCart: (newItem: IBazaarCartItem) =>
		set((state) => {
			const newCart = [
				...state.cart
			]
			const itemInCart = newCart.find(item => item.id === newItem.id);
			if (!itemInCart) {
				return {
					...state,
					cart: [
						...state.cart,
						{
							...newItem,
							total: newItem.cost * newItem.quantity,
						}
					]
				}
			}
			return {
				...state,
				cart: state.cart.map((item) => {
					const totalQuantity = itemInCart.quantity + newItem.quantity;
					const totalCost = item.cost * totalQuantity;
					if (item.id === itemInCart.id) {
						return {
							...newItem,
							quantity: totalQuantity,
							total: totalCost,
						};
					}
					return item;
				})
			}

		}),
	updateCart: (itemId: number, quantity: number) =>
		set((state) => {
			let existingItem = state.cart.find((item) => item.id === itemId);
			if (existingItem && quantity >= 0) {
				existingItem.quantity = quantity;
				existingItem.total = existingItem.cost * quantity;
				if (existingItem.quantity === 0) {
					//  Remove item from cart
					return {
						...state,
						cart: state.cart.filter((item) => item.id !== existingItem?.id)
					}
				}
				return {
					...state,
					cart: state.cart.map((item) => {
						if (item.id === existingItem?.id) {
							return {
								...item,
								...existingItem
							}
						}
						return item;
					})
				}
			}
			return state;
		})
}));
export default useMarketStore;
