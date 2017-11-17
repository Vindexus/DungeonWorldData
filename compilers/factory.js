var _               = require('lodash')
var handlebars      = require('handlebars')
var path            = require('path')
var Parser          = require('rpgparser-data')

module.exports = function (config, preSteps, postSteps) {
  var parser = new Parser()
  parser.init(config);
  if(preSteps) {
    preSteps.forEach(function (step) {
      parser.registerStep(step);
    });
  }
  parser.registerStep(function (gameData) {
    var dungeonWorldPackage = require(path.join(__dirname, "..", "package.json"))
    gameData.version = dungeonWorldPackage.version
    return gameData
  });

  parser.registerStep(function (gameData) {
    gameData.classes.wizard.spells = Parser.helpers.completeObjects(gameData.classes.wizard.spells);
    return gameData;
  })

  if(postSteps) {
    postSteps.forEach(function (step) {
      parser.registerStep(step);
    });
  }

  return parser;
};