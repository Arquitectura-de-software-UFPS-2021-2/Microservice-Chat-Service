const ConversationController = require("../controllers/ConversationController");

const router = require("express").Router();

router.post("/", ConversationController.register);

router.get("/:userId", ConversationController.list);

router.get("/find/:firstUserId/:secondUserId", ConversationController.find);

module.exports = router;
