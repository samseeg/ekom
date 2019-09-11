import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import tempProdImg from "../../assets/tempProdImg.png";
import "./ItemCard.css";

//Item Card Component
function ItemCard(props) {
  //using state hook to hold card items
  const [card, setCard] = useState([]);

  //getting item cards when component mounts using effect hook
  useEffect(() => {
    axios.get("/items").then(response => {
      setCard(response.data);
    });
  }, []);

  //new redux hook for setting state
  const dispatch = useDispatch();

  function handleBag(i) {
    dispatch({ type: "ADD_NEW_ITEM", payload: card[i] });
  }

  return (
    <div className="itemCardWrapper">
      {/* map of all item cards */}
      {card.map((item, i) => {
        // console.log(item)
        return (
          <div key={i} className="card">
            <img src={tempProdImg} alt="product" />
            <div className="textWrapper">
              <div className="gender">{item.item_gender}</div>
              <div className="name">{item.item_name}</div>
              <div className="price">${item.item_price}</div>
              <form className="size">
                <input type="radio" name="size" value="S" />S
                <input type="radio" name="size" value="M" />M
                <input type="radio" name="size" value="L" />L
                <input type="radio" name="size" value="XL" />
                XL
                <input type="radio" name="size" value="XXL" />
                XXL
              </form>
              <div
                className="addToBag"
                onClick={() => {
                  handleBag(i);
                }}
              >
                add to bag
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ItemCard;
