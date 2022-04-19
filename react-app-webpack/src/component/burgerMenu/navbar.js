import React, { useState, useEffect } from 'react'
// import { MdOutlineMenu } from 'react-icons/md';
import './navbar.css';


export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <li className='items'><a href="">Home</a></li>
          <li className='items'><a href="">About</a></li>
          <li className='items'><a href="">Contact</a></li>
          <li className='items'><a href="">Blog</a></li>
        </ul>
      )}

      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>
  )
}