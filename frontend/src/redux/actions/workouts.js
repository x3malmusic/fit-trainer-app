import { NEW_EXERCISE, ADD_EXERCISE } from './types'

export const createExercise = (exercise) => ({
  type: NEW_EXERCISE,
  payload: exercise,
});

export const addExercise = (exercise) => ({
  type: ADD_EXERCISE,
  payload: exercise,
});