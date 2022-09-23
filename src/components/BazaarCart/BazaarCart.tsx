import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material';
import { ChangeEvent, FC, useEffect, useState, FocusEvent } from 'react';
import useMarketStore from '../../store/MarketStore';
import './BazaarCart.scss';
interface BazaarCartProps { }
const BazaarCart: FC<BazaarCartProps> = () => {
  const { cart, updateCart } = useMarketStore();

  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, itemId: number) => {
    updateCart(itemId, +e.target.value);
  }
  const handleOnBlurQuantity = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>, itemId: number) => {
    updateCart(itemId, +e.target.value);
  }
  const gridFlexAlign = {
    display: 'flex',
    alignItems: 'flex-end'
  }
  console.log(cart)
  return (
    <>
      <Typography variant="body2" gutterBottom component={'div'}>
        {cart.map(({ id, name, quantity, total }) =>
          <Grid key={id} container spacing={1} style={gridFlexAlign}>
            <Grid item xs={6}>
              {name}
            </Grid>
            <Grid item xs={3}>
              <Box display="flex" justifyContent="flex-end" alignItems="center">
                x
                <TextField
                  id={`totalItemQuantity-${id}`}
                  value={quantity}
                  label=""
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  margin='dense'
                  sx={{ ml: 1 }}
                  onChange={(e) => handleChangeQuantity(e, id)}
                  onBlur={(e) => handleOnBlurQuantity(e, id)}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box display="flex" justifyContent="flex-end">
                {total}
              </Box>
            </Grid>
          </Grid>
        )}
      </Typography>
      <Typography variant="h6">
        <Divider />
        <Grid container spacing={1}>
          <Grid item xs={6}>
            Total:
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="flex-end">
              {cart.map((item) => item.total).reduce((a, b) => a + b, 0)}
            </Box>
          </Grid>
        </Grid>
      </Typography>
      <Button fullWidth variant="contained" color="secondary">Checkout</Button>
    </>
  )
};

export default BazaarCart;
