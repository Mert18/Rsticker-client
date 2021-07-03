import React from 'react'

import {Link, withRouter} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import { logout } from '../actions/userActions';


const Navbar = ({match}) => {
    const dispatch = useDispatch();
    const isActive = path => {
        console.log(path)
        if(match.path === path){
            return {textDecoration: `yellow underline`, textDecorationThickness:'6px'}
        } else {
            return {color: 'black'}
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
                <div className="nav__left__back"></div>
                <div className="nav__left__front"><Link to="/">commerce.com</Link></div>
            </div>
            <div className="nav__middle">
                <Link to="/" style={isActive('/')}>Home</Link>
                <Link to="/custom" style={isActive('/custom')}>Custom</Link>
            </div>
            {userInfo ? (
                    <div className="nav__right">
                        <Link to="/profile" style={isActive('/profile')}>Profile</Link>
                        <Link to="/cart" style={isActive('/cart')}>Cart</Link>
                        <button onClick={logoutHandler}>Logout</button>
                    </div>
                    
                ) :
                (
                    <div className="nav__right">
                        <Link to="/login" style={isActive('/login')}>Log In</Link>
                        <Link to="/register" style={isActive('/register')}>Register</Link>
                    </div>
                    
                )}
        </header>
    )
}

export default withRouter(Navbar);
