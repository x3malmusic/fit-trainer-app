import { all } from "redux-saga/effects";
import userSagas from "./user";
import workoutSagas from "./exercises";

function* rootSaga() {
  return yield all([...userSagas, ...workoutSagas]);
}

export default rootSaga;