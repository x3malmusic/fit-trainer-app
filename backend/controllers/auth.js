import {asyncHandler} from '../middlewares/async'
import {User} from '../models/User'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { USER_EXIST,
  USER_NOT_FOUND,
  USER_NOT_VERIFIED,
  WRONG_EMAIL_PASSWORD,
  WRONG_VERIFICATION_CODE } from '../helpers/errors'


export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({email})
  if(!user) {
    return next(USER_NOT_FOUND)
  }

  if(!user.emailConfirmed) {
    return next(USER_NOT_VERIFIED)
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch) {
    return next(WRONG_EMAIL_PASSWORD)
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
    return next(USER_EXIST)
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
    return next(USER_NOT_FOUND)
  }

  if(code !== user.verificationCode) {
    return next(WRONG_VERIFICATION_CODE)
  }

  await user.updateOne({emailConfirmed: true})
  const updatedUser = await User.findOne({email})

  res.send({ email: updatedUser.email,
    workouts: updatedUser.workouts,
    exercises: updatedUser.exercises,
    emailConfirmed: updatedUser.emailConfirmed
  })
})