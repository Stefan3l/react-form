import React from "react";
import { useState } from "react";

export default function App() {
  const [productName, setProductName] = useState("");
  const [productList, setProductList] = useState(["Panne", "Vino", "Latte"]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // pushare il nuovo prodotto nell'array
    setProductList((curentState) => [...curentState, productName]);

    // svotiamo il campo input
  };

  const emptyList = () => {
    setProductList([]);
  };

  const handleDelete = (productToDelete) => {
    setProductList((curentState) =>
      curentState.filter((product) => product !== productToDelete)
    );
  };

  return (
    <div>
      <h1>Lista della spesa</h1>
      <ul>
        {productList.map((product, index) => (
          <li key={index}>
            {product}
            <button onClick={() => handleDelete(product)}>🗑️</button>
          </li>
        ))}
      </ul>
      <button type="submit" onClick={emptyList}>
        Cancella lista
      </button>
      <hr />
      <h1>Aggiungi prodotto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
          placeholder="inserisci il prodotto"
        ></input>
        <button type="submit">Invia</button>
      </form>
    </div>
  );
}
