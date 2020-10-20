import {asyncHandler} from '../middlewares/async'
import { Workout } from '../models/Workout'
import { WorkoutExercise } from "../models/WorkoutExercise";
import { User } from "../models/User";
import exercises from "../../frontend/src/redux/sagas/exercises";


export const createWorkout = asyncHandler(async (req, res, next) => {
  const { email, userId } = req.user
  const { newWorkout } = req.body
  const exercises = []
  const workout = new Workout({date: Date.now(), owner: userId})

  for await (let exercise of newWorkout) {
    const workoutExercise = new WorkoutExercise({
      exercise: exercise._id,
      measurement: exercise.measurement,
      repeats: exercise.repeats,
      owner: workout.id
    })
    await workoutExercise.save()
    await workout.exercises.push(workoutExercise.id)
  }
  await workout.save()

  const user = await User.findOne({email})
  await user.workouts.push(workout.id)
  await user.save()

  res.status(200).send()
})