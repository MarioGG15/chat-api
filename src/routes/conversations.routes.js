const { Router } = require("express");
const { createConversationSingle, getConversationByUserId, getConversationData, deleteConversation, createConversationGroup } = require("../controllers/conversations.controllers");
const { createConversationGroupValidator, paramsIdValidator } = require("../validator/conversation.validator");

const router = Router();

router.post("/api/v1/conversation/create", createConversationSingle);

router.get("/api/v1/users/:id/conversations", paramsIdValidator, getConversationByUserId)

router.get("/api/v1/conversations/:id", paramsIdValidator, getConversationData)

router.delete("/api/v1/conversations/:id", paramsIdValidator, deleteConversation)

router.post("/api/v1/users/:iduser/conversations/group", createConversationGroupValidator, createConversationGroup)

module.exports = router;