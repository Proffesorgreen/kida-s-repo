import React from "react";

function Furniture() {
  const boughtpro_1 = {
    image: "../images/furniture-image_3.jpg",
    rating: "Home Furniture",
  };

  const boughtpro_2 = {
    image: "../images/furniture-image_2-1.jpg",
    rating: "Bedroom Furniture",
  };

  const boughtpro_7 = {
    image: "../images/furinture-image_1-1.jpg",
    rating: "Office Chair",
  };

  return (
    <div className="shop-content">
      <h1>Furniture</h1>
      <Product images={boughtpro_1.image} rating={boughtpro_1.rating} />
      <Product images={boughtpro_2.image} rating={boughtpro_2.rating} />
      <Product images={boughtpro_7.image} rating={boughtpro_7.rating} />
    </div>
  );
}

export default Furniture;
