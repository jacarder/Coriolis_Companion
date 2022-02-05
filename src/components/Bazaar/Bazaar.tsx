import React, { ChangeEvent, FC, useContext, useEffect, useState } from 'react';
import BazaarService from '../../services/BazaarService';
import './Bazaar.scss';
import { Box, Button, Collapse, IconButton, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { BazaarCategories, BazaarCategory, IBazaarCategory } from '../../constants/BazaarCategory';
import { CartContext } from '../../config/cart-context';
import { AddBox } from '@mui/icons-material';
import { IBazaarCartItem, IBazaarItemDisplay } from '../../interfaces/bazaar-item';

interface IBazaarProps {
  categoryId: BazaarCategory
}
interface IRowProps {
  row: IBazaarItemDisplay
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Bazaar: FC<IBazaarProps> = (props) => {
  const category: IBazaarCategory | undefined = BazaarCategories.find((item) => item.id === props.categoryId);
  const [bazaarInventory, setBazaarInventory] = useState<IBazaarItemDisplay[]>([]);
  const {cart, setCart} = useContext(CartContext);
  const [error, setError] = useState<string>('');
  useEffect(() => {
    if(category) {
      setBazaarInventory(BazaarService.getBazaarInventory(category.id));
    } else {
      setError('Error: Category does not exist.');
    }
  }, []);

  const Row = (props: IRowProps) => {
    const {row} = props;
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const renderBonusEffects = (effects: string[]) => {
      effects = effects || [];
      return (
        <ul> 
          {effects.map((effect) => 
            <li key={effect}>
              {effect}
            </li>
          )}
        </ul>
      )
    }
    const handleAddItem = (item: IBazaarItemDisplay) => {
      const quantityTotal = {
        quantity: quantity,
        total: 0
      } as IBazaarCartItem
      const cartItem: IBazaarCartItem = {...item, ...quantityTotal};
      let newCart = [...cart, cartItem];      
      setCart(newCart);
      setQuantity(0);
    }
    const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
      setQuantity(+e.target.value);
    }
    return (
      <>
        <StyledTableRow>         
          <StyledTableCell>{row.name}</StyledTableCell>
          <StyledTableCell>{row.cost}</StyledTableCell>
          <StyledTableCell>{renderBonusEffects(row.bonusEffects)}</StyledTableCell>
          <StyledTableCell>{row.weight}</StyledTableCell>
          <StyledTableCell>{row.techTier}</StyledTableCell>
          <StyledTableCell>
            <TextField
              id={`quantity-${row.id}`}
              label="Quantity"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              onChange={handleChangeQuantity}
            />
            <Button variant="contained" onClick={() => handleAddItem(row)}>Add to Cart</Button>
          </StyledTableCell>
          <StyledTableCell align='right'>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </StyledTableCell>           
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="subtitle1" gutterBottom >
                  Description
                </Typography>
                {row.description}
              </Box>
            </Collapse>
          </StyledTableCell>
        </StyledTableRow>    
      </>
    )
  }

return (
  !error ?   
    (
      <TableContainer>
        <Typography variant="h6">
          {category?.title}
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell width="15%">Name</StyledTableCell>
              <StyledTableCell width="5%">Cost</StyledTableCell>
              <StyledTableCell width="40%">Bonus Effects</StyledTableCell>
              <StyledTableCell width="5%">Weight</StyledTableCell>
              <StyledTableCell width="10%">Tech Tier</StyledTableCell>
              <StyledTableCell width="10%">Quantity</StyledTableCell>
              <StyledTableCell width="10%"/>
            </TableRow>
          </TableHead>
          <TableBody>
            {bazaarInventory.map((item) => (
              <Row key={item.id} row={item}></Row>
            ))}
          </TableBody>
        </Table>
      </TableContainer>      
    ) : (
      // TODO create error component
      <div>{error}</div>
    )
  )
};

export default Bazaar;
