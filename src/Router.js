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
import { Drawer, NotificationSample, AppBarLayoutSample, ContextSample, ContextSampleSecond } from './pages/Samples';
import DrawerPage from './pages/Drawer';
import Context from './pages/Context';
import { AuthProvider } from './contexts/AuthContext';
import { CounterProvider } from './pages/Samples/ContextSample/CounterContext';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${font.size.root};
  }
  body {
    margin: 0px;
    overflow: hidden;
  }
`;

class Router extends React.Component {

  render() {
    return (<>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <CounterProvider>
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
              <Route exact path="/context">
                <Context />
              </Route>
              <Route exact path="/context-sample">
                <ContextSample />
              </Route>
              <Route exact path="/context-sample/second">
                <ContextSampleSecond />
              </Route>
            </Switch>
          </CounterProvider>
        </AuthProvider>
      </BrowserRouter>
    </>);
  }
  
}

export default Router;
