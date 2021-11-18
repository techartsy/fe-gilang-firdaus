import { all } from "redux-saga/effects";

import mySaga from "./sagas";

export default function* rootSaga() {
  yield all([mySaga()]);
}
