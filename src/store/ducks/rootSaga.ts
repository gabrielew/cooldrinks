import { all, takeLatest } from "redux-saga/effects";
import { CategoriesTypes } from "./categories/types";
import { loadCategories } from "./categories/sagas";

export default function* rootSaga(): any {
  return yield all([
    takeLatest(
      CategoriesTypes.LOAD_REQUEST,
      loadCategories,
    ),
  ]);
}
