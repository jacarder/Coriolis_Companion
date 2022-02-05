import { Box, Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, FC, useContext, useEffect, useState } from 'react';
import { CartContext } from '../../config/cart-context';
import { IBazaarCartItem } from '../../interfaces/bazaar-item';
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

  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, itemId: number) => {
    let existingItem = cart.filter((item) => item.id === itemId)[0];
    if(existingItem) {
      existingItem.quantity = +e.target.value;
      let newCart: IBazaarCartItem[] = [];
      if(existingItem.quantity <= 0) {
        //  Remove item from cart
        newCart = cart.filter((item) => item.id !== itemId);
      } else {
        newCart = cart.map((item) => existingItem.id === item.id ? existingItem : item)
      }
      setCart(newCart)
    }
  }
  const gridFlexAlign = {
    display: 'flex',
    alignItems: 'flex-end'
  }
  return (
    <Card sx={{ minWidth: 275, maxWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom component={'div'}>
        Bazaar Cart
      </Typography>
      <Typography variant="body2" gutterBottom component={'div'}>
        {cartFormat.map(item => 
          <Grid key={item.itemId} container spacing={1} style={gridFlexAlign}>
            <Grid item xs={6}>
              {item.itemName}
            </Grid>
            <Grid item xs={3}>
              <Box display="flex" justifyContent="flex-end" alignItems="center">
                x
                <TextField
                  id={`totalItemQuantity-${item.itemId}`}
                  value={item.quantity}
                  label=""
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  margin='dense'
                  sx={{ml: 1}}
                  onChange={(e) => handleChangeQuantity(e, item.itemId)}
                />
              </Box>
            </Grid>        
            <Grid item xs={3}>
              <Box display="flex" justifyContent="flex-end">
                {item.total}
              </Box>
            </Grid>            
          </Grid>
        )}        
      </Typography>
      <Typography variant="h6">
        <hr/>
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
    <CardActions >
        <Button variant="contained" color="secondary">Checkout</Button>
    </CardActions>
  </Card>


  )
};

export default BazaarCart;
