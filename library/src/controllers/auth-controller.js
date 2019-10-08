class AuthController {
  signUpGet(req, res) {
    res.render("auth/signup-view");
  }

  signUpPost(req, res) {
    console.log(req.body);
  }

  signInGet(req, res) {
    res.render("auth/signin-view");
  }
}

module.exports = AuthController;
