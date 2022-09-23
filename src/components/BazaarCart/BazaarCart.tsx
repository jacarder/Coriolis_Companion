import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material';
import { ChangeEvent, FC, useEffect, useState, FocusEvent } from 'react';
import useMarketStore from '../../store/MarketStore';
import './BazaarCart.scss';
interface BazaarCartProps { }
interface ICart {
  itemId: number,
  quantity: number,
  itemName: string,
  total: number
}
const BazaarCart: FC<BazaarCartProps> = () => {
  const [cartFormat, setCartFormat] = useState<ICart[]>([]);
  const { cart, updateCart } = useMarketStore();
  useEffect(() => {
    let newCartFormat: ICart[] = [];
    cart.forEach((item) => {
      const t = newCartFormat.find((quantItem) => quantItem.itemId === item.id);
      if (!t) {
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
    updateCart(itemId, +e.target.value);
  }
  const handleOnBlurQuantity = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>, itemId: number) => {
    updateCart(itemId, +e.target.value);
  }
  const gridFlexAlign = {
    display: 'flex',
    alignItems: 'flex-end'
  }
  return (
    <>
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
                  sx={{ ml: 1 }}
                  onChange={(e) => handleChangeQuantity(e, item.itemId)}
                  onBlur={(e) => handleOnBlurQuantity(e, item.itemId)}
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
        <Divider />
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
      <Button fullWidth variant="contained" color="secondary">Checkout</Button>
    </>
  )
};

export default BazaarCart;
