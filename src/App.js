import React from "react";
import "./App.css";

import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnc" />
      <div className="content">
        <p>
          Ofereca <strong>spots</strong> para programadores e encontre
          <strong>para sua empresa</strong>
        </p>

        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input type="email" id="email" placeholder="Seu e-mail" />
        </form>

        <button type="submit">Entrar</button>
      </div>
    </div>
  );
}

export default App;
