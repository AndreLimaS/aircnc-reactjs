import React from "react";
import api from "../../services/api";

export default function Login() {
  const [email, setEmail] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post("/sessions", { email });

    const { _id } = response.data;
    localStorage.setItem("user", _id);
  }

  return (
    <>
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
    </>
  );
}
