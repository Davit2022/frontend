import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";

function MainPage() {
  return (
    <div>
      <div> HEADER </div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainPage;
