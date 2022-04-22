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
