(function () {
  "use strict";

  var forEachAsync = require('../forEachAsync').forEachAsync
    ;

  forEachAsync([0, 500, 70, 800], function (next, element, i, arr) {
    console.log(element, 'is element', i, 'of', arr.length);
    this[element] = i;
    setTimeout(next, element);
  }, {}).then(function () {
    console.log(this);
  });

}());
