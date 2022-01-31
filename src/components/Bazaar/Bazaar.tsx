import React, { FC, Fragment, useEffect, useState } from 'react';
import IBazaarItem from '../../interfaces/bazaar-item';
import BazaarService from '../../services/BazaarService';
import './Bazaar.scss';
import { Box, Collapse, IconButton, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface BazaarProps {}
interface IRowProps {
  row: IBazaarItem
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

const Bazaar: FC<BazaarProps> = () => {
  const [bazaarInventory, setBazaarInventory] = useState<IBazaarItem[]>([]);
  useEffect(() => {
    setBazaarInventory(BazaarService.getBazaarInventory());
  });

  function renderBonusEffects(effects: string[]) {
    effects = effects || [];
    return (
      effects.map((effect) => 
        <li key={effect}>
          {effect}
        </li>
      )
    )
  }


  function Row(props: IRowProps) {
    const {row} = props;
    const [open, setOpen] = useState(false);
    return (
      <Fragment>
        <StyledTableRow>
          <StyledTableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </StyledTableCell>          
          <StyledTableCell>{row.name}</StyledTableCell>
          <StyledTableCell>{row.cost}</StyledTableCell>
          <StyledTableCell>{renderBonusEffects(row.bonusEffects)}</StyledTableCell>
          <StyledTableCell>{row.weight}</StyledTableCell>
          <StyledTableCell>{row.techTier}</StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Description
                </Typography>
                {row.description}
              </Box>
            </Collapse>
          </StyledTableCell>
        </StyledTableRow>    
      </Fragment>
    )
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell width="10%"/>
            <StyledTableCell width="15%">Name</StyledTableCell>
            <StyledTableCell width="5%">Cost</StyledTableCell>
            <StyledTableCell width="40%">Bonus Effects</StyledTableCell>
            <StyledTableCell width="5%">Weight</StyledTableCell>
            <StyledTableCell width="10%">Tech Tier</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bazaarInventory.map((item) => (
            <Row key={item.id} row={item}></Row>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default Bazaar;
