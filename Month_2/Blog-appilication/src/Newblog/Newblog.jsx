import React from "react";
import "./newblog.css";
import logo from "../icons/painting-mountain.avif";

function Newblog() {
  return (
    <div className="add-blog">
      <img src={logo} alt="" />
      <form className="add-content">
        <div className="write-title">
          <input type="text" placeholder="Title..."></input>
          <input type="text" placeholder="Genere" className="add-genere"></input>
        </div>
        <div className="write-text">
          <textarea
            className="add-text"
            type="text"
            placeholder="Tell Your Story..."
          ></textarea>
        </div>
        <button>Publish</button>
      </form>
    </div>
  );
}

export default Newblog;
