import React from 'react'

function Jewellery() {

    const boughtpro_3 = {
      image: "../images/jewellery-image-2.jpg",
      rating: "Obsidian Jewel",
    };

    const boughtpro_4 = {
      image: "../../public/images/jewellery-image-1.jpg",
      rating: "Amazonian Gem",
    };

     const boughtpro_8 = {
       image: "../images/jewellery-image-3.jpg",
       rating: "Asian Sapphire",
     };

     
  return (
    <div className="shop-content">
      <h1>Jewellery</h1>
      <Product images={boughtpro_3.image} rating={boughtpro_3.rating} />
      <Product images={boughtpro_4.image} rating={boughtpro_4.rating} />
      <Product images={boughtpro_8.image} rating={boughtpro_8.rating} />
    </div>
  );
}

export default Jewellery