var _               = require('lodash');
var path            = require('path');
var Parser          = require('rpgparser-data');
var config          = require('./config')();
var colors          = require('colors');

config.outputFiles = [path.join(__dirname, "..", "json", "game_data_raw.json")];
var factory         = require('./factory');
var parser = factory(config);
module.exports = parser
