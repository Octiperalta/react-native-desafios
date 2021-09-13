import { CATEGORIES } from "../../data/categories";
import { SELECT_CATEGORY } from "../actions/category.actions";

const intialState = {
  list: CATEGORIES,
  selectedID: null,
};

const CategoryReducer = (state = intialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return { ...state, selectedID: action.categoryID };
    default:
      return state;
  }
};

export default CategoryReducer;
