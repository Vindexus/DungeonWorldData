var _               = require('lodash')
var handlebars      = require('handlebars')
var path            = require('path')
var Parser          = require('rpgparser-data');
var factory         = require('./factory');

var handlebarsHelpers = require(path.join(__dirname, "..", "lib", "handlebars_helpers"))
var config = require('./config')();

//This data replaces any helpers in text fields with that field's text
//For example
//description: 'You get +1 on Parley when you have max HP.'
config.outputFiles = [path.join(__dirname, "..", "json", "game_data_basic.json")];


var preSteps = [];
preSteps.push(function (data) {
  var gameData = _.clone(data);
  handlebarsHelpers(handlebars, gameData);
  function runHelpers (data) {
    if(typeof(data) == 'object') {
      for(var key in data) {
        data[key] = runHelpers(data[key])
      }
    }
    else if(typeof(data) == 'string') {
      var template = handlebars.compile(data, {noEscape: true})
      return template(gameData)
    }

    return data
  }

  gameData = runHelpers(gameData);
  return gameData
});

var parser = factory(config, preSteps);
module.exports = parser