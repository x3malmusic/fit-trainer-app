import {asyncHandler} from '../middlewares/async'
import { Exercise } from '../models/Exercise'

export const createExercise = asyncHandler(async (req, res, next) => {
  const { userId } = req.user
  const { name, measureType } = req.body

  const exercise = new Exercise({name , measureType, owner: userId})
  await exercise.save()

  res.status(200).send()
})