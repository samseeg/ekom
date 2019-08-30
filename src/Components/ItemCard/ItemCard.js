import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ItemCard.css";
// import prodImg from "../../assets/tempProdImg.png";

//Item Card Component
function ItemCard() {
  //using state hook to hold items
  const [card, setCard] = useState([]);

  //getting item cards when component mounts using effect hook
  useEffect(() => {
    axios.get("/items").then(response => {
      setCard(response.data);
    });
  }, []);

  // console.log(card);

  return (
    <div className="itemCardWrapper">
      {/* map of all item cards */}
      {card.map((item, i) => {
        console.log(item);

        return (
          <div key={i} className="card">
            <div>{item.item_image}</div>
            <div>{item.item_gender}</div>
            <div>{item.item_name}</div>
            <div>{item.item_price}</div>
            <div>size</div>
            <div>add to bag</div>
          </div>
        );
      })}
    </div>
  );
}

export default ItemCard;
