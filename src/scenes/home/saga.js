import { call, put, takeLatest } from "redux-saga/effects";
import * as action from "./action";
import * as services from "./service";
import { PAGE_SIZE } from "../../constants";

export function* fetchImages({ payload }) {
  try {
    const offset = payload ? payload * PAGE_SIZE + payload : payload;
    const images = yield call(services.getImages, offset);
    yield put(action.getImagesSucceed(images));
  } catch (error) {
    yield put(action.getImagesFailed(error));
    throw error;
  }
}

export function* homeSagas() {
  yield takeLatest(action.GET_IMAGES, fetchImages);
}
