var fs                        = require('fs')
var path                      = require('path')
var helpers                   = require(path.join(__dirname, "helpers"))
var rawData                   = JSON.parse(fs.readFileSync(path.join(__dirname, "game_data_raw.json")))
var basicData                = JSON.parse(fs.readFileSync(path.join(__dirname, "game_data_basic.json")))

var DW = function () {
  return {
    rawData: rawData,
    basicData: basicData,
    helpers: helpers
  }
}

module.exports = DW