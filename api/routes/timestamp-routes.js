"use strict";

const moment = require("moment");

module.exports = (app) => {

  app.get("/", (req, res) => {
    res.render("index.html.ejs");
  });

  app.get("/:timestamp", (req,res) => {

    let date = moment(req.params.timestamp).format("MMMM D, YYYY");
    let rx = new RegExp(/^\d+$/);
    let unix = req.params.timestamp;
    let unix2;
    let natural;

    if (rx.test(unix)) {
      console.log("timestamp is a number");
      unix2 = Number(unix);
      natural = moment(Number(unix)).format("MMMM D, YYYY");
    } else if (!rx.test(unix)) {
      if (date == "Invalid date") {
        console.log("timestamp does not contain date or unix timestamp");
        unix2 = null;
        natural = null;
      } else {
        console.log("timestamp is natural language");
        unix2 = Number(moment(unix).unix());
        natural = unix.split("%")[0];
      }
    }

    let timestamp = {
      "unix": unix2,
      "natural": natural
    };

    res.send(timestamp);

  });

};
