import React, { useState } from "react";
import "./register.css";

function Formregister() {
  const [selectbutton, setSelectButton] = useState("");

  return (
    <div className="register-menu">
      <form className="register-form">
        <label>Full Name</label>
        <input type="text" placeholder="Name..."></input>
        <label>Email</label>
        <input type="email" placeholder="Email..."></input>
        <label>Phone Number</label>
        <input type="tel" placeholder="Phone Number..."></input>
        <p>Gender</p>
        <div className="gender">
          <label>
            <input
              type="radio"
              className="first"
              value="Male"
              checked={selectbutton === "Male"}
              onChange={(e) => {
                setSelectButton(e.target.value);
              }}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              className="first"
              value="Female"
              checked={selectbutton === "Female"}
              onChange={(e) => {
                setSelectButton(e.target.value);
              }}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              value="Other"
              className="first"
              checked={selectbutton === "Other"}
              onChange={(e) => {
                setSelectButton(e.target.value);
              }}
            />
            Other
          </label>
        </div>
        <p>Interest</p>
        <div className="gender">
          <label>
            <input type="checkbox" value="Sports" />
            Sports
          </label>
          <label>
            <input type="checkbox" value="Music" />
            Music
          </label>
          <label>
            <input type="checkbox" value="Travel" />
            Travel
          </label>
        </div>
        <p>Country</p>
        <select className="first">
          <option>USA</option>
          <option>Canada</option>
          <option>Australia</option>
        </select>
        <div className="terms">
          <label>
            <input type="checkbox" value="check" />
            Accept Terms and Conditions
          </label>
        </div>
      </form>
    </div>
  );
}

export default Formregister;
