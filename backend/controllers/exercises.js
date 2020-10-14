import {asyncHandler} from '../middlewares/async'
import { Exercise } from '../models/Exercise'

export const createExercise = asyncHandler(async (req, res, next) => {
  const { email } = req.user
  const { name, measureType } = req.body

  const exercise = new Exercise({name , measureType, owner: email})
  await exercise.save()

  res.status(200).send()
})