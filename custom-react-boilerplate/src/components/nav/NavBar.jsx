import React from "react";
import { Link } from "react-router-dom";
import { ITEMS } from "../../constants/menuItems";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <div className="menu">
        <nav className="navBar">
          {ITEMS.map((item) => (
            <Link to={`${item.link}`} key={item.id}>
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="input-icons">
          <i className="fa fa-search fa-1x" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
