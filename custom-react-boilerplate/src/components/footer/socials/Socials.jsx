import React from "react";
import { SOCIAL } from "../../../constants/socials";

function Socials() {
  return (
    <footer className="footer2">
      {SOCIAL.map((social) => (
        <a href={social.link} target="_blank" rel="noreferrer">
          {" "}
          <i className={social.className} />
          {" "}
        </a>
      ))}
    </footer>
  );
}

export default Socials;
