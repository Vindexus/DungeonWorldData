var _               = require('lodash')
var path            = require('path')
var Parser          = require('rpgparser-data')
var config          = require('./config')();

config.outputFiles = [path.join(__dirname, "..", "json", "game_data_raw.json")];
var parser = new Parser()
parser.init(config)
module.exports = parser
