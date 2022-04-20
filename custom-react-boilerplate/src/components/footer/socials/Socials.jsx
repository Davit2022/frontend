import React from "react";
import {
  FaFacebook, FaGooglePlus, FaLinkedinIn, FaYoutube,
} from "react-icons/fa";
import { ImTwitter } from "react-icons/im";

function Socials() {
  return (
    <footer
      className="Footer2"
      style={{
        position: "absolute",
        bottom: 0,
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgb(255 255 255)",
        top: "83%",
        height: "5px",
        marginTop: "1rem",
        marginRight: "0px",
        marginBottom: "1rem",
        marginLeft: "0px",
      }}
    >
      <ul
        className="socials"
        style={{
          listStyle: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <li
          key="1"
          style={{
            marginTop: "0",
            marginRight: "20px",
            marginBottom: "0",
            marginLeft: "160%",
          }}
        >
          <a
            href="/Facebook"
            style={{
              textDecoration: "none",
              color: "#ffffff",
              border: "1.1px solid #ffffff",
              padding: "10px",
              borderRadius: "25%",
            }}
          >
            <FaFacebook />
          </a>
        </li>
        <li
          key="2"
          style={{
            marginTop: "0",
            marginRight: "20px",
            marginBottom: "0",
            marginLeft: "20",
          }}
        >
          <a
            href="/Twitter"
            style={{
              textDecoration: "none",
              color: "#ffffff",
              border: "1.1px solid #ffffff",
              padding: "10px",
              borderRadius: "25%",
            }}
          >
            <ImTwitter />
          </a>
        </li>
        <li
          key="3"
          style={{
            marginTop: "0",
            marginRight: "20px",
            marginBottom: "0",
            marginLeft: "20",
          }}
        >
          <a
            href="/GooglePlus"
            style={{
              textDecoration: "none",
              color: "#ffffff",
              border: "1.1px solid #ffffff",
              padding: "10px",
              borderRadius: "25%",
            }}
          >
            <FaGooglePlus />
          </a>
        </li>
        <li
          key="4"
          style={{
            marginTop: "0",
            marginRight: "20px",
            marginBottom: "0",
            marginLeft: "20",
          }}
        >
          <a
            href="/Youtube"
            style={{
              textDecoration: "none",
              color: "#ffffff",
              border: "1.1px solid #ffffff",
              padding: "10px",
              borderRadius: "25%",
            }}
          >
            <FaYoutube />
          </a>
        </li>
        <li
          key="5"
          style={{
            marginTop: "0",
            marginRight: "20px",
            marginBottom: "0",
            marginLeft: "20",
          }}
        >
          <a
            href="/LinkedinIn"
            style={{
              textDecoration: "none",
              color: "#ffffff",
              border: "1.1px solid #ffffff",
              padding: "10px",
              borderRadius: "25%",
            }}
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Socials;
