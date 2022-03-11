import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Coriolis Companion
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/tools">Tools</Button>
        <Button color="inherit" component={Link} to="/bazaar">Bazaar</Button>
        <Button color="inherit" component={Link} to="/knowledge-center">Knowledge Center</Button>
        <Button color="inherit" component={Link} to="/Icons">Icons</Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
