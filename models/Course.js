const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema(
  {
    title: String,
    category: String,
    description: String,
    classes: Array,
    flag: Array,
    userId: mongoose.ObjectId,
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
