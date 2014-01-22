window.addEventListener('load', function () {
  'use strict';

  function log() {
    document.querySelector('#foreach-console').innerHTML +=
      '\n' + Array.prototype.join.call(arguments, ' | ');
    console.log.apply(console, arguments);
  }

  log('i', 'item', 'ms');
  [2, 11, 37, 42].forEach(function (item, i) {
    var ms = Math.floor(Math.random() * 1000)
      ;

    setTimeout(function () {
      log(i, item, ms);
    }, ms);
  });

  log('All Done');
});
