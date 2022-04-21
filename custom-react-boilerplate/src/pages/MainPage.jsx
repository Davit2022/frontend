import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";

function MainPage() {
  return (
    <div style={{
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
      background: "#fcfcfc",
      fontFamily: "sans-serif",
    }}
    >
      <div> HEADER </div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainPage;
