import "./cart.css";
import logo from "./logo.jpg";

function Cart() {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <p>Not ready to checkout? Continue Shopping</p>
      <div className="cart-description">
        <div className="cart-cont1">
          <div className="cart-cont1-child1">
            <div className="cart-pic">
              <img src={logo} alt="" />
            </div>
            <div className="cart-content">
              <h1>Natural Honey Bottle</h1>
              <p>Size: L</p>
              <p>
                <span>Quantity: 1</span>
                <span>by Vendor Name</span>
              </p>
              <p>
                <span>$99</span>
                <span>
                  <a href="" style={{ textDecoration: "none" }}>
                    Remove
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="cart-cont1-child1">
            <div className="cart-pic">
              <img src={logo} alt="" />
            </div>
            <div className="cart-content">
              <h1>Natural Honey Bottle</h1>
              <p>Size: S</p>
              <p>
                <span>Quantity: 1</span>
                <span>by Vendor Name</span>
              </p>
              <p>
                <span>$89</span>
                <span>
                  <a href="" style={{ textDecoration: "none" }}>
                    Remove
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="cart-cont2">
          <div className="cart-cont2-child1">
            <div className="cart-void"></div>
            <p>
              <span>Subtotal</span>
              <span>$188</span>
            </p>
            <p>
              <span>Shipping</span>
              <span>Address</span>
            </p>
          </div>
          <div className="cart-cont2-child2">
            <p>
              <span>Total</span>
              <span>$188</span>
            </p>
            <button>Continue to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
