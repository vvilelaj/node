const Menu = require("./../models/home/menu-model");

class MenuService {
  getPageModel() {
    return {
      navs: [
        { link: "/books", title: "books" },
        { link: "/authors", title: "authors" }
      ]
    };
  }

  getMenus() {
    const menus = [];
    menus.push(new Menu("Sign Up", "/auth/signUp"));
    menus.push(new Menu("Sign Ip", "/auth/signIn"));
    return menus;
  }
}

module.exports = MenuService;
