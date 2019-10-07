const express = require("express");
const path = require("path");
//
const HomeRouter = require("./src/routers/home-router");
const booksRouter = require("./src/routing/booksRouter");

const app = express();

// It sets up a public folder
app.use("/public", express.static(path.join(__dirname, "/public")));

// It creates virtual folders aiming to files inside folder' packages
app.use(
  "/css",
  express.static(path.join(__dirname, "/node_modules/", "bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/", "bootstrap/dist/js"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/node_modules/", "jquery/dist/"))
);

// It sets up the views folder and the view engine
app.set("views", "./src/views");
app.set("view engine", "EJS");

const pageModel = {
  navs: [
    { link: "/books", title: "books" },
    { link: "/authors", title: "authors" }
  ]
};

// It sets up the books router
app.use("/books", booksRouter(pageModel));
// It serves the index file
app.use("/", new HomeRouter().getRouter());

// It sets up the port for the web app
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("Listening on port 3000");
});
