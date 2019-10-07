const express = require("express");
const AuthController = require("./../controllers/auth-controller");

class AuthRouter {
  constructor() {
    this.router = express.Router();
    this.router.route("/signUp").get((req, res) => {
      new AuthController().signUpGet(req, res);
    });
  }

  getRouter() {
    return this.router;
  }
}

module.exports = AuthRouter;
