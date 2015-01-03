(function () {
  "use strict";

  var forEachAsync = require('./forEachAsync').forEachAsync.create(Promise)
    , context = {}
    ;

  forEachAsync([0, 500, 70, 200, 400, 100], function (element, i, arr) {
    // test that array order is as expected
    console.log(element, 'is element', i, 'of', arr.length);

    // test that thisness is applied
    this[element] = i;

    if (i > 2) {
      // test that synchronous callbacks don't mess things up
      return Promise.resolve();
    } else {
      // test asynchronous callbacks
      return new Promise(function (resolve/*, reject*/) {
        setTimeout(resolve, element);
      });
    }
  }, context).then(function () {
    // test that thisness carried
    console.log('context', context);
  }).then(function () {
    // test then chaining
    console.log("now wasn't that nice?");
  });
}());
