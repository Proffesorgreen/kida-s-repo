import Message from "./home_page/home_page";
 import Bought_items from "./bought_item/Bought_items";
import { Navbar } from "./nav_bar/Navbar";
import Cart from "./cart/cart";
import Shop from "./shop/Shop";
import Product from "./product/product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./footer/Footer";
import Total from "./total/Total";
import Jewellery from "./Jewelery/Jewellery";
import Furniture from "./Furniture/Furniture";
import Electonics from "./Electronics/Electonics";
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
        <Route path="/total" element={<Total />} />
        <Route path="/elec" element={<Electonics />} />
        <Route path="/furni" element={<Furniture />} />
        <Route path="/jewl" element={<Jewellery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
