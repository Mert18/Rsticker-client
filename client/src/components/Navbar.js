import React from 'react'

import {Link, withRouter} from 'react-router-dom';


const Navbar = ({match}) => {

    const isActive = path => {
        if(match.path === path){
            return {color: '#22181C'}
        } else {
            return {color: '#DE6C83'}
        }
    }

    return (
        <header className="nav">
            <div className="nav__left">
                <Link to="/" style={isActive('/')}>Home</Link>
            </div>
            <div className="nav__right">
                <Link to="/signup" style={isActive('/signup')}><i className="fas fa-user-plus"></i>Login or Signup</Link>
            </div>
            
        </header>
    )
}

export default withRouter(Navbar);
