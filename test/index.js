const { clone } = require("../app");
const path = require("path");

clone(path.join(__dirname, "../node_modules"), path.join(__dirname, "./node_modules"), true, false)
