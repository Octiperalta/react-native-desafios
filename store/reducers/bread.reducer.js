import { BREADS } from "../../data/breads";
import { FILTER_BREAD, SELECT_BREAD } from "../actions/bread.actions";

const INITIAL_STATE = {
  list: BREADS,
  filteredBreads: [],
  selectedID: null,
};

const BreadReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_BREAD:
      return { ...state, selectedID: action.breadID };
    case FILTER_BREAD:
      return {
        ...state,
        filteredBreads: state.list.filter(
          bread => bread.category === action.categoryID
        ),
      };
    default:
      return state;
  }
};

export default BreadReducer;
