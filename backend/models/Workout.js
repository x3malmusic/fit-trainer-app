import { Schema, model } from "mongoose";

const workoutSchema = new Schema({
  exerciseName: {type: String},
  repeats: {type: String},
  value: {type: String},
  measureType: {type: String},
  owner: {type: String},
});

export const Workout = model("Workout", workoutSchema);