/**
 * Created by A on 7/18/17.
 */
"use strict";
const Manager = require("../manager/AppInfo");
const Response = require("./response").setup(Manager);
module.exports = {
  hello: {
    tags: ["api", "appInfo"],
    description: "Pantograph information",
    handler: (req, res) => {
      Response(req, res, "hello");
    }
  },
};

