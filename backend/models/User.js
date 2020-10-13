import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: [true, "Email is required"], unique: true },
  emailConfirmed: {type: Boolean, default: false},
  password: { type: String, required: [true, "Password is required"] },
  exercises: [{ type: mongoose.Types.ObjectId, ref: "Exercise" }],
  workouts: [{type: mongoose.Types.ObjectId, ref: "Workout" }]
});

export const User = model("User", userSchema);