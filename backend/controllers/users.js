import {asyncHandler} from '../middlewares/async'
import {User} from '../models/User'


export const getUser = asyncHandler(async (req, res, next) => {
  const { email } = req.body

  const user = await User.findOne({email})
  if(!user) {
    next('User not Found')
  }

  res.send({ email: user.email,
    workouts: user.workouts,
    exercises: user.exercises,
    emailConfirmed: user.emailConfirmed
  })
})