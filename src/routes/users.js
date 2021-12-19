const UserController = require("../controllers/UserController");

const router = require("express").Router();

router.get("/", UserController.find);

module.exports = router;
