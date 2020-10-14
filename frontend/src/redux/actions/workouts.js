import { NEW_EXERCISE } from './types'

export const createExercise = (exercise) => ({
  type: NEW_EXERCISE,
  payload: exercise,
});