import { Box, AppBar, Toolbar, IconButton, Typography, Button, useMediaQuery, useTheme, SwipeableDrawer, ListItem, ListItemText, List } from '@mui/material';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import routes from '../../config/routes';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import './Header.scss';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const createDrawerList = () => (
    <Box
      sx={{ width: 'auto'}}
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {routes.map((route) => (
          <NavLink key={route.name + '-mobile'} to={route.path}>      
            <ListItem>
              <ListItemText primary={route.name} />
            </ListItem>
          </NavLink>    
        ))}
      </List>
    </Box>
  );
  const createNavList = () => (
    <>
      {routes.map((route) => 
        <Button key={route.name + '-desktop'} color="inherit" component={Link} to={route.path}>{route.name}</Button>   
      )}
    </>
  );
  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Coriolis Companion
          </Typography>
          {
            isMobile ? (
              <>
                <IconButton onClick={toggleDrawer} edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                  <DonutSmallIcon />
                </IconButton>
                <SwipeableDrawer
                  anchor={'top'}
                  open={isOpen}
                  onClose={toggleDrawer}
                  onOpen={toggleDrawer}
                >
                  <>
                  {createDrawerList()}
                  </>
                </SwipeableDrawer>
              </>
            ) : (
              <>
                {createNavList()}
              </>
            )
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
