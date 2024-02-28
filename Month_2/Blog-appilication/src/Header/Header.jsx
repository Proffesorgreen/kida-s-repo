import React from 'react';
import "./Header.css";
import logo from "../icons/beta.jpg";

function Header() {
  return (
    <div className="header-container">
      <img src={logo} alt="" />
      <div className="header-content">
        <span>Your Favorite Topics</span>
        <span>Blogs</span>
      </div>
    </div>
  );
}

export default Header