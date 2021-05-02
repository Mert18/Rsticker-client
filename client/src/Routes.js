import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App';
import ProductScreen from './components/screens/ProductScreen';


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path='/product/:id' component={ProductScreen} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;