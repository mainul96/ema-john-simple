import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        
            <nav  className='header'>
                <img src={logo} alt="" />
                <div>
                    <a href="/shop">Shop</a>
                    <a href="/orderReview">Order Review</a>
                    <a href="/inventor">Manage Inventor</a>
                    <a href="/login">Log in</a>
                </div>
            </nav>
       
    );
};

export default Header;