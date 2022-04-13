import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <div>Logo</div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/catalog">Catalog</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Link to="/login">
                <div Classname="btn1">Login</div> 
            </Link>
            
            <Link to="/login">
                <div Classname="btn1">Login</div> 
            </Link>
        </div>
    )
}

export default Header
