import React from "react";
import Card from "../common/Card";
import image from "../../assets/apples.png";
import imagekiwi from "../../assets/kiwi.png";

function Home() {
  return (
    <div style={{ display: "flex" }}>
      <Card imageSrc={image} price="$5" market="Fruct Shop" title="Apples" description="Only natural praducts" color="red" />
      <Card imageSrc={imagekiwi} price="$50" market="Fruct" title="Kiwi" description="Only natural" color="green" />
    </div>
  );
}

export default Home;
