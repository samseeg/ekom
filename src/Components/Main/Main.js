import React from "react";
import Header from "../Header/Header";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main() {
  return (
    <div className="mainWrapper">
      <Header />
      <ItemCard />
    </div>
  );
}

export default Main;
