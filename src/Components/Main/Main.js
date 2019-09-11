import React from "react";
import Header from "../Header/Header";
import ItemCard from "../ItemCard/ItemCard";
import Bag from "../Bag/Bag";
import "./Main.css";

function Main() {
  return (
    <div className="mainWrapper">
      <Header />
      <ItemCard />
      <Bag />
    </div>
  );
}

export default Main;
