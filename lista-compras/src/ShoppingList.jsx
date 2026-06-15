import { useState } from "react";

function ShoppingList() {
  const [producto, setProducto] = useState("");
  const [productos, setProductos] = useState([]);

  const agregarProducto = () => {
    if (producto.trim() === "") return;

    setProductos([...productos, producto]);
    setProducto("");
  };

  const eliminarProducto = (indice) => {
    const nuevaLista = productos.filter((_, index) => index !== indice);
    setProductos(nuevaLista);
  };

  return (
    <div className="container">
      <h1>Lista de Compras</h1>

      <input
        type="text"
        placeholder="Agregar producto"
        value={producto}
        onChange={(e) => setProducto(e.target.value)}
      />

      <button onClick={agregarProducto}>
        Agregar
      </button>

      <ul>
        {productos.map((item, index) => (
          <li key={index}>
            {item}
            <button
              className="delete-btn"
              onClick={() => eliminarProducto(index)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
