import { takeLatest, put } from "redux-saga/effects";
import {NEW_EXERCISE, ADD_EXERCISE ,SET_ERROR } from "../actions/types";
import http from "../../services/http";
import { getToken } from "../../services/token";


const createExercise = function* ({ payload }) {
  try {
    yield http.post("/api/exercises", { name: payload.name, measureType: payload.measureType }, {headers: {'authorization' : `Bearer ${getToken()}`}});
    yield put({ type: ADD_EXERCISE, payload });
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.message });
  }
};


export default [
  takeLatest(NEW_EXERCISE, createExercise),
];