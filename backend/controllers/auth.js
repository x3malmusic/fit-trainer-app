import {asyncHandler} from '../middlewares/async'
import {User} from '../models/User'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({email})
  if(!user) {
    return next('User not Found')
  }

  if(!user.emailConfirmed) {
    return next('Please, verify your email')
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch) {
    return next('Wrong email or password')
  }

  const token = jwt.sign({ email, password: user.password }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  res.send({token})
})

export const register = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body
  const candidate = await User.findOne({email})
  if(candidate) {
    return next('User already exist')
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const verificationCode = Math.floor(Math.random() * 10000)

  const user = new User({ email, password: hashedPassword, exercises: [], workouts: [], verificationCode });
  await user.save()

  res.send({ email, verificationCode })
})

export const userVerify = asyncHandler(async (req, res, next) => {
  const { email, code } = req.body

  const user = await User.findOne({email})
  if(!user) {
    return next('User not found')
  }

  if(code !== user.verificationCode) {
    return next('Wrong verification code')
  }

  await user.updateOne({emailConfirmed: true})
  const updatedUser = await User.findOne({email})

  res.send({ email: updatedUser.email,
    workouts: updatedUser.workouts,
    exercises: updatedUser.exercises,
    emailConfirmed: updatedUser.emailConfirmed
  })
})