import React from "react";
import "./post.css";
import logo from "../icons/download.jpg";

function Post({ title, type, text, id, onDelete }) {
  return (
    <div className="post-container">
      <img src={logo} alt="" />
      <div className="post-info">
        <div className="post-genere">
          <span>Horror</span>
          <span>{type}</span>
          <span>Rom-Com</span>
        </div>
        <span className="post-title">{title}</span>
        <span className="post-date">{id} day ago</span>
      </div>
      <p className="post-description">
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante
        orci, venenatis in dictum vel, finibus id leo. Nunc eros quam,
        sollicitudin sit amet tristique ut, finibus quis dui. Morbi at pulvinar
        risus, vel iaculis sapien. Aenean facilisis eu enim ac luctus. Vivamus
        vehicula erat sed semper commodo. Aliquam ut porta nisi. Vestibulum non
        justo at risus placerat vehicula. Duis sed orci sapien. Cras quis urna
        vitae enim tincidunt vehicula. Nulla facilisi. Sed feugiat orci lectus.
        Curabitur quis magna at purus fermentum tempus at ornare risus.*/}
        {text}
      </p>
      <button onClick={(id) => onDelete(id)}>Edit</button>
      <button>Remove</button>
    </div>
  );
}

export default Post;
