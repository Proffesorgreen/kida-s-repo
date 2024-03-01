import React from "react";

function Electonics() {
  const boughtpro = {
    image: "../images/electronics-image_1.jpg",
    rating: "Smart Watch",
  };

  const boughtpro_5 = {
    image: "../images/electronics-image_2.jpg",
    rating: "Asus FlipBook",
  };

  const boughtpro_6 = {
    image: "../images/electronics-image_3.jpg",
    rating: "Motorola Airpods",
  };
  
  return (
    <div className="shop-content">
      <h1>Electronics</h1>
      <Product images={boughtpro.image} rating={boughtpro.rating} />
      <Product images={boughtpro_5.image} rating={boughtpro_5.rating} />
      <Product images={boughtpro_6.image} rating={boughtpro_6.rating} />
    </div>
  );
}

export default Electonics;
