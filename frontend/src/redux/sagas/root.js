import { all } from "redux-saga/effects";
import userSagas from "./user";
import exercisesSagas from "./exercises";
import workoutSagas from "./workout";

function* rootSaga() {
  return yield all([...userSagas, ...exercisesSagas, ...workoutSagas]);
}

export default rootSaga;