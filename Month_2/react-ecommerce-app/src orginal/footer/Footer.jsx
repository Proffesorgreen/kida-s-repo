import React from "react";
import "./footer.css";
import logo from "./logo.jpg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>Your Company</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
