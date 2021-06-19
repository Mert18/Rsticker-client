import React from 'react'

import {Link, withRouter} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import { logout } from '../actions/userActions';


const Navbar = ({match}) => {
    const dispatch = useDispatch();

    const isActive = path => {
        if(match.path === path){
            return {color: '#FFFFFF'}
        } else {
            return {color: '#DE6C83'}
        }
    }

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header className="nav">
            <div className="nav__left">
                <Link to="/" style={isActive('/')}>Home</Link>
            </div>
            <div className="nav__right">
                {userInfo ? (
                    <div className="nav__right__links">
                        <Link to="/profile" style={isActive('/cart')}>Profile</Link>
                        <Link to="/cart" style={isActive('/cart')}><i className="fas fa-shopping-cart"></i>Cart</Link>
                        <button onClick={logoutHandler}>Logout</button>
                    </div>
                    
                ) :
                (
                    <div className="nav__right__links">
                        <Link to="/login" style={isActive('/login')}><i className="fas fa-user-plus"></i>Log In</Link>
                        <Link to="/register" style={isActive('/register')}><i className="fas fa-user-plus"></i>Register</Link>
                    </div>
                    
                )}
                
            </div>
            
        </header>
    )
}

export default withRouter(Navbar);
