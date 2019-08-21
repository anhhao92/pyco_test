import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import homeReducer from "../scenes/home/reducer";
import { homeSagas } from "../scenes/home/saga";

function* rootSaga() {
  yield all([homeSagas()]);
}

const rootReducer = combineReducers({
  home: homeReducer
});

const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore();
