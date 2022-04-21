import React from "react";
import {
  FaFacebook, FaGooglePlus, FaLinkedinIn, FaYoutube,
} from "react-icons/fa";
import { ImTwitter } from "react-icons/im";

function Socials() {
  return (
    <footer className="footer2">
      <ul>
        <li key="1">
          <a href="/Facebook">
            <FaFacebook />
          </a>
        </li>
        <li key="2">
          <a href="/Twitter">
            <ImTwitter />
          </a>
        </li>
        <li key="3">
          <a href="/GooglePlus">
            <FaGooglePlus />
          </a>
        </li>
        <li key="4">
          <a href="/Youtube">
            <FaYoutube />
          </a>
        </li>
        <li key="5">
          <a href="/LinkedinIn">
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Socials;
