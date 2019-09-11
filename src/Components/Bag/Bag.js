import React from "react";
import { useSelector } from "react-redux";
import "./Bag.css";

//Bag Component
function Bag(props) {
  //pulling bagContents from redux store
  const bagContents = useSelector(state => state.bag);
  const hidden = useSelector(state => state.bagHidden);

  //controls css for hiding and showing bag based on props passed from Header
  const hide = hidden ? 'bagWrapperClosed' : 'bagWrapperOpen';

  return (
    <div className={hide}>
      {bagContents.map((item, i) => {
        return (
          <div key={i} className="itemWrapper">
            <div>{item.item_name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Bag;
