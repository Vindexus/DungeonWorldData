module.exports = helpers = {
  keyToName: function (key) {
    return key.split("_").map(helpers.firstLetterUpper).join(" ")
  },
  firstLetterUpper: function (word, index) {
    if(index > 0 && ['and', 'or', 'the', 'of'].indexOf(word) >= 0) {
      return word
    }
    return word.substr(0,1).toUpperCase() + word.substr(1)
  }
}