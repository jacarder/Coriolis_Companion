import React, { FC, useContext, useEffect, useState } from 'react';
import { CartContext } from '../../config/cart-context';
import './BazaarCart.scss';
interface BazaarCartProps {}
interface ICart {
  itemId: number,
  quantity: number,
  itemName: string,
  total: number
}

const BazaarCart: FC<BazaarCartProps> = () => {
  const [cartFormat, setCartFormat] = useState<ICart[]>([]);
  const {cart, setCart} = useContext(CartContext)
  useEffect(() => {
    let newCartFormat: ICart[] = [];
    cart.forEach((item) => {
      const t = newCartFormat.find((quantItem) => quantItem.itemId === item.id);
      if(!t) {
        const itemsInCart = cart.filter((quantItem) => quantItem.id === item.id);
        const total = itemsInCart.map((item) => item.cost).reduce((a, b) => a + b);
        newCartFormat.push({
          itemId: item.id,
          quantity: itemsInCart.length,
          itemName: item.name,
          total: total
        } as ICart)
      }
    })
    setCartFormat(newCartFormat);
  }, [cart]);
  
  return (
    <div>
      Bazaar Cart
      {cartFormat.map(item => <li key={item.itemId}>{item.itemName} X {item.quantity} | Total: {item.total}</li>)}
      <div>Total: {cartFormat.map((item) => item.total).reduce((a, b) => a + b, 0)}</div>
    </div>
  )
};

export default BazaarCart;
