import React, { FC, useState } from "react";
import { IBazaarCartItem } from "../interfaces/bazaar-item";
import { CartContext } from "./cart-context";

const CartContextProvider: FC = ({ children }) => {
	const [cart, setCart] = useState<IBazaarCartItem[]>([]);
	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	)	
}

export default CartContextProvider;