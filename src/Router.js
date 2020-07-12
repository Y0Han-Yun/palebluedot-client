import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Setting from './pages/Setting';

class Router extends React.Component{
    render (){
        return(<>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="regi">
                    <Register/>
                </Route>
                <Route exact path="Setting">
                    <Setting/>
                </Route>
            </Switch>
        </BrowserRouter>
        </>);
    }
}
export default Router;