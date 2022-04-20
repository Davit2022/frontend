import React from "react";
import { Link } from "react-router-dom";
import { getMenuItems } from "../../constantes/menuItemsInfo";

function NavBar() {
  const manuItems = getMenuItems();

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
        {manuItems.map((item) => (
          <Link style={{ margin: "10px" }} to={`${item.link}`} key={item.id}>
            {item.title}
          </Link>
        ))}

      </nav>
    </div>
  );
}

export default NavBar;
