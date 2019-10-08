class AuthController {
  signUpGet(req, res) {
    res.render("auth/signup-view");
  }

  signInGet(req, res) {
    res.render("auth/signin-view");
  }
}

module.exports = AuthController;
