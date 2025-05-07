import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Kínálatunk:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} USD
            <button onClick={() => addToCart(product)}>Kosárba rakom</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
