const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const createConversationSingleValidator = [
    check("title", "Error on the title field")
        .exists()
        .withMessage("A title must exist")
        .notEmpty()
        .withMessage("Title field can not be empty")
        .isString()
        .withMessage("The title field, must be complete with text")
        .isLength({ min: 3, max: 60 })
        .withMessage("The title must have between 3 & 60 characters"),
    check("user_creator", "Error on the user creator field")
        .exists()
        .withMessage("An user creator must exist")
        .notEmpty()
        .withMessage("No value found for the user creator field")
        .isInt()
        .withMessage("The value to set an user creator must be an integer"),
    check("user_guest", "Error on th field user guest")
        .exists()
        .withMessage("An user guest must exist")
        .notEmpty()
        .withMessage("No value found for the user guest field")
        .isInt()
        .withMessage("The value to set an user guest must be an integer"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const createConversationGroupValidator = [
    param("iduser").isInt().withMessage("The ID must be an integer"),
    check("participants")
        .exists()
        .withMessage("The participants must exist")
        .notEmpty()
        .withMessage("No value found for the participants field")
        .isArray()
        .withMessage("The value to set an user guest must be an array"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const paramsIdValidator = [
    param("id").isInt().withMessage("The ID must be an integer"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

module.exports = {
    createConversationSingleValidator,
    createConversationGroupValidator,
    paramsIdValidator
}