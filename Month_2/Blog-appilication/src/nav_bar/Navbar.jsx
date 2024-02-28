import React, { useState } from "react";
import logo from "../icons/logo_blog.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("home");

  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Blog</p>
      </div>
      <div className="nav-links">
        <ul>
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
              setMenu("add");
            }}
          >
            <Link to="/new" style={{ textDecoration: "none" }}>
              New-Blog
            </Link>{" "}
            {menu === "add" ? <hr></hr> : <></>}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
