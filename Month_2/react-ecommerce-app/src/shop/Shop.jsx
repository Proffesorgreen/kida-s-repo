import React from "react";
import "./Shop.css";
import Product from "../product/product";

function Shop() {
  const boughtpro = {
    image: "../images/electronics-image_1.jpg",
    rating: "Smart Watch",
  };

  const boughtpro_1 = {
    image: "../images/furniture-image_3.jpg",
    rating: "Home Furniture",
  };

  const boughtpro_2 = {
    image: "../images/furniture-image_2-1.jpg",
    rating: "Bedroom Furniture",
  };

  const boughtpro_3 = {
    image: "../images/jewellery-image-2.jpg",
    rating: "Obsidian Jewel",
  };

  const boughtpro_4 = {
    image: "../../public/images/jewellery-image-1.jpg",
    rating: "Amazonian Gem",
  };

  const boughtpro_5 = {
    image: "../images/electronics-image_2.jpg",
    rating: "Asus FlipBook",
  };

  return (
    <div className="shop-container">
      <div className="shop-menu">
        <h1>Shop</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* {/* <div className="shop-items">
          <div className="shopitem">
            <img src={logo} alt="" />
          </div>
          <div className="shopitem">
            <img src={logo_1} alt="" />
          </div>
          <div className="shopitem">
            <img src={logo_2} alt="" />
          </div>
          <div className="shopitem">
            <img src={logo_3} alt="" />
          </div>
          <div className="shopitem">
            <img src={logo_4} alt="" />
          </div>
          <div className="shopitem">
            <img src={logo_5} alt="" />
          </div> *
        </div> */}
        <Product images={boughtpro.image} rating={boughtpro.rating} />
        <Product images={boughtpro_1.image} rating={boughtpro_1.rating} />
        <Product images={boughtpro_2.image} rating={boughtpro_2.rating} />
        <Product images={boughtpro_3.image} rating={boughtpro_3.rating} />
        <Product images={boughtpro_4.image} rating={boughtpro_4.rating} />
        <Product images={boughtpro_5.image} rating={boughtpro_5.rating} />
      </div>
    </div>
  );
}

export default Shop;
