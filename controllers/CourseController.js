const Course = require("../models/Course");
const mongoose = require("mongoose");

const insertCourse = async (req, res) => {
  try {
    const { title, category, description, classLink } = req.body;

    const newCourse = await Course.create({
      title,
      category,
      description,
      classLink,
    });

    if (!newCourse) {
      res.status(422).json({
        errors: ["Houve um problema, por favor tente novamente mais tarde."],
      });

      return;
    }

    res.status(201).json(newCourse);
  } catch (error) {
    console.log(error);
  }
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findById(mongoose.Types.ObjectId(id));

    if (!course) {
      res.status(404).json({ errors: ["Curso não encontrado."] });

      return;
    }

    await Course.findByIdAndDelete(course._id);

    res
      .status(200)
      .json({ id: course._id, message: "Curso excluído com sucesso." });
  } catch (error) {
    res.status(404).json({ errors: ["Curso não encontrado."] });

    return;
  }
};

const getCourses = async (req, res) => {
  const courses = await Course.find({})
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(courses);
};

const getCourseById = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findById(mongoose.Types.ObjectId(id));

    if (!course) {
      res.status(404).json({ errors: ["Curso não encontrado."] });

      return;
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(404).json({ errors: ["Curso não encontrado."] });

    return;
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, category, description, classLink } = req.body;

    const course = await Course.findById(mongoose.Types.ObjectId(id));

    if (!course) {
      res.status(404).json({ errors: ["Curso não encontrado."] });

      return;
    }

    if (title) course.title = title;

    if (category) course.category = category;

    if (description) course.description = description;

    if (classLink) course.classLink = classLink;

    await course.save();

    res.status(200).json(course);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  insertCourse,
  deleteCourse,
  getCourses,
  getCourseById,
  update,
};
