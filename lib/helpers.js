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
    return gameData.tags[key] || {description: ""};
  }
  helpers.tag = function (data) {
    var tagObj = {};
    var keys;
    var key = helpers.getTagKey(data);
    var tagObj = {
      key: key
    }
    if(typeof(data) == 'object') {
      tagObj.param = data[key]
    }
    if(!gameData.tags[tagObj.key]) {
      console.warn('Could not find tag with key ' + tagObj.key);
      if(typeof(data) != 'string') {
        var keys = Object.keys(data);
        return keys[0] + ' (' + data[keys[0]] + ')'
      }
      return data.toString();
    }
    var tag = gameData.tags[tagObj.key];
    var text = tag.name;
    var param = tagObj.param;
    var matches = tag.name.match(/^\+?n /);
    if(matches) {
      return param + ' ' + tag.name.substr(tag.name.substr(0,1) == '+' ? 3 : 2);
    }
    return text + (param ? ' (' + param + ')' : '');
  }
  helpers.blank = function () {
    return '_'.repeat(10)
  }
  return helpers;
}
