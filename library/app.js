const express = require("express");
const path = require("path");

const app = express();

// It sets up a public folder
app.use("/public", express.static(__dirname + "/public"));

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
app.set("views", "./views");
app.set("view engine", "EJS");

// It serves the index file
app.get("/", (req, res) => {
  res.render("index");
});

// It sets up the port for the web app
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("Listening on port 3000");
});
