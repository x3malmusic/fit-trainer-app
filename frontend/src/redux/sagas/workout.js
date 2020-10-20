import { takeLatest, put } from "redux-saga/effects";
import http from "../../services/http";
import { getToken } from "../../services/token";
import { ADD_WORKOUT, SET_ERROR } from "../actions/types";


const addWorkout = function* ({ payload }) {
  try {
    yield http.post("/api/workouts",{newWorkout: payload}, {headers: {'authorization' : `Bearer ${getToken()}`}});
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response.data });
  }
};


export default [
  takeLatest(ADD_WORKOUT, addWorkout),
];