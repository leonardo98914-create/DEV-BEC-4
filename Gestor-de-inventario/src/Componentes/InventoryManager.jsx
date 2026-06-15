import {
  useReducer,
  useMemo,
  useCallback
} from "react";

import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";

import {
  inventoryReducer,
  initialState
} from "../reducers/inventoryReducer";

function InventoryManager() {
  const [products, dispatch] =
    useReducer(
      inventoryReducer,
      initialState
    );

  const addProduct = useCallback(
    product => {
      dispatch({
        type: "ADD_PRODUCT",
        payload: product
      });
    },
    []
  );

  const deleteProduct = useCallback(
    id => {
      dispatch({
        type: "DELETE_PRODUCT",
        payload: id
      });
    },
    []
  );

  const totalStock = useMemo(() => {
    console.log("Calculando stock");

    return products.reduce(
      (acc, product) =>
        acc + Number(product.stock),
      0
    );
  }, [products]);

  return (
    <div>
      <h1>🛒 Inventario</h1>

      <ProductForm
        addProduct={addProduct}
      />

      <h2>
        Stock Total: {totalStock}
      </h2>

      <SearchBar />

      <ProductList
        products={products}
        deleteProduct={deleteProduct}
      />
    </div>
  );
}

export default InventoryManager;