import { takeLatest, put } from "redux-saga/effects";
import {NEW_EXERCISE, ADD_EXERCISE ,SET_ERROR, DELETE_EXERCISE, DELETE_EXERCISE_STATE } from "../actions/types";
import http from "../../services/http";
import { getToken } from "../../services/token";


const createExercise = function* ({ payload }) {
  try {
    yield http.post("/api/exercises", { name: payload.name, measureType: payload.measureType }, {headers: {'authorization' : `Bearer ${getToken()}`}});
    yield put({ type: ADD_EXERCISE, payload });
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response.data });
  }
};

const deleteExercise = function* ({ payload }) {
  try {
    // yield http.delete(`/api/exercises/${payload}`, {headers: {'authorization' : `Bearer ${getToken()}`}});
    yield put({ type: DELETE_EXERCISE_STATE, payload });
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response.data });
  }
};


export default [
  takeLatest(NEW_EXERCISE, createExercise),
  takeLatest(DELETE_EXERCISE, deleteExercise),
];