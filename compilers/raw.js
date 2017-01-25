var config = require('./config')
var _ = require('lodash')
var Parser = require('rpgparser-data')

var parser = new Parser()
parser.init(config)
module.exports = parser
