
import { Diamond, SimCard, Storefront } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, IconButton, Theme, Zoom } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import React, { FC, useState } from 'react';
import './Slider.scss';

interface ISliderProps {
  sliderTitle: string
}

// const useStyles = makeStyles((theme: Theme) => ({
//   cartIcon: {
//     backgroundColor: theme.palette.secondary
//   }
// }));

const Slider: FC<ISliderProps> = ({children, sliderTitle}) => {
  const [open, setOpen] = useState(false);
  //const classes = useStyles();
  const theme = useTheme() as any;
  const style = {
    minWidth: 275,
    maxWidth: 275
  }

  return (
    <Box sx={{ 
      position: 'fixed',
      right: '0px',
      zIndex: '9999',
      width: 'auto'
    }}>
      <Zoom in={!open} timeout={{enter: 500, exit: 200}}>
        <Avatar variant="rounded" sx={{float: 'right', right: '0px', position: 'fixed'}} >
          <IconButton
            size="large"
            color="secondary"
            onClick={() => setOpen(!open)}
          >
            <SimCard/>
          </IconButton>
        </Avatar>
      </Zoom>
      <Zoom in={open} timeout={{enter: 200, exit: 200}}>
        <Card sx={{ 
          minWidth: style.minWidth, 
          maxWidth: style.maxWidth,
          display: open ? 'block' : 'none'
        }}>
          <Zoom in={open} timeout={{enter: 600, exit: 0}}>
            <IconButton
              size="large"
              color="secondary"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginLeft: 'auto', 
                marginRight: 'auto'
              }}
              onClick={() => setOpen(!open)}
            >
              <Diamond/>
              {sliderTitle}
              <Diamond/>
            </IconButton>
          </Zoom>
          <CardContent>
            {children}
          </CardContent>
        </Card>
      </Zoom>
    </Box>
  )
}

export default Slider;
