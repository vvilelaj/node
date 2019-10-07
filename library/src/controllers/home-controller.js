class HomeController {
  constructor(menuService) {
    this.menuService = menuService;
  }

  indexGet(req, res) {
    res.render("home/indexView", this.menuService.getMenus());
  }
}

module.exports = HomeController;
