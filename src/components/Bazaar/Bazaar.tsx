import React, { ChangeEvent, FC, useEffect, useMemo, useState } from 'react';
import BazaarService from '../../services/Bazaar.service';
import './Bazaar.scss';
import { Box, Button, Collapse, Grid, IconButton, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { BazaarCategories, BazaarCategory, IBazaarCategory } from '../../constants/BazaarCategory';
import { IBazaarCartItem, IBazaarItemDisplay } from '../../interfaces/bazaar-item';
import useMarketStore from '../../store/MarketStore';

interface IBazaarProps {
  categoryId: BazaarCategory
}
interface IRowProps {
  row: IBazaarItemDisplay
}

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({

  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
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
  const [error, setError] = useState<string>('');
  useEffect(() => {
    if (category) {
      setBazaarInventory(BazaarService.getBazaarInventory(category.id));
    } else {
      setError('Error: Category does not exist.');
    }
  }, []);

  const Row = (props: IRowProps) => {
    const { row } = props;
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const { cart, addItemToCart } = useMarketStore();
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
      const cartItem: IBazaarCartItem = { ...item, ...quantityTotal };
      addItemToCart(cartItem);
      setQuantity(0);
    }
    const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
      setQuantity(+e.target.value);
    }
    const quantityAddButtonStyle = {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center"
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
            <Grid container spacing={1} style={quantityAddButtonStyle}>
              <Grid item xs={6}>
                <TextField
                  id={`quantity-${row.id}`}
                  label="Quantity"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  onChange={handleChangeQuantity}
                  value={quantity}
                />
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="secondary" onClick={() => handleAddItem(row)}>Add</Button>
              </Grid>
            </Grid>
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

  const inventoryList = useMemo(() => bazaarInventory.map((item) => (
    <Row key={item.id} row={item}></Row>
  )), [bazaarInventory])
  return (
    !error ?
      (
        <>
          <Typography color="white" variant="h6">
            {category?.title}
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <StyledTableHead>
                <TableRow>
                  <StyledTableCell width="15%">Name</StyledTableCell>
                  <StyledTableCell width="5%">Cost</StyledTableCell>
                  <StyledTableCell width="40%">Bonus Effects</StyledTableCell>
                  <StyledTableCell width="5%">Weight</StyledTableCell>
                  <StyledTableCell width="10%">Tech Tier</StyledTableCell>
                  <StyledTableCell width="20%">Quantity</StyledTableCell>
                  <StyledTableCell width="5%" />
                </TableRow>
              </StyledTableHead>
              <TableBody>
                {inventoryList}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        // TODO create error component
        <div>{error}</div>
      )
  )
};

export default Bazaar;
