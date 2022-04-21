import React from "react";
import "../Footer.css";

function FooterBottom() {
  return (
    <footer className="Footer3">
      <div className="footer-bottom">
        <p>
          copyright &copy;2022
          <a href="/"> Heghine </a>
        </p>
        <div className="footer-menu">
          <ul>
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
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterBottom;
