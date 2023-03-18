const { Router } = require("express");
const { createMessage } = require("../controllers/messages.controllers");
const messageValidator = require("../validator/message.validator");

const router = Router();

router.post("/api/v1/users/:id/message", messageValidator, createMessage)

module.exports = router;