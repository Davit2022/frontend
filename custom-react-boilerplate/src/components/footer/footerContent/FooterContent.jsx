import React from "react";

function FooterContent() {
  return (
    <footer
      className="Footer1"
      style={{
        position: "absolute",
        bottom: 0,
        justify_content: "center",
        background: "#74922e",
        height: "auto",
        width: "100%",
        paddingTop: "15px",
        textAlign: "center",
        color: "#ffffff",
      }}
    >
      <div
        className="footer-content"
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "200px",
        }}
      >
        <h3 style={{
          fontSize: "2.1rem",
          fontWeight: "500",
          marginTop: "10px",
          marginBottom: "20px",
        }}
        >
          Instigate Mobile
        </h3>
        <p style={{
          maxWidth: "500px",
          marginTop: "auto",
          marginRight: "auto",
          marginBottom: "20px",
          marginLeft: "auto",
          lineHeight: "10px",
          fontSize: "14px",
          color: "#ffffff",
        }}
        >
          Instigate Mobile, ITC, Heghine Sarkisyan
        </p>
      </div>
    </footer>
  );
}

export default FooterContent;
