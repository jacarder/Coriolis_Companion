
import { SimCard } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, IconButton, Theme, Zoom } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import React, { FC, useState } from 'react';
import './Slider.scss';

interface SliderProps {}

// const useStyles = makeStyles((theme: Theme) => ({
//   cartIcon: {
//     backgroundColor: theme.palette.secondary
//   }
// }));

const Slider: FC<SliderProps> = ({children}) => {
  const [open, setOpen] = useState(false);
  //const classes = useStyles();
  const theme = useTheme() as any;
  const style = {
    minWidth: 275,
    maxWidth: 275
  }
  console.log(theme)
  return (
    <Box sx={{ 
      position: 'fixed',
      right: '0px',
      zIndex: '9999',
      display: open ? 'initial' : 'hidden'
    }}>
      <Avatar variant="rounded" sx={{float: 'right', right: '0px', position: 'fixed'}} >
        <IconButton
          size="large"
          color="secondary"
          onClick={() => setOpen(!open)}
        >
          <SimCard/>
        </IconButton>
      </Avatar>
      <Zoom in={open}>
        <Card sx={{ minWidth: style.minWidth, maxWidth: style.maxWidth }}>
          <CardContent>
            {children}
          </CardContent>
        </Card>
      </Zoom>
    </Box>
  )
}

export default Slider;
