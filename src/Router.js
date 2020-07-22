import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { font } from './config/theme';
import React from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import CreateInvoicePage from './pages/CreateInvoicePage';
import Customer from './pages/Customer';
import Bin from './pages/Bin';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${font.size.root};
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
        </Switch>
      </BrowserRouter>
    </>);
  }
  
}

export default Router;
