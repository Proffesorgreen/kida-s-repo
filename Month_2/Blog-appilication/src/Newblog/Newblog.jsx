import React, { useState } from "react";
import "./newblog.css";
import logo from "../icons/painting-mountain.avif";

function Newblog({ addfunction }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [text, setText] = useState("");
  const [id, setId] = useState(1);

  function handleEvent(e) {
    e.preventDefault();
    addfunction({title,type,text,id});
    setId(id+1);
    setText("");
    setTitle("");
    setType("");
  }

  return (
    <div className="add-blog">
      <img src={logo} alt="" />
      <form className="add-content" onSubmit={handleEvent}>
        <div className="write-title">
          <input
            type="text"
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            type="text"
            value={type}
            placeholder="Genere"
            className="add-genere"
            onChange={(e) => setType(e.target.value)}
          ></input>
        </div>
        <div className="write-text">
          <textarea
            className="add-text"
            type="text"
            value={text}
            placeholder="Tell Your Story..."
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}

export default Newblog;
