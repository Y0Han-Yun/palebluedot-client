import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from 'src/Pages/Web/Home';
import Skills from 'src/Pages/Web/Skills';
import Contact from 'src/Pages/Web/Contact';
import About from 'src/Pages/Web/About';
import Portfolio from 'src/Pages/Web/Portfolio';
import Memo from 'src/Pages/Web/Memo';
import { ContactProvider } from 'src/Context/ContactContext';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    // overflow: hidden;
  }
`;

class Router extends React.Component {

  render () {
    return (<>
      <GlobalStyle />
      <BrowserRouter>
        <ContactProvider>
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
            <Route exact path="/memo">
              <Memo />
            </Route>
            <Route path="*">
              404_PAGE_NOT_FOUND
            </Route>
          </Switch>
        </ContactProvider>
      </BrowserRouter>
    </>);
  }

}
export default Router;
