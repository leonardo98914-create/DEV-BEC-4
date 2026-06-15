import {
  useState,
  useRef
} from "react";

function ProductForm({
  addProduct
}) {
  const [name, setName] =
    useState("");
  const [stock, setStock] =
    useState("");

  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    addProduct({
      id: Date.now(),
      name,
      stock
    });

    setName("");
    setStock("");

    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        placeholder="Producto"
        value={name}
        onChange={e =>
          setName(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={e =>
          setStock(e.target.value)
        }
      />

      <button>
        Agregar
      </button>
    </form>
  );
}

export default ProductForm;