import { takeLatest, put } from "redux-saga/effects";
import http from "../../services/http";
import { getToken } from "../../services/token";

import {
  NEW_EXERCISE,
  ADD_EXERCISE,
  SET_ERROR,
  DELETE_EXERCISE,
  DELETE_EXERCISE_STATE,
  UPDATE_EXERCISE_STATE,
  UPDATE_EXERCISE
} from "../actions/types";


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
    yield http.delete(`/api/exercises/${payload}`, {headers: {'authorization' : `Bearer ${getToken()}`}});
    yield put({ type: DELETE_EXERCISE_STATE, payload });
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response.data });
  }
};

const updateExercise = function* ({ payload }) {
  try {
    // yield http.put(`/api/exercises/${payload}`, {headers: {'authorization' : `Bearer ${getToken()}`}});
    yield put({ type: UPDATE_EXERCISE_STATE, payload });
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response.data });
  }
};


export default [
  takeLatest(NEW_EXERCISE, createExercise),
  takeLatest(DELETE_EXERCISE, deleteExercise),
  takeLatest(UPDATE_EXERCISE, updateExercise),
];