import { takeLatest, put } from "redux-saga/effects";
import {NEW_EXERCISE, SET_ERROR } from "../actions/types";
import http from "../../services/http";


const createExercise = function* ({ payload }) {
  try {
    // request for a new exercise
    yield put({ type: NEW_EXERCISE, payload: payload });
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.message });
  }
};


export default [
  takeLatest(NEW_EXERCISE, createExercise),
];