import { Reducer } from "redux";
import { CategoriesState, CategoriesTypes, Category } from "./types";

const INITIAL_STATE: CategoriesState = {
  data: {} as Category,
  error: false,
  loading: false,
};

const reducer: Reducer<CategoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CategoriesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: false,
      };
    case CategoriesTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: true,
      };
    default: return state;
  }
};

export default reducer;
