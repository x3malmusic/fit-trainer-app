import {asyncHandler} from '../middlewares/async'
import { Workout } from '../models/Workout'
import { User } from "../models/User";


export const createWorkout = asyncHandler(async (req, res, next) => {
  const { email, userId } = req.user
  const { newWorkout, date } = req.body

  const exercises = newWorkout.map(exercise => ({
    exercise: exercise._id,
    measurement: exercise.measurement,
    repeats: exercise.repeats,
  }))

  const workout = new Workout({date , owner: userId, exercises })
  await workout.save()

  const user = await User.findOne({email})
  await user.workouts.push(workout.id)
  await user.save()

  res.status(200).send()
})


export const updateWorkout = asyncHandler(async (req, res, next) => {
  const { email, userId } = req.user
  const { exercises } = req.body
  const { id } = req.params

  await Workout.findOne({_id: id}).updateOne({exercises})

  res.status(200).send()
})