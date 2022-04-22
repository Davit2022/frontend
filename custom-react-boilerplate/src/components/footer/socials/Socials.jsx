import React from "react";
import { Link } from "react-router-dom";
import { SOCIAL } from "../../../constants/socials";

function Socials() {
  return (
    <footer className="footer2">
      {SOCIAL.map((social) => (
        <Link to={`${social.link}`} key={social.id}>
          <i className={social.className} />
        </Link>
      ))}
    </footer>
  );
}

export default Socials;
