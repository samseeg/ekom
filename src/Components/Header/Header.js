import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import ekomLogo from "../../assets/ekomLogo.png";
import "./Header.css";

function Header(props) {
  const bag = useSelector(state => state.bag);

  //set clicked state to update bag visibility
  const [click, setClick] = useState(false)

  //using redux to keep bag hidden state so bag doesn't have to be in header
  const dispatch = useDispatch();

  return (
    <div className="headerWrapper">
      <img className="logo" src={ekomLogo} alt="ekom logo" />
      <div className="type">
        <p>SHIRTS</p>
      </div>
      <div className="gender">
        <p>MALE</p>
      </div>
      <div className="search">SEARCH</div>
      <div className="bag" onClick={() => {
        setClick(!click)
        dispatch({type: 'HIDE_BAG', payload: click})
      }}>
        <p>BAG</p>
        <p>{bag.length}</p>
      </div>
    </div>
  );
}

export default Header;
