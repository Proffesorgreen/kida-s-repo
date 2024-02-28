import { useState } from "react";
import Navbar from "./nav_bar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import SinglePost from "./SinglePost/SinglePost";
import Newblog from "./Newblog/Newblog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/single" element={<SinglePost />}></Route>
        <Route path="/new" element={<Newblog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
