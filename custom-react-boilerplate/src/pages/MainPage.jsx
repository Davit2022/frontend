import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/nav/NavBar";

function MainPage() {
  return (
    <div>
      <div> HEADER </div>
      <NavBar />
      <Outlet />
      <div> FOOTER </div>
    </div>
  );
}

export default MainPage;
