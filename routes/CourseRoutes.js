const express = require("express");
const router = express.Router();

const {
  insertCourse,
  deleteCourse,
  getCourses,
  getCourseById,
  update,
} = require("../controllers/CourseController");

const {
  courseInsertValidation,
  courseUpdateValidation,
} = require("../middlewares/courseValidations");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidation");

router.post("/", authGuard, courseInsertValidation(), validate, insertCourse);
router.delete("/:id", authGuard, deleteCourse);
router.get("/", authGuard, getCourses);
router.get("/:id", authGuard, getCourseById);
router.put("/:id", authGuard, courseUpdateValidation(), validate, update);

module.exports = router;
