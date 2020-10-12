import { Schema, model } from "mongoose";

const exerciseSchema = new Schema({
  name: {type: String},
  measureType: {type: String},
  owner: {type: String},
});

export const Exercise = model("Exercise", exerciseSchema);