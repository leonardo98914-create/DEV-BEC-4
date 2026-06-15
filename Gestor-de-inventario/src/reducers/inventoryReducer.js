export const initialState = [];

export function inventoryReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];

    case "DELETE_PRODUCT":
      return state.filter(
        product => product.id !== action.payload
      );

    case "UPDATE_STOCK":
      return state.map(product =>
        product.id === action.payload.id
          ? {
              ...product,
              stock: action.payload.stock
            }
          : product
      );

    default:
      return state;
  }
}