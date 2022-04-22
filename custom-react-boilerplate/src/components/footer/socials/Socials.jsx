import React from "react";
// import { Link } from "react-router-dom";
import { SOCIAL } from "../../../constants/Socials";

function Socials() {
  return (
    <footer className="footer2">
      {/* <ul>
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
      </ul> */}

      {SOCIAL.map((social) => (
        // <Link to={`${social.link}`} key={social.id} ison={social.className}>
        //   {social.icon}
        // </Link>
        <i className={social.className} />
      ))}
    </footer>
  );
}

export default Socials;
