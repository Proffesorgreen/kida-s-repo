import React from "react";
import "./product.css";
import { useState } from "react";
function Product({images,rating}) {
  const [count, setCount] = useState(1);
  const manip=images
  return (
    <>
      <div className="product-menu">
        <div className="product-pic">
          <img src={images} alt=""/>
        </div>
        <div className="product-description">
          <div className="product-content">
            <h1>{rating}</h1>
            <p>$99</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="product-size">
              <span>size</span>
              <div className="product-size-button">
                <button>S</button>
                <button>M</button>
                <button>L</button>
              </div>
            </p>
          </div>
          <div className="product-cart">
            <p>Add to Cart - $188</p>
            <div className="product-add">
              <button
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                -
              </button>
              <p>{count}</p>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
