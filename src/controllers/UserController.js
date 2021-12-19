const User = require("../models/User");

const UserController = {
  async find(req, res) {
    const userId = req.query.userId;
    const email = req.query.email;
    try {
      const user = userId
        ? await User.findById(userId)
        : await User.findOne({ email: email });
      if (user) {
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
      } else {
        console.log("no existe");
        res.status(200).json({})
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;