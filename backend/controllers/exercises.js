import {asyncHandler} from '../middlewares/async'
import { Exercise } from '../models/Exercise'
import { User } from "../models/User";

export const createExercise = asyncHandler(async (req, res, next) => {
  const { email, userId } = req.user
  const { name, measureType } = req.body

  const exercise = new Exercise({name , measureType, owner: userId})
  await exercise.save()

  const user = await User.findOne({email})
  user.exercises.push(exercise.id)
  user.save()

  res.status(200).send()
})


export const deleteExercise = asyncHandler(async (req, res, next) => {
  const { email } = req.user
  const { id } = req.params

  await Exercise.findByIdAndDelete(id)
  const user = await User.findOne({email})
  user.exercises.pull({_id: id})
  user.save()

  res.status(200).send()
})