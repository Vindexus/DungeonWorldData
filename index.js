var fs                        = require('fs')
var path                      = require('path')
var helpers                   = require(path.join(__dirname, "lib", "helpers"))
try {
  var rawData                   = JSON.parse(fs.readFileSync(path.join(__dirname, "json", "game_data_raw.json")))
  var basicData                 = JSON.parse(fs.readFileSync(path.join(__dirname, "json", "game_data_basic.json")))
}
catch (ex) {
  console.warn('Error loading JSON files');
  console.log(ex);
  rawData = {}
  basicData = {}
}
var rawCompiler               = require(path.join(__dirname, "compilers", "raw"))
var basicCompiler            = require(path.join(__dirname, "compilers", "basic"))

var DW = function () {
  return {
    rawData: rawData, //None of the mustache helpers are paresd. EG: "+1 to {{move parley}}"
    basicData: basicData, //The helpers have been run through simple text replacement. EG: "+1 to Parley"
    helpers: helpers(rawData),
    compilers: {
      raw: rawCompiler,
      basic: basicCompiler
    }
  }
}

module.exports = new DW()