'use strict';

var fs = require('fs')
  , path = require('path')
  , dirpath = path.join(__dirname, 'testfiles')
  ;

fs.readdir(dirpath, function (err, nodes) {
  nodes.forEach(function (node) {
    var filepath = path.join(dirpath, node)
      ;

    console.log(filepath);
    fs.readFile(filepath, null, function (err, contents) {
      console.log(node, contents.length);
    });
  });

  console.log('All Done');
});
