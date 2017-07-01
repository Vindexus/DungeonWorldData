var path = require('path')
var gameDataDir = path.join(__dirname, "..", "source")

module.exports = function () {
  return {
    shortcuts: ['moves'], //Data in shortcuts is duplicated into game_data root. {{moves.hack_and_slash}} and {{hack_and_slash}} have the same data.
    gameDataDir: gameDataDir,
    debug: false,
    convertMd: false
  }
}