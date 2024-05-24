import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  technology: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
});

export const Project = mongoose.model("Project", projectSchema);
