import {asyncHandler} from '../middlewares/async'
import { Workout } from '../models/Workout'
import { User } from "../models/User";


export const createWorkout = asyncHandler(async (req, res, next) => {
  const { email, userId } = req.user
  const { workout } = req.body

  // const workout = new Workout({name , measureType, owner: userId})
  // await workout.save()
  //
  // const user = await User.findOne({email})
  // await user.workouts.push(workout.id)
  // await user.save()

  res.status(200).send()
})