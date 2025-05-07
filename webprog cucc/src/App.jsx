import React, { useState } from "react";

const products = [
  { id: 1, name: "iPhone 6", price: 300 },
  { id: 2, name: "iPhone 6S", price: 350 },
  { id: 3, name: "iPhone SE (1. generáció)", price: 400 },
  { id: 4, name: "iPhone 7", price: 550 },
  { id: 5, name: "iPhone 8", price: 600 },
  { id: 6, name: "iPhone X", price: 650 },
  { id: 7, name: "iPhone XS", price: 700 },
  { id: 8, name: "iPhone XR", price: 750 },
  { id: 9, name: "iPhone 11", price: 800 },
  { id: 10, name: "iPhone 12", price: 850 },
  { id: 11, name: "iPhone 13", price: 900 },
  { id: 12, name: "iPhone 14", price: 950 },
  { id: 13, name: "iPhone 15", price: 1000 },
];

function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setTotalPrice((prevPrice) => prevPrice + product.price);
  };

  const removeFromCart = (id) => {
    const product = cart.find((item) => item.id === id);
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    setTotalPrice((prevPrice) => prevPrice - (product ? product.price : 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || message.trim() === "") {
      setFeedback("Kérlek, töltsd ki az összes mezőt.");
    } else {
      setFeedback("Üzenet elküldve! Köszönjük a megkeresést.");
      setName("");
      setMessage("");
    }
  };

  return (
    <div>
      {/* Navigáció */}
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "15px",
          background: "#333",
          justifyContent: "center",
        }}
      >
        <a
          href="#home"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            padding: "8px",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.color = "#4CAF50")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Főoldal
        </a>
        <a
          href="#products"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            padding: "8px",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.color = "#4CAF50")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Kínálatunk
        </a>
        <a
          href="#cart"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            padding: "8px",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.color = "#4CAF50")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Kosár
        </a>
        <a
          href="#contact"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            padding: "8px",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.color = "#4CAF50")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Kapcsolat
        </a>
      </nav>

      {/* Főoldal szakasz */}
      <section id="home" style={{ padding: "20px" }}>
        <h2>Üdvözöljük a Mobilshopban!</h2>
      </section>

      {/* Kínálat szakasz */}
      <section id="products" style={{ padding: "20px" }}>
        <h2>Kínálatunk:</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {products.map((product) => (
            <li key={product.id} style={{ marginBottom: "10px" }}>
              {product.name} - {product.price} USD
              <button
                onClick={() => addToCart(product)}
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Kosárba rakom
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Kosár szakasz */}
      <section id="cart" style={{ padding: "20px" }}>
        <h2>Kosár:</h2>
        {cart.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {item.name} - {item.price} USD
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    marginLeft: "10px",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Eltávolít
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Üres a kosár.</p>
        )}
        <h3>Összesen: {totalPrice} USD</h3>
      </section>

      {/* Kapcsolat szakasz */}
      <section id="contact" style={{ padding: "20px" }}>
        <h2>Kapcsolat:</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Neved:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginLeft: "10px", padding: "5px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Üzenet:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  marginLeft: "10px",
                  padding: "5px",
                  width: "100%",
                  maxWidth: "400px",
                  height: "100px",
                }}
              />
            </label>
          </div>
          <button type="submit" style={{ padding: "8px 15px", cursor: "pointer" }}>
            Üzenet küldése
          </button>
        </form>
        {feedback && (
          <p style={{ marginTop: "10px", color: "green", fontWeight: "bold" }}>
            {feedback}
          </p>
        )}
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#333",
          color: "white",
          textAlign: "center",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <p>&copy; 2025 Mobilshop - Minden jog fenntartva</p>
      </footer>
    </div>
  );
}

export default App;
