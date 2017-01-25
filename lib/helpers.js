var helpers = []

helpers.push(function (handlebars, gameData) {
  handlebars.registerHelper('move', function(move) {
    return gameData.moves[move].name
  });
})

helpers.push(function (handlebars, gameData) {
  handlebars.registerHelper('tag', function(tag) {
    return gameData.tags[tag].name
  });
})

helpers.push(function (handlebars, gameData) {
  handlebars.registerHelper('blank', function(tag) {
    return '[' + '_'.repeat(10) + ']'
  });
})

module.exports = helpers
