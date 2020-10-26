import { takeLatest, put } from "redux-saga/effects";
import http from "../../services/http";
import { notify } from "../../services/notification";
import {
  ADD_WORKOUT, GET_USER,
  SET_ERROR,
  UPDATE_WORKOUT,
  UPDATE_WORKOUT_STATE
} from "../actions/types";


const addWorkout = function* ({ payload }) {
  try {
    yield http.post("/api/workouts",{newWorkout: payload.workout, date: payload.date});
    yield notify({message: 'Workout created', type: 'success', title: 'Success'})
    yield put({type: GET_USER, payload: true})
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response?.data });
  }
};

const updateWorkout = function* ({ payload }) {
  try {
    yield http.put(`/api/workouts/${payload._id}`,{exercises: payload.exercises});
    const updatedWorkouts = yield payload.workouts.map(workout => {
      if(workout._id === payload._id) return {...workout, exercises: payload.exercises}
      else return workout
    })
    yield put({ type: UPDATE_WORKOUT_STATE, payload: updatedWorkouts });
    yield notify({message: 'Workout updated', type: 'success', title: 'Success'})
  } catch (e) {
    yield put({ type: SET_ERROR, payload: e.response?.data });
  }
};


export default [
  takeLatest(ADD_WORKOUT, addWorkout),
  takeLatest(UPDATE_WORKOUT, updateWorkout),
];