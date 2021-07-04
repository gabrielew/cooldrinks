// Action types
// eslint-disable-next-line no-shadow
export enum CategoriesTypes {
  LOAD_REQUEST = "@categories/LOAD_REQUEST",
  LOAD_SUCCESS = "@categories/LOAD_SUCCESS",
  LOAD_FAILURE = "@categories/LOAD_FAILURE",
}

// Data types
export interface Category {
  drinks: {
    strCategory: string;
  }[]
}

// State type
export interface CategoriesState {
  readonly data: Category;
  readonly loading: boolean;
  readonly error: boolean;
}
