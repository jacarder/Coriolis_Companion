import React, { createContext } from "react";
import IBazaarItem from "../interfaces/bazaar-item";

export const CartContext = createContext({
	cart: [] as IBazaarItem[],
	setCart: (cart: IBazaarItem[]) => {}
});
