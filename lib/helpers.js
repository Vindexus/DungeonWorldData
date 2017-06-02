var helpers = []

helpers.push(function (handlebars, gameData) {
  handlebars.registerHelper('move', function(move) {
    if(!gameData.moves[move]) {
      console.warn('Could not find move with key ' + move);
      return move;
    }
    return gameData.moves[move].name
  });
})

helpers.push(function (handlebars, gameData) {
  handlebars.registerHelper('tag', function(tag) {
    if(!gameData.tags[tag]) {
      console.warn('Could not find tag with key ' + tag);
      return tag;
    }
    return gameData.tags[tag].name
  });
})

helpers.push(function (handlebars, gameData) {
  handlebars.registerHelper('blank', function(tag) {
    return '[' + '_'.repeat(10) + ']'
  });
})

module.exports = helpers
