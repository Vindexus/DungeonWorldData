var _               = require('lodash');
var path            = require('path');
var Parser          = require('rpgparser-data');
var config          = require('./config')();
var colors          = require('colors');

config.outputFiles = [path.join(__dirname, "..", "json", "game_data_raw.json")];
var parser = new Parser();
parser.init(config);
parser.registerStep(function (data) {
  data.classes_list.forEach(function (classKey) {
    console.log(classKey.green);
    ['starting_moves', 'race_moves', 'advanced_moves_1', 'advanced_moves_2'].forEach(function (listKey) {
      console.log('data.classes[classKey][listKey]',data.classes[classKey][listKey]);
      data.classes[classKey][listKey].forEach(function (moveKey) {
        console.log(moveKey.cyan);
        data.moves[moveKey].classes = data.moves[moveKey].classes || [];
        data.moves[moveKey].classes.push(classKey);
        console.log('data.moves[moveKey]',data.moves[moveKey]);
      });
    });
  });

  return data;
});
module.exports = parser;
