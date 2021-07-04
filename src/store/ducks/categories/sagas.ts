import { call, put } from "redux-saga/effects";
import { Category } from "./types";
import api, { AxiosResponse } from "../../../services/api";
import { loadFailure, loadSuccess } from "./actions";

export function* loadCategories() {
  try {
    const localStorageCategory = localStorage.getItem("@COOLDRINKS_C");

    if (localStorageCategory) {
      yield put(loadSuccess(JSON.parse(localStorageCategory)));
      return;
    }

    const response: AxiosResponse<Category[]> = yield call(api.get, "list.php?c=list");

    yield put(loadSuccess(response.data));
    localStorage.setItem("@COOLDRINKS_C", JSON.stringify(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
