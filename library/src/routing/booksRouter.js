const express = require("express");

const booksRouter = express.Router();

function router(pageModel) {
  booksRouter.route("/").get((req, res) => {
    res.render("booksView", pageModel);
  });

  booksRouter.get("/", (req, res) => {
    res.render("booksView", pageModel);
  });

  booksRouter.route("/id:").get((req, res) => {
    // const { id } = req.param;
    res.render("booksView", pageModel);
  });

  return booksRouter;
}

module.exports = router;
