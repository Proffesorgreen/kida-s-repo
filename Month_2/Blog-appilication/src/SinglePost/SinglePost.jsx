import React from "react";
import "./singlepost.css";
import logo from "../icons/good.jpg";

function SinglePost() {
  return (
    <>
      <div className="single-image">
        <img src={logo} alt="" />
      </div>
      <div className="single-container">
        <div className="single-info">
          <h1>
            Lorem ipsum dolor sit amet
            <div className="edit-remove">
              <button>Edit</button>
              <button>Remove</button>
            </div>
          </h1>
          <div className="single-author">
            <span>Author: Unknown</span>
            <span className="single-update">Last Update: 1 day ago</span>
          </div>
          <p className="single-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante
            orci, venenatis in dictum vel, finibus id leo. Nunc eros quam,
            sollicitudin sit amet tristique ut, finibus quis dui. Morbi at
            pulvinar risus, vel iaculis sapien. Aenean facilisis eu enim ac
            luctus. Vivamus vehicula erat sed semper commodo. Aliquam ut porta
            nisi. Vestibulum non justo at risus placerat vehicula. Duis sed orci
            sapien. Cras quis urna vitae enim tincidunt vehicula. Nulla
            facilisi. Sed feugiat orci lectus. Curabitur quis magna at purus
            fermentum tempus at ornare risus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Etiam ante orci, venenatis in dictum
            vel, finibus id leo. Nunc eros quam, sollicitudin sit amet tristique
            ut, finibus quis dui. Morbi at pulvinar risus, vel iaculis sapien.
            Aenean facilisis eu enim ac luctus. Vivamus vehicula erat sed semper
            commodo. Aliquam ut porta nisi. Vestibulum non justo at risus
            placerat vehicula. Duis sed orci sapien. Cras quis urna vitae enim
            tincidunt vehicula. Nulla facilisi. Sed feugiat orci lectus.
            Curabitur quis magna at purus fermentum tempus at ornare risus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante
            orci, venenatis in dictum vel, finibus id leo. Nunc eros quam,
            sollicitudin sit amet tristique ut, finibus quis dui. Morbi at
            pulvinar risus, vel iaculis sapien. Aenean facilisis eu enim ac
            luctus. Vivamus vehicula erat sed semper commodo. Aliquam ut porta
            nisi. Vestibulum non justo at risus placerat vehicula. Duis sed orci
            sapien. Cras quis urna vitae enim tincidunt vehicula. Nulla
            facilisi. Sed feugiat orci lectus. Curabitur quis magna at purus
            fermentum tempus at ornare risus.
          </p>
        </div>
      </div>
    </>
  );
}

export default SinglePost;
