import {asyncHandler} from '../middlewares/async'
import {User} from '../models/User'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({email})
  if(!user) {
    next('User not Found')
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch) {
    next('Wrong email or password')
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
    next('User already exist')
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const verificationCode = Math.floor(Math.random() * 10000)

  const user = new User({ email, password: hashedPassword, exercises: [], workouts: [], verificationCode });
  await user.save()

  res.send({ email, verificationCode })
})

export const userVerify = asyncHandler(async (req, res, next) => {
  const { email, code } = req.body

  console.log(email, code)

  const user = await User.findOne({email})
  if(!user) {
    next('User not found')
  }

  if(code !== user.verificationCode) {
    next('Wrong verification code')
  }

  await user.updateOne({emailConfirmed: true})

  res.send({ email: user.email,
    workouts: user.workouts,
    exercises: user.exercises,
    emailConfirmed: user.emailConfirmed
  })
})