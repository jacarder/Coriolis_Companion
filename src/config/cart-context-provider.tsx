import React, { FC, useState } from "react";
import IBazaarItem from "../interfaces/bazaar-item";
import { CartContext } from "./cart-context";

const CartContextProvider: FC = ({ children }) => {
	const [cart, setCart] = useState<IBazaarItem[]>([]);
	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	)	
}

export default CartContextProvider;