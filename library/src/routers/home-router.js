const express = require("express");

const pageModel = {
  navs: [
    { link: "/books", title: "books" },
    { link: "/authors", title: "authors" }
  ]
};

class HomeRouter {
  constructor() {
    this.router = express.Router();

    this.router.route("/").get((req, res) => {
      res.render("home/indexView", pageModel);
    });
  }

  getRouter() {
    return this.router;
  }
}

module.exports = HomeRouter;
