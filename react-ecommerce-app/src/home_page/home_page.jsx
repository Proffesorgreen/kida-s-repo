import { Link } from "react-router-dom";
import "./home_page.css";
import logo from "../../public/images/homepage-image.jpg"
import img from "../../public/images/electronics-image-catagory.jpg";
import img_1 from "../../public/images/furinture-image-homepage.jpg";
import img_2 from "../../public/images/jewellery-homepage.jpg";
import img_3 from "../../public/images/electronics-image_1.jpg";
import img_4 from "../../public/images/furinture-image_1-1.jpg";
import img_5 from "../../public/images/jewellery-image-1.jpg";
import img_6 from "../../public/images/electronics-image_2.jpg";
import img_7 from "../../public/images/furinture-image_1.jpg";
import img_8 from "../../public/images/jewellery-image-2.jpg";

function Message() {

  return (
    <div className="container">
      <div className="section">
        <img src={logo} alt=""/>
      </div>
      <h2 className="home">Catagories</h2>
      <p className="home-par">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <button>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          Shop Now
        </Link>
      </button>
      <div className="parent1">
        <div className="group1">
          <img src={img} alt="" />
        </div>
        <div className="group1">
          <img src={img_1} alt="" />
        </div>
        <div className="group1">
          <img src={img_2} alt="" />
        </div>
      </div>
      <h2 className="home">Our Latest Arrivals</h2>
      <p className="home-par">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <button>
        {" "}
        <Link to="/shop" style={{ textDecoration: "none" }}>
          Explore Now
        </Link>
      </button>
      <div className="parent2">
        <div className="group2">
          <img src={img_3} alt="" />
        </div>
        <div className="group2" style={{ alignSelf: "flex-start" }}>
          <img src={img_4} alt="" />
        </div>
        <div className="group2">
          <img src={img_5} alt="" />
        </div>
      </div>
      <h2 className="home">Our Products</h2>
      <p className="home-par">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <button>
        <Link to="/product" style={{ textDecoration: "none" }}>
          View Products
        </Link>
      </button>
      <div className="parent1">
        <div className="group1" style={{ marginBottom: "140px" }}>
          <img src={img_6} alt="" />
        </div>
        <div className="group1" style={{ marginBottom: "140px" }}>
          <img src={img_7} alt="" />
        </div>
        <div className="group1" style={{ marginBottom: "140px" }}>
          <img src={img_8} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Message;
