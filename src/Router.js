import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './Web/Home';
import Skills from './Web/Skills';
import Contact from './Web/Contact';
import About from './Web/About';
import Portfolio from './Web/Portfolio';

const GlobalStyle = createGlobalStyle`
  html {
    
  }
  body {
    margin: 0px;
    overflow: hidden;
  }
`;

class Router extends React.Component {
  render () {
    return (<>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </BrowserRouter>
    </>);
  }
}
export default Router;