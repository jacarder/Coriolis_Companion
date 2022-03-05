import React, { useEffect } from 'react';
import { BrowserRouter, Route, RouteComponentProps, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import routes from './config/routes';
import Header from './components/Header/Header';
import { Container } from '@mui/material';

const App = () => {
  useEffect(() => {
  }, [])
  return (
    <Container fixed>
      <h1>Coriolis Companion</h1>
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
  );
}

export default App;
