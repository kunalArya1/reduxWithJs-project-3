import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  CALCULATE_TOTAL,
} from "./Actions";
const initialState = { cart: [] };

const cartReducer = (sate = initialState, action) => {
  switch (action.ype) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {

      };
    case "CALCULATE_TOTAL":
      return {
        
      };
    default:
      return state;
  }
};
