export const SELECT_BREAD = "SELECT_BREAD";
export const FILTER_BREAD = "FILTER_BREAD";

export const selectBread = breadID => ({ type: SELECT_BREAD, breadID });
export const filterBreads = categoryID => ({ type: FILTER_BREAD, categoryID });
