(function () {
  "use strict";

  var PromiseA = require('bluebird')
    , forEachAsync = require('./forEachAsync').forEachAsync
    , context = {}
    ;

  forEachAsync([0, 500, 70, 200, 400, 100], function (element, i, arr) {
    console.log(i, '/', arr.length, 'began');

    var result
      ;

    // test that thisness is applied
    this[element] = i;

    if (i % 2) {
      // test that synchronous callbacks don't mess things up
      result = PromiseA.resolve();
    } else {
      // test asynchronous callbacks
      result = new Promise(function (resolve/*, reject*/) {
        setTimeout(resolve, element);
      });
    }

    return result.then(function () {
      // test that array order is as expected
      console.log(i, '/', arr.length, 'complete');
    });
  }, context).then(function () {
    // test that thisness carried
    console.log('context', context);
  }).then(function () {
    // test then chaining
    console.log("now wasn't that nice?");
  });
}());
