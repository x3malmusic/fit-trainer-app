import mongoose, { Schema, model } from "mongoose";

const exerciseSchema = new Schema({
  name: {type: String},
  measureType: {type: String},
  owner: {type: mongoose.Types.ObjectId, ref: "User" },
});

export const Exercise = model("Exercise", exerciseSchema);