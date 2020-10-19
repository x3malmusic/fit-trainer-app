import mongoose, { Schema, model } from "mongoose";

const workoutSchema = new Schema({
  exercise: [{type: mongoose.Types.ObjectId, ref: "Exercise" }],
  owner: {type: mongoose.Types.ObjectId, ref: "User" },
  date: { type: String }
});

export const Workout = model("Workout", workoutSchema);