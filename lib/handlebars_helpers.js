function registerHelpers (handlebars, gameData) {
  var helpers = require('./helpers')(gameData);
  handlebars.registerHelper('move', helpers.move);
  handlebars.registerHelper('tag', helpers.tag);
  handlebars.registerHelper('item', helpers.item);
  handlebars.registerHelper('blank', helpers.blank);
}

module.exports = registerHelpers;
