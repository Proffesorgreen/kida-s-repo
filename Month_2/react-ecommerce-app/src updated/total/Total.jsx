import React from 'react'
import "./total.css"

function Total() {
  return (
    <div className="total-menu">
      <h1>Order History</h1>
      <p>
        Quantity: <span>10</span>
      </p>
      <p>
        Size: <span>L</span>
      </p>
      <p>
        Price: <span>$2560</span>
      </p>
    </div>
  );
}

export default Total