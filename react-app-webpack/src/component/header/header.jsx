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
<<<<<<< HEAD
            
=======
>>>>>>> bcd6d1ad79392b88e83f7307fb9e6336442b65c0
            <Link to="/register">
                <div Classname="btn2">Register</div> 
            </Link>
        </div>
    )
}

export default Header
