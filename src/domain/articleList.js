var Article = require('./article');
var wrapMethod = require('./wrapMethod');

var list = [];

wrapMethod(list, 'push', function(original, title) {
  return original.call(this, new Article(title));
});

module.exports = list;