import { put, takeEvery, delay } from "redux-saga/effects";
import {
  fetchProductAction,
  fetchProductActionFailed,
  fetchProductActionSuccess,
} from "stores/slices/product.slice.js";
import { ProductAPI } from "api/product.api.js";

function* fetchProduct(action) {
  try {
    yield delay(500);
    const response = yield ProductAPI.fetchProduct(action.payload);
    const productData = response.data;
    const totalProduct = response.headers["x-total-count"];

    // Put 1 action đã được định nghĩa ở slice
    yield put(
      fetchProductActionSuccess({
        data: productData,
        totalProduct: totalProduct,
      })
    );
  } catch (e) {
    // Put 1 action đã được định nghĩa ở slice
    yield put(fetchProductActionFailed(e.response.data));
  }
}

export function* productSaga() {
  yield takeEvery(fetchProductAction, fetchProduct);
}
