import React from "react";
import api from "./services/api";

import "./App.css";

import logo from "./assets/logo.svg";

function App() {
  const [email, setEmail] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post("/sessions", { email });
    console.log(response);
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnc" />
      <div className="content">
        <p>
          Ofereca <strong>spots</strong> para programadores e encontre
          <strong>para sua empresa</strong>
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input
            type="email"
            id="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </form>

        <button className="btn" type="submit">
          Entrar
        </button>
      </div>
    </div>
  );
}

export default App;
