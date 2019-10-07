class AuthController {
  signUpGet(req, res) {
    res.render("auth/signup-view");
  }
}

module.exports = AuthController;
