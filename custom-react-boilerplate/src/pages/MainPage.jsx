import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function MainPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainPage;
