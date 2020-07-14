import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import React from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import Setting from './pages/Setting';

const GlobalStyle = createGlobalStyle`
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
          <Route exact path="/set">
            <Setting />
          </Route>
        </Switch>
      </BrowserRouter>
    </>);
  }
  
}

export default Router;
