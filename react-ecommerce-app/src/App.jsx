import Message from "./home_page/home_page";
 import Bought_items from "./bought_item/Bought_items";
import { Navbar } from "./nav_bar/Navbar";
import Cart from "./cart/cart";
import Shop from "./shop/Shop";
import Product from "./product/product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Message />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
       {/* /* <Route path="/product" element={<Product />} /> */}
        <Route path="/bought" element={<Bought_items />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
