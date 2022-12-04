const { body } = require("express-validator");

const courseInsertValidation = () => {
  return [
    body("title")
      .not()
      .equals("undefined")
      .withMessage("O título é obrigatório.")
      .isString()
      .withMessage("O título é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O título é obrigatório."),
  ];
};

module.exports = {
  courseInsertValidation,
};
