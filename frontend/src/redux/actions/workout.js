import {
  ADD_WORKOUT
} from "./types";


export const addWorkout = (exercise) => ({
  type: ADD_WORKOUT,
  payload: exercise,
});