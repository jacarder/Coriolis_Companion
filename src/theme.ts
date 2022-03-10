import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#334B48',
    },
    secondary: {
      main: '#19857B',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
//  https://mycolor.space/?hex=%2319857B&sub=1
//  #19857B #334B48 #96B1AC #5778AC #8DACE3