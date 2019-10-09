class HomeController {
  constructor(menuService) {
    this.menuService = menuService;
  }

  indexGet(req, res) {
    res.render("home/index-view", { menus: this.menuService.getMenus() });
  }
}

module.exports = HomeController;
