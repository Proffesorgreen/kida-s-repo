import React, { useState } from "react";

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(0);

  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setItemQuantity(parseInt(e.target.value));
  };

  const handlePriceChange = (e) => {
    setItemPrice(parseFloat(e.target.value));
  };

  const handleAddToCart = () => {
    const newItem = {
      name: itemName,
      quantity: itemQuantity,
      price: itemPrice,
    };
    setItems([...items, newItem]);
    setItemName("");
    setItemQuantity(1);
    setItemPrice(0);
  };

  const totalPrice = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Name:
          <input type="text" value={itemName} onChange={handleNameChange} />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={itemQuantity}
            onChange={handleQuantityChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            step="0.01"
            value={itemPrice}
            onChange={handlePriceChange}
          />
        </label>
        <button type="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </form>

      <h3>Cart</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.quantity * item.price).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">Total:</td>
            <td>${totalPrice.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;
