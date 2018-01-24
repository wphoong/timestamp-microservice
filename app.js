const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./api/routes/timestamp-routes.js");
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set("view engine", "ejs");


const port = process.env.PORT || 3000;

// call routes
routes(app);

app.listen(port, () => {
  console.log("listening on 3000");
});

