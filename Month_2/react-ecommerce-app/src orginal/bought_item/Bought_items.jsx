import React from "react";
import "./bought_items.css";
import logo from "../../public/images/electronics-image_1.jpg";
import logo_1 from "../../public/images/furniture-image_2.jpg";
import logo_2 from "../../public/images/jewellery-image-3.jpg";
import logo_3 from "../../public/images/furniture-image_3.jpg";
import logo_4 from "../../public/images/electronics-image_2.jpg";
import logo_5 from "./wild forest copy.jpg";

function Bought_items() {
  const confirmPurchase = () => {
    alert("Products Purchased Sucssesfully");
  };

  return (
    <div className="confirm-bought">
      <h1>Bought items</h1>
      <div className="bought-items">
        <div className="item">
          <img src={logo} alt="" />
        </div>
        <div className="item">
          <img src={logo_1} alt="" />
        </div>
        <div className="item">
          <img src={logo_2} alt="" />
        </div>
        <div className="item">
          <img src={logo_3} alt="" />
        </div>
        <div className="item">
          <img src={logo_4} alt="" />
        </div>
        <div className="item">
          <img src={logo_5} alt="" />
        </div>
      </div>
      <div className="confirm">
        <button onClick={confirmPurchase}>Confirm Purchase</button>
      </div>
    </div>
  );
}

export default Bought_items;
