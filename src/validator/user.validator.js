const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const createUserValidator = [
  check("username", "Error on the username field")
    .exists()
    .withMessage("A username must exist")
    .notEmpty()
    .withMessage("Username field can not be empty")
    .isString()
    .withMessage("The username field, must be complete with text")
    .isLength({ min: 6, max: 40 })
    .withMessage("The username must have between 6 & 40 characters"),
  check("email", "Error on the email field")
    .exists()
    .withMessage("No value found for the email field")
    .notEmpty()
    .withMessage("Email field can not be empty")
    .isString()
    .withMessage("The email field, must be complete with an email format")
    .isLength({ min: 7, max: 50 })
    .withMessage("The email must have between 7 & 50 characters")
    .isEmail()
    .withMessage("Invalid email"),
  check("password", "Error on the password field")
    .exists()
    .withMessage("A password must exist")
    .notEmpty()
    .withMessage("Password field can not be empty")
    .isString()
    .withMessage("The password field, must be complete with text")
    .isLength({ min: 8 })
    .withMessage("The password must have more than 8 characters"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const updateUserValidator = [
  param("id").isInt().withMessage("The ID must be an integer"),
  check("name")
    .isString()
    .withMessage("The name field, must be complete with text")
    .exists()
    .withMessage("A name must exist")
    .notEmpty()
    .withMessage("Name field can not be empty"),
  check("lastname")
    .isString()
    .withMessage("The lastname field, must be complete with text")
    .exists()
    .withMessage("A lastname must exist")
    .notEmpty()
    .withMessage("Lastname field can not be empty"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const loginValidator = [
  check("email", "Error on the email field")
    .exists()
    .withMessage("An email must exist")
    .notEmpty()
    .withMessage("The email field can not be empty")
    .isString()
    .withMessage("The email field, must be complete with an email format")
    .isEmail()
    .withMessage("Invalid email"),
  check("password", "Error on the password field")
    .exists()
    .withMessage("A password must exist")
    .notEmpty()
    .withMessage("Password field can not be empty")
    .isString()
    .withMessage("The password field, must be complete with text"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  createUserValidator,
  updateUserValidator,
  loginValidator,
};