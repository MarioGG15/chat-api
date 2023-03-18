const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");


const messageValidator = [
    param("id").isInt().withMessage("The ID must be an integer"),
    check("message")
      .exists()
      .withMessage("No value found for the message field")
      .notEmpty()
      .withMessage("The message must no be empty"),
    check("conversation_id")
      .exists()
      .withMessage("The value for de conversation id field doesn't exist")
      .notEmpty()
      .withMessage("The fiel conversation id can not be empty")
      .isInt()
      .withMessage("The value to set an conversation id must be an integer"),
    (req, res, next) => {
      validateResult(req, res, next);
    },
  ];

module.exports = messageValidator;