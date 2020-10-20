import mongoose, { Schema, model } from "mongoose";

const workoutSchema = new Schema({
  exercises: [{type: mongoose.Types.ObjectId, ref: "WorkoutExercise" }],
  owner: {type: mongoose.Types.ObjectId, ref: "User" },
  date: { type: String }
});

export const Workout = model("Workout", workoutSchema);