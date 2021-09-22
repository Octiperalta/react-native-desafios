import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import BreadReducer from "./reducers/bread.reducer";
import CategoryReducer from "./reducers/category.reducer";
import CartReducer from "./reducers/cart.reducer";
import AuthReducer from "./reducers/auth.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  breads: BreadReducer,
  cart: CartReducer,
  auth: AuthReducer,
});

// Agrego un enhancement para mejorar REDUX
export default createStore(RootReducer, applyMiddleware(thunk));
