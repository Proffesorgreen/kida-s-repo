import React from "react";
import "./home.css";
import Header from "../Header/Header";
import Post from "../Post/Post";

function Home() {

  



  return (
    <>
      <Header />
      <div className="home-container">
        {/* <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-field"
        ></input>
      </div> */}
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        
      </div>
    </>
  );
}

export default Home;
