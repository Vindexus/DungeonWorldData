var Parser                    = require('rpgparser-data')
var path                      = require('path')
var handlebars                = require('handlebars')
var helpers                   = require(path.join(__dirname, "..", "lib", "helpers"))

var gameDataDir = path.join(__dirname, "..", "source")

var config = {
  shortcuts: ['moves'], //Data in shortcuts is duplicated into game_data root. {{moves.hack_and_slash}} and {{hack_and_slash}} have the same data.
  gameDataDir: gameDataDir,
  outputFiles: [path.join(__dirname, "..", "json", "game_data_raw.json")],
  debug: false,
  convertMd: false
}

//This data includes the helpers and references that appear in text
//For example
//description: 'You get +1 on {{move parley}} when you have max HP.'
var rawParser = new Parser()
rawParser.init(config)
rawParser.run(config)

//This data replaces any helpers in text fields with that field's text
//For example
//description: 'You get +1 on Parley when you have max HP.'
var parsedConfig = config
parsedConfig.outputFiles = [path.join(__dirname, "..", "json", "game_data_basic.json")]
var parser = new Parser()
parser.init(parsedConfig)
parser.registerStep(function (gameData) {
  helpers.forEach(function (helper) {
    helper(handlebars, gameData)
  })

  function runHelpers (data) {
    if(typeof(data) == 'object') {
      for(var key in data) {
        data[key] = runHelpers(data[key])
      }
    }
    else if(typeof(data) == 'string') {
      var template = handlebars.compile(data)
      return template(gameData)
    }

    return data
  }

  return runHelpers(gameData)
})
parser.registerStep(function (gameData) {
  var dungeonWorldPackage = require(path.join(__dirname, "..", "package.json"))
  gameData.version = dungeonWorldPackage.version
  return gameData
})
parser.run(parsedConfig)

