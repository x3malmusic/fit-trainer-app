import {
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  SET_DATE,
} from "./types";


export const addWorkout = (workout) => ({
  type: ADD_WORKOUT,
  payload: workout,
});

export const updateWorkout = (workout) => ({
  type: UPDATE_WORKOUT,
  payload: workout,
});

export const setDate = (date) => ({
  type: SET_DATE,
  payload: date,
});