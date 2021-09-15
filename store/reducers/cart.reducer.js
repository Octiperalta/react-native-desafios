import { ADD_ITEM, CONFIRM_CART, REMOVE_ITEM } from "../actions/cart.actions";

const itemsCart = [
  { id: 1, name: "Pan Baguette", price: 15000, quantity: 2 },
  { id: 2, name: "Ciabatta", price: 12000, quantity: 3 },
];

const INITIAL_STATE = {
  items: [],
  total: 27000,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: state.items.concat(action.item) };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.itemID),
      };
    case CONFIRM_CART:
      return { ...state, items: [] };

    default:
      return state;
  }
};

export default CartReducer;
