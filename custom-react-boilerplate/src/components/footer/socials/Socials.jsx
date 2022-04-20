import React from "react";
import {
  FaFacebook, FaGooglePlus, FaLinkedinIn, FaYoutube,
} from "react-icons/fa";
import { ImTwitter } from "react-icons/im";

function Socials() {
  return (
    <footer className="Footer2">
      <ul className="socials">
        <li key="1">
          <FaFacebook />
        </li>
        <li key="2">
          <ImTwitter />
        </li>
        <li key="3">
          <FaGooglePlus />
        </li>
        <li key="4">
          <FaYoutube />
        </li>
        <li key="5">
          <FaLinkedinIn />
        </li>
      </ul>
    </footer>
  );
}

export default Socials;
