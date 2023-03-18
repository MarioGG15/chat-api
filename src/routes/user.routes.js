const { Router } = require("express");
const { createUser, getAllUser, updateUser } = require("../controllers/user.controllers");
const { createUserValidator, updateUserValidator } = require("../validator/user.validator");

const router = Router();

router.post("/api/v1/users/create", createUserValidator, createUser);

router.get("/api/v1/users", getAllUser);

router.put("/api/v1/users/:id", updateUserValidator, updateUser);

module.exports = router;