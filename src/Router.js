import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './Pages/Web/Home';
import Skills from './Pages/Web/Skills';
import Contact from './Pages/Web/Contact';
import About from './Pages/Web/About';
import Portfolio from './Pages/Web/Portfolio';

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
