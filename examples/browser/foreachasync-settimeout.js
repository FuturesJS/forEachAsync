window.addEventListener('load', function () {
  'use strict';

  function log() {
    document.querySelector('#foreachasync-console').innerHTML +=
      '\n' + Array.prototype.join.call(arguments, ' | ');
    console.log.apply(console, arguments);
  }

  var forEachAsync = window.forEachAsync
    ;

  log('i', 'item', 'ms');
  forEachAsync([2, 11, 37, 42], function (item, i) {
    var ms = Math.floor(Math.random() * 1000)
      ;

    return new Promise(function (resolve) {
      setTimeout(function () {
        log(i, item, ms);
        resolve();
      }, ms);
    });
  }).then(function () {
    log('All Done');
  });
});
