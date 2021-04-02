import React from 'react';

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
import ShippingScreen from './components/screens/ShippingScreen.js';
import ProfileScreen from './components/screens/ProfileScreen.js';
import PaymentScreen from './components/screens/PaymentScreen.js';
import PlaceOrderScreen from './components/screens/PlaceOrderScreen.js';
import UserListScreen from './components/screens/UserListScreen.js';
import Navbar from './components/Navbar';
import CategoryScreen from './components/screens/CategoryScreen.js';
import OrderScreen from './components/screens/OrderScreen.js'
import ProductListScreen from './components/screens/ProductListScreen.js';
import ProductEditScreen from './components/screens/ProductEditScreen.js';
import OrderListScreen from './components/screens/OrderListScreen';


const App = () => {

    return (
        <Router>
            <div className="container">
                <div className="container__header">
                    <Navbar />
                </div>
                <div className="container__content">
                    <Switch>
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/placeorder" component={PlaceOrderScreen} />
                        <Route path="/profile" component={ProfileScreen} />
                        <Route path="/shipping" component={ShippingScreen} />
                        <Route path="/payment" component={PaymentScreen} />
                        <Route path="/category/:id" component={CategoryScreen} />
                        <Route path="/product/:id" component={ProductScreen} />
                        <Route path="/cart/:id?" component={CartScreen} />
                        <Route path="/order/:id?" component={OrderScreen} />
                        <Route path="/admin/userlist" component={UserListScreen} />
                        <Route path="/admin/productlist" component={ProductListScreen} />
                        <Route path="/admin/orderlist" component={OrderListScreen} />
                        <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
                        <Route path="/" exact component={Home} />

                    </Switch>
                </div>
            </div>

        </Router>
    )
}

export default App;