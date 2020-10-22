import { NEW_EXERCISE,
  UPDATE_EXERCISE,
  DELETE_EXERCISE,
  UPDATE_EXERCISE_STATE
} from './types'

export const createExercise = (exercise) => ({
  type: NEW_EXERCISE,
  payload: exercise,
});

export const updateExercises = (exercises) => ({
  type: UPDATE_EXERCISE,
  payload: exercises,
});

export const updateExercisesState = (exercises) => ({
  type: UPDATE_EXERCISE_STATE,
  payload: exercises,
});

export const deleteExercise = (id) => ({
  type: DELETE_EXERCISE,
  payload: id,
});