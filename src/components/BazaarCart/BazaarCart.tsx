import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
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
        const totalQuantity = itemsInCart.map((item) => item.quantity).reduce((a, b) => a + b);
        const totalCost = item.cost * totalQuantity;
        newCartFormat.push({
          itemId: item.id,
          quantity: totalQuantity,
          itemName: item.name,
          total: totalCost
        } as ICart)
      }
    })
    setCartFormat(newCartFormat);
  }, [cart]);
  
  return (
    <Card sx={{ minWidth: 275, maxWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Bazaar Cart
      </Typography>
      <Typography variant="body2" gutterBottom>
        {cartFormat.map(item => 
          <Grid key={item.itemId} container spacing={1}>
            <Grid item xs={6}>
              {item.itemName} x {item.quantity}
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" justifyContent="flex-end">
                {item.total}
              </Box>
            </Grid>            
          </Grid>
        )}        
      </Typography>
      <Typography variant="h6">
        <Grid container spacing={1}>
          <Grid item xs={6}>
              Total:
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="flex-end">
              {cartFormat.map((item) => item.total).reduce((a, b) => a + b, 0)}
            </Box>
          </Grid>
        </Grid>
      </Typography>      
    </CardContent>
    <CardActions>
      <Button variant="contained">Checkout</Button>
    </CardActions>
  </Card>


  )
};

export default BazaarCart;
