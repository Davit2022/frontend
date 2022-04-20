import '../footer.css'
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Socials() {
  return (
    <footer className='Footer2'>
      <ul className="socials">
        <li>
          <a href="#"> <FaFacebook /> </a>
        </li>
        <li>
          <a href="#"><ImTwitter /></a>
        </li>
        <li>
          <a href="#"><FaGooglePlus /> </a>
        </li>
        <li>
          <a href="#"> <FaYoutube /> </a>
        </li>
        <li>
          <a href="#"><FaLinkedinIn /></a>
        </li>
      </ul>
    </footer>
  );
}

export default Socials;
