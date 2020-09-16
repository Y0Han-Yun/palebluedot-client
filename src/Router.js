import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { font } from './config/theme';
import React from 'react';
import Home from './pages/Home';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import CreateInvoicePage from './pages/CreateInvoicePage';
import Customer from './pages/Customer';
import Bin from './pages/Bin';
import { Drawer, NotificationSample, AppBarLayoutSample } from './pages/Samples';
import DrawerPage from './pages/Drawer';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${font.size.root};
  }
  header{
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
  }
  body {
    margin: 0px;
  }
`;

class Router extends React.Component {

  render() {
    return (<>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/regi">
            <Register />
          </Route>
          <Route exact path="/creinvo">
            <CreateInvoicePage />
          </Route>
          <Route exact path="/customer">
            <Customer />
          </Route>
          <Route exact path="/bin">
            <Bin />
          </Route>
          <Route exact path="/forgot">
            <ForgotPassword />
          </Route>
          <Route exact path="/drawer-sample">
            <Drawer />
          </Route>
          <Route exact path="/drawer">
            <DrawerPage />
          </Route>
          <Route exact path="/notification-sample">
            <NotificationSample />
          </Route>
          <Route exact path="/appbarlayout-sample">
            <AppBarLayoutSample />
          </Route>
        </Switch>
      </BrowserRouter>
    </>);
  }
  
}

export default Router;
