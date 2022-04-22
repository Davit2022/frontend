import React from "react";
import "../Footer.css";
import { Link } from "react-router-dom";
import { ITEMS } from "../../../constants/menuItems";

function FooterBottom() {
  return (
    <footer className="footer3">
      <div className="footer-bottom">
        <p>
          copyright &copy;2022
          <a href="/"> ITC-13 </a>
        </p>
        <div className="footer-menu">
          {/* <ul>
            <li key="1">
              <a href="/"> Home</a>
            </li>
            <li key="2">
              <a href="/fruits">Fruits</a>
            </li>
            <li key="3">
              <a href="/vegitables">Vegitables</a>
            </li>
            <li key="4">
              <a href="/eco">Eco</a>
            </li>
          </ul> */}
          {ITEMS.map((item) => (
            <Link style={{ margin: "10px" }} to={`${item.link}`} key={item.id}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default FooterBottom;
