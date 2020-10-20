import mongoose, { Schema, model } from "mongoose";

const workoutExerciseSchema = new Schema({
  exercise: {type: mongoose.Types.ObjectId, ref: "Exercise" },
  owner: {type: mongoose.Types.ObjectId, ref: "Workout" },
  repeats: { type: String },
  measurement: { type: String }
});

export const WorkoutExercise = model("WorkoutExercise", workoutExerciseSchema);