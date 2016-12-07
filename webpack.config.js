const webpack = require("webpack");
const path = require("path");

var DEV = path.resolve(__dirname+"/public/lib");
var OUTPUT = path.resolve(__dirname+"/public/scripts");

var config = {
  entry: DEV + "/reactComponents.jsx",
  output: {
    path: OUTPUT,
    filename: "reactComponents.js"
  },
  module: {
    loaders: [{
        include: DEV,
        loader: "babel",
    }]
  }
};

module.exports = config;
