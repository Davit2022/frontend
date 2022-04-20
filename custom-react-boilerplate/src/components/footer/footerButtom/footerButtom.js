import '../footer.css';
import React from 'react';

function FooterBottom() {
  return (
    <footer className='Footer3'>
      <div className="footer-bottom">
        <p>copyright &copy;2022 <a href="#">Heghine</a></p>
        <div className="footer-menu">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Blog</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterBottom;
