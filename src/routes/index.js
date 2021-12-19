const router = require("express").Router();
const AuthRouter = require("./auth");
const ConversationRouter = require("./conversations");
const MessageRouter = require("./messages");
const UserRouter = require("./users");

router.use("/api/auth", AuthRouter);
router.use("/api/conversations", ConversationRouter);
router.use("/api/messages", MessageRouter);
router.use("/api/users", UserRouter);

module.exports = router;