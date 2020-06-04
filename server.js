const express = require("express");
const exphbs = require ("express-handlebars");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controller/burgerController.js");
app.use(routes);

app.listen(PORT, function() {
  console.log(`Server listening on: Localhost: ${PORT}`);
});