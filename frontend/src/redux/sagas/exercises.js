import { takeLatest, put } from "redux-saga/effects";
import http from "../../services/http";
import { notify } from "../../services/notification";

import {
  NEW_EXERCISE,
  SET_ERROR,
  DELETE_EXERCISE,
  DELETE_EXERCISE_STATE,
  UPDATE_EXERCISE,
  GET_USER
} from "../actions/types";


const createExercise = function* ({ payload }) {
  try {
    yield http.post("/api/exercises", { name: payload.name, measureType: payload.measureType });
    yield put({ type: GET_USER, payload: true });
    yield notify({message: 'Exercise created', type: 'success', title: 'Success'})
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response.data });
  }
};

const deleteExercise = function* ({ payload }) {
  try {
    yield http.delete(`/api/exercises/${payload}`);
    yield put({ type: DELETE_EXERCISE_STATE, payload });
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response.data });
  }
};

const updateExercise = function* ({ payload }) {
  try {
    yield http.put("/api/exercises",{exercises: payload});
    yield notify({message: 'Exercises updated', type: 'success', title: 'Success'})
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response.data });
  }
};


export default [
  takeLatest(NEW_EXERCISE, createExercise),
  takeLatest(DELETE_EXERCISE, deleteExercise),
  takeLatest(UPDATE_EXERCISE, updateExercise),
];