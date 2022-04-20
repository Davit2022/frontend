import React from 'react';
import Logo from '../common/Logo';
import image from '../assets/image.png';
import Info from '../common/Info';
import Button from '../common/Button';
import '../header/Header.css';


const Header = () => {

  return (
    <div className="header">

      <div className='header-logo'>
        <Logo imageSrc={image} quotes='You happy with us' />
      </div>
      <div className='header-info'>
      <Info />
      </div>
      <div className='header-buttons'>
        <Button title={"Sign In"} className={"header-button"} onClick={()=>{console.log("login")}}/>
        <Button title={"Cart"} className={"header-button"} onClick={()=>{console.log("add cart")}}/>        
      </div>
    </div>
  )
}

export default Header;
