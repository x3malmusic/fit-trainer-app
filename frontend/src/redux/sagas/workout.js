import { takeLatest, put } from "redux-saga/effects";
import http from "../../services/http";
import { getToken } from "../../services/token";
import {
  ADD_WORKOUT,
  SET_ERROR,
  UPDATE_WORKOUT,
  UPDATE_WORKOUT_STATE
} from "../actions/types";


const addWorkout = function* ({ payload }) {
  try {
    yield http.post("/api/workouts",{newWorkout: payload}, {headers: {'authorization' : `Bearer ${getToken()}`}});
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response.data });
  }
};

const updateWorkout = function* ({ payload }) {
  try {
    yield http.put(`/api/workouts/${payload._id}`,{exercises: payload.exercises}, {headers: {'authorization' : `Bearer ${getToken()}`}});

    const updatedWorkouts = yield payload.workouts.map(workout => {
      if(workout._id === payload._id) return {...workout, exercises: payload.exercises}
      else return workout
    })

    yield put({ type: UPDATE_WORKOUT_STATE, payload: updatedWorkouts });
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response.data });
  }
};


export default [
  takeLatest(ADD_WORKOUT, addWorkout),
  takeLatest(UPDATE_WORKOUT, updateWorkout),
];