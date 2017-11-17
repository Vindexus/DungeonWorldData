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

  //Add a 'classes' array to all the moves
  parser.registerStep(function (data) {
    data.classes_list.forEach(function (classKey) {
      ['starting_moves', 'race_moves', 'advanced_moves_1', 'advanced_moves_2'].forEach(function (listKey) {
        data.classes[classKey][listKey].forEach(function (moveKey) {
          data.moves[moveKey].classes = data.moves[moveKey].classes || [];
          data.moves[moveKey].classes.push(classKey);
        });
      });
    });

    return data;
  });

  //Just some clean up on certain things that need their names and keys
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