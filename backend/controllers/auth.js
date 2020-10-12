import {asyncHandler} from '../middlewares/async'
import {User} from '../models/User'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({email})

  if(!user) {
    next('User not Found')
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch) {
    next('Wrong email or password')
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  res.send({email, exercises: user.exercises, workouts: user.workouts , token })
})

export const register = asyncHandler(async (req, res, next) => {

  const { email, password } = req.body
  const candidate = await User.findOne({email})

  if(candidate) {
    next('User already exist')
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new User({ email, password: hashedPassword, exercises: [], workouts: [] });
  await user.save()

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  res.send({ email, exercises: [], workouts: [] , token })
})