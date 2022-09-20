import React, { createContext } from "react";
import { IBazaarCartItem } from "../interfaces/bazaar-item";

export const CartContext = createContext({
	cart: [] as IBazaarCartItem[],
	setCart: (cart: IBazaarCartItem[]) => {}
});
