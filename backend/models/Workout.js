import mongoose, { Schema, model } from "mongoose";

const workoutSchema = new Schema({
  exerciseName: {type: String},
  repeats: {type: String},
  value: {type: String},
  measureType: {type: String},
  owner: {type: mongoose.Types.ObjectId, ref: "User" },
});

export const Workout = model("Workout", workoutSchema);