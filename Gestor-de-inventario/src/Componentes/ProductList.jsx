import React from "react";

const ProductList = React.memo(
  ({
    products,
    deleteProduct
  }) => {
    return (
      <div>
        {products.map(product => (
          <div
            key={product.id}
          >
            <h3>
              {product.name}
            </h3>

            <p>
              Stock:
              {product.stock}
            </p>

            <button
              onClick={() =>
                deleteProduct(
                  product.id
                )
              }
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    );
  }
);

export default ProductList;