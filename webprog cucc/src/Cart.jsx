import React from "react";

function Cart({ cart, removeFromCart, totalPrice }) {
  return (
    <div>
      <h2>Kosár</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price} USD
            <button onClick={() => removeFromCart(product.id)}>Eltávolít</button>
          </li>
        ))}
      </ul>
      <h3>Összesen: {totalPrice} USD</h3>
    </div>
  );
}

export default Cart;
