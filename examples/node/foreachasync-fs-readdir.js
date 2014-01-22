'use strict';

var fs = require('fs')
  , forEachAsync = require('foreachasync').forEachAsync
  , path = require('path')
  , dirpath = path.join(__dirname, 'testfiles')
  ;

fs.readdir(dirpath, function (err, nodes) {
  forEachAsync(nodes, function (next, node) {
    var filepath = path.join(dirpath, node)
      ;

    console.log(filepath);
    fs.readFile(filepath, null, function (err, contents) {
      console.log(node, contents.length);
      next();
    });
  }).then(function () {
    console.log('All Done!');
  });
});
