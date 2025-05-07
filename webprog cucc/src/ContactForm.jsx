import React, { useState } from "react";

function ContactForm() {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Üzenet elküldve: " + message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={handleChange}
        placeholder="Írj nekünk!"
      ></textarea>
      <button type="submit">Küldés</button>
    </form>
  );
}

export default ContactForm;
