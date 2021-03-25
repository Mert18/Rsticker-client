import React from 'react';

import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import Home from './components/screens/Home';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ProductScreen from './components/screens/ProductScreen.js';
import CartScreen from './components/screens/CartScreen.js';

const App = () => {
    return (
        <Router>
            <div className="container">
                <div className="container__sidebar">
                    <Sidebar />
                </div>

                <div className="container__content">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/product/:id" component={ProductScreen} />
                        <Route path="/cart/:id?" component={CartScreen} />
                    </Switch>
                </div>

                <div className="container__footer">
                    <Footer />
                </div>
            </div>
        </Router>
    )
}

export default App;