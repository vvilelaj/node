const express = require("express");
const HomeController = require("./../controllers/home-controller");
const MenuService = require("./../services/menu-service");

class HomeRouter {
  constructor() {
    this.router = express.Router();
    this.router.route("/").get((req, res) => {
      const menuService = new MenuService();
      new HomeController(menuService).indexGet(req, res);
    });
  }

  getRouter() {
    return this.router;
  }
}

module.exports = HomeRouter;
