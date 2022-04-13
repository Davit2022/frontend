import './App.css';
import { FaFacebook } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



function App() {
  return (
    <footer>
      <div className='footer-content'>
        <h3>Instigate Mobile</h3>
        <p>Instigate Mobile, ITC, Heghine Sarkisyan</p>
        <ul class="socials">
          <li>
          
            <a href="#"> <FaFacebook/> </a>
          </li>
          <li>
            <a href="#"><ImTwitter/></a>
          </li>
          <li>
            <a href="#"><FaGooglePlus/> </a>
          </li>
          <li>
            <a href="#"> <FaYoutube/> </a>
          </li>
          <li>
            <a href="#"><FaLinkedinIn/></a>
          </li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p>copyright &copy;2021 <a href="#">Heghine</a></p>
        <div class="footer-menu">
          <ul class="f-menu">
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

export default App;
