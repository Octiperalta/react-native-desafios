import { createStore, combineReducers } from "redux";
import BreadReducer from "./reducers/bread.reducer";
import CategoryReducer from "./reducers/category.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  breads: BreadReducer,
});

export default createStore(RootReducer);
