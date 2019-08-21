import { call, put, takeLatest } from "redux-saga/effects";
import * as action from "./action";
import * as services from "./service";

export function* fetchImages() {
  try {
    const images = yield call(services.getImages);
    yield put(action.getImagesSucceed(images));
  } catch (error) {
    yield put(action.getImagesFailed(error));
    throw error;
  }
}

export function* homeSagas() {
  yield takeLatest(action.GET_IMAGES, fetchImages);
}
