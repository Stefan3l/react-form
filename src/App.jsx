import { useState } from "react";

export default function App() {
  const [productName, setProductName] = useState("");
  const [productList, setProductList] = useState(["Panne", "Vino", "Latte"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productName);
  };

  return (
    <div>
      <h1>Lista della spesa</h1>
      <ul>
        {productList.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
      <button type="submit">Cancella lista</button>
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
