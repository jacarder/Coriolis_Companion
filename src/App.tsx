import React, { useEffect } from 'react';
import { BrowserRouter, Route, RouteComponentProps, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import routes from './config/routes';
import Header from './components/Header/Header';
import { Box, Container, Typography } from '@mui/material';

const App = () => {
  useEffect(() => {
  }, [])
  document.body.classList.add('stars');
  //document.body.appendChild()
  return (
    <>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <Container fixed sx={{zIndex: 10, position: 'relative'}}>
        <Typography color="white" variant="h4">
          Coriolis Companion
        </Typography>
        <BrowserRouter basename="/Coriolis_Companion">
          <Header></Header>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component
                      name={route.name}
                      {...props}
                      {...route.props}
                    />
                  )}
                />
              )
            })}
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
