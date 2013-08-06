/*jshint -W054 */
(function (exports) {
  "use strict";

  function forEachAsync(arr, fn, thisArg) {
    var dones = []
      , index = -1
      ;

    function next(BREAK, newArr) {
      if (0 === arr.length || BREAK === forEachAsync.__BREAK) {
        dones.forEach(function (done) {
          done.call(thisArg, newArr);
        });
        return;
      }

      index += 1;
      fn.call(thisArg, next, arr.shift(), index, arr);
    }

    setTimeout(next, 4);

    return {
      then: function (_done) {
        dones.push(_done);
        return this;
      }
    };
  }
  forEachAsync.__BREAK = {};

  exports.forEachAsync = forEachAsync;
}('undefined' !== typeof exports && exports || new Function('return this')()));
