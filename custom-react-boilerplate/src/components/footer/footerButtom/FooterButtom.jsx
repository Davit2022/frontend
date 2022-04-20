import React from "react";
import "../Footer.css";

function FooterBottom() {
  return (
    <footer
      className="Footer3"
      style={{
        position: "absolute",
        bottom: 0,
        background: "#6b5517",
        width: "96.9%",
        paddingTop: "4px",
        paddingRight: "20px",
        paddingBottom: "4px",
        paddingLeft: "20px",
        textAlign: "center",
      }}
    >
      <div className="footer-bottom">
        <p
          style={{
            float: "left",
            fontSize: "14px",
            wordSpacing: "2px",
            textTransform: "capitalize",
            color: "#ffffff",
          }}
        >
          copyright &copy;2022
          <a
            href="/"
            style={{
              color: "#ffffff",
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            Heghine
          </a>
        </p>
        <div
          className="footer-menu"
          style={{
            float: "right",
          }}
        >
          <ul
            style={{
              display: "flex",
            }}
          >
            <li
              key="1"
              style={{
                paddingRight: "10px",
                display: "block",
              }}
            >
              <a
                href="/"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                Home
              </a>
            </li>
            <li
              key="2"
              style={{
                paddingRight: "10px",
                display: "block",
              }}
            >
              <a
                href="/fruits"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                Fruits
              </a>
            </li>
            <li
              key="3"
              style={{
                paddingRight: "10px",
                display: "block",
              }}
            >
              <a
                href="/vegitables"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                Vegitables
              </a>
            </li>
            <li
              key="4"
              style={{
                paddingRight: "10px",
                display: "block",
              }}
            >
              <a
                href="/eco"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                Eco
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterBottom;
