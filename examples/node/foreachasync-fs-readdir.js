'use strict';

var PromiseA = require('bluebird')
  , fs = PromiseA.promisifyAll(require('fs'))
  , forEachAsync = require('foreachasync').forEachAsync
  , path = require('path')
  , dirpath = path.join(__dirname, 'testfiles')
  ;

fs.readdir(dirpath, function (err, nodes) {
  forEachAsync(nodes, function (node) {
    var filepath = path.join(dirpath, node)
      ;

    console.log(filepath);
    return fs.readFileAsync(filepath, null).then(function (contents) {
      console.log(node, contents.length);
    });
  }).then(function () {
    console.log('All Done!');
  });
});
