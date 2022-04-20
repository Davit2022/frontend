import React from 'react';
import Logo from '../common/logo/Logo';
import Info from '../common/info/Info';
import User from '../common/user/User';
import Cart from '../common/cart/Cart';
import '../header/Header.css';
import Image from '../assets/image.png';


function Header() {
  return (

    <div className="header">
      <div className='header-logo'>
        <Logo src= {Image}  className="imgLogo" />
      </div> 

      <div className='header-info'>
        <Info />
      </div>

      <div className='header-buttons'>
        <div className='header-user'>
          <User />
        </div>

        <div className='header-cart'>
          <Cart />
        </div>   
      </div> 

    </div>

  )
}
export default Header;
