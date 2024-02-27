import React, { useState } from "react"; // Added { useState }
import "./Navbar.css";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop"); // Corrected useState

  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={logo} alt=""></img>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>{" "}
          {menu === "home" ? <hr></hr> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("cart"); // Corrected setMenu
          }}
        >
          <Link to="/cart" style={{ textDecoration: "none" }}>
            Cart
          </Link>{" "}
          {menu === "cart" ? <hr></hr> : <></>}
        </li>
        {/* <li
          onClick={() => {
            setMenu("product"); // Corrected setMenu
          }}
        >
          <Link to="/product" style={{ textDecoration: "none" }}>
            Product
          </Link>
          {menu === "product" ? <hr></hr> : <></>}
        </li> */}
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/shop" style={{ textDecoration: "none" }}>
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr></hr> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("confirm"); // Corrected setMenu
          }}
        >
          <Link to="/bought" style={{ textDecoration: "none" }}>
            Bought_items
          </Link>{" "}
          {menu === "confirm" ? <hr></hr> : <></>}
        </li>
      </ul>
    </div>
  );
};
