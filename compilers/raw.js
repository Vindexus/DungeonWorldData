var _               = require('lodash')
var path            = require('path')
var Parser          = require('rpgparser-data')
var config          = require('./config')();
var factory         = require('./factory');

config.outputFiles = [path.join(__dirname, "..", "json", "game_data_raw.json")];
var parser = factory(config);
module.exports = parser
