import React from "react";
import { Link } from "react-router-dom";
import { ITEMS } from "../../constants/menuItems";

function NavBar() {
  return (
    <div
      style={{
        width: "100%",
        height: 80,
        border: "5px solid black",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {ITEMS.map((item) => (
          <Link style={{ margin: "10px" }} to={`${item.link}`} key={item.id}>
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
export default NavBar;
