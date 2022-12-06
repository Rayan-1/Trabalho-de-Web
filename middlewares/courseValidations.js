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

const courseUpdateValidation = () => {
  return [
    body("title")
      .isLength({ min: 3 })
      .withMessage("O nome precisa de pelo menos 3 caracteres"),
    body("category")
      .optional()
      .isLength({ min: 3 })
      .withMessage("A categoria precisa de pelo menos 3 caracteres"),
    body("description")
      .optional()
      .isLength({ min: 3 })
      .withMessage("A descrição precisa de pelo menos 3 caracteres"),
  ];
};

module.exports = {
  courseInsertValidation,
  courseUpdateValidation,
};
