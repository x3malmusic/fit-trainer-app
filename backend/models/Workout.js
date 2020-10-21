import mongoose, { Schema, model } from "mongoose";

const workoutSchema = new Schema({
  owner: {type: mongoose.Types.ObjectId, ref: "User" },
  date: { type: String },
  exercises: [
      {
        exercise: {type: mongoose.Types.ObjectId, ref: "Exercise" },
        repeats: { type: String },
        measurement: { type: String }
      }
    ]
});

export const Workout = model("Workout", workoutSchema);