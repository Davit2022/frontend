import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import Header from "../components/header/Header";

function MainPage() {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
      <div> FOOTER </div>
    </div>
  );
}

export default MainPage;
