import React from "react";
import Card from "../common/Card";
import Array from "./Fructs";
import "./home.css";

function Home() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    }}
    >
      {Array.map((item) => (
        <Card
          id="card"
          imageSrc={item.imageSrc}
          price={item.price}
          market={item.market}
          title={item.title}
          description={item.description}
          color={item.color}
        />
      ))}
    </div>
  );
}

export default Home;
