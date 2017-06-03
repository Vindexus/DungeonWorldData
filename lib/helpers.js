module.exports = function (gameData) {
  var helpers = {};
  helpers.move = function (move) {
    if(!gameData.moves[move]) {
      console.warn('Could not find move with key ' + move);
      return move;
    }
    return gameData.moves[move].name
  }
  helpers.getTagKey = function (param) {
    if(typeof(param) == 'string') {
      return param
    }
    else {
      keys = Object.keys(param);
      return keys[0]
    }
  }
  helpers.getTag = function (param) {
    var key = helpers.getTagKey(param);
    return gameData.tags[key] || false;
  }
  helpers.tag = function (param) {
    var tag = helpers.getTag(param);
    if(!tag) {
      console.log('cannot find tag with this info: ', param)
      //Here we are expecting something like {manaPoints: 1} or {magicSchool: 'Blood'}
      //Which will give "1 manaPoints" or "magicSchool: Blood" respectively
      if(typeof(param) == 'object') {
        var keys = Object.keys(param);
        return keys.map(function (key) {
          if(!isNaN(parseFloat(param[key]))) {
            return param[key] + ' ' + key;
          }
          else {
            return key + ': ' + param[key];
          }
        }).join(', ');
      }
      return param.toString();
    }
    var text = tag.name;
    var matches = tag.name.match(/^\+?n /);
    if(matches) {
      var tagValue = param[tag.key];
      return tagValue + ' ' + tag.name.substr(tag.name.substr(0,1) == '+' ? 3 : 2);
    }
    return text;
  }
  helpers.blank = function () {
    return '_'.repeat(10)
  }
  helpers.getItem = function (param) {
    if(typeof(param) != 'string') {
      return false;
    }
    var item = gameData.equipment[param];
    if(item) {
      return item;
    }
    return false;
  }
  helpers.item = function (param, options) {
    var item = helpers.getItem(param);
    if(item) {
      var extra = '';
      if(item.tags) {
        var tags = item.tags.reduce(function (tags, t) {
          var tag = helpers.getTag(t);
          if(options.hash[tag.key]) {
            console.log('OVERRIDE DETECTED for ' + tag.key)
          }
          tags.push(helpers.tag(t));
          return tags
        }, []);
        extra += ' (' + tags.join(', ') + ')';
      }
      return item.name + extra;
    }
    return param;
  }
  return helpers;
}
