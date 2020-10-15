import {asyncHandler} from '../middlewares/async'
import {User} from '../models/User'


export const getUser = asyncHandler(async (req, res, next) => {
  const { email } = req.user

  const user = await User.findOne({email}).populate('exercises.exercise');
  if(!user) {
    return next('User not Found')
  }

  res.send({ email: user.email,
    workouts: user.workouts,
    exercises: user.exercises,
    emailConfirmed: user.emailConfirmed,
    userId: user.id
  })
})