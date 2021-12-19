const router = require("express").Router();
const MessageControlller = require("../controllers/MessageController");

router.post("/", MessageControlller.register);

router.get("/:conversationId", MessageControlller.find);

module.exports = router;
