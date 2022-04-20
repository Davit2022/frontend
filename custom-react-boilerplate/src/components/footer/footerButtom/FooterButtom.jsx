import React from "react";

function FooterBottom() {
  return (
    <footer className="Footer3">
      <div className="footer-bottom">
        <p>
          copyright &copy;2022
          <a href="/">Heghine</a>
        </p>
        <div className="footer-menu">
          <ul>
            <li key="1"><a href="/">Home</a></li>
            <li key="2"><a href="/about">About</a></li>
            <li key="3"><a href="/contact">Contact</a></li>
            <li key="4"><a href="/blog">Blog</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterBottom;
