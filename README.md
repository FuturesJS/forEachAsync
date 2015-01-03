forEachAsync
===

Analogous to `[].forEach`, but handles items asynchronously with a final callback passed to `then`.

This is the most essential piece of the [`ArrayAsync`](https://github.com/FuturesJS/ArrayAsync) package.

For cases where you want to loop through batches of items at once (as opposed to strictly one-by-one as forEachAsync does), check out [`forAllAsync`](https://github.com/FuturesJS/forAllAsync) and [`lateral`](https://github.com/FuturesJS/lateral).

For cases where you want to loop through all items at once and we able to know when they're all done see [`join`](https://github.com/FuturesJS/join)

v5.x
----

We jumped from 3.x to 5.x because I'm considering creating a backwards-and-forwards compatible 4.x that
uses AngularJS-style function introspection to allow for having the next param.
Straight up, that's probably a bad idea and waste of time so I hope I don't actually do it.

Screencast
---

<http://youtu.be/O7egvEz4scA>

Usage
-----

```javascript
  // EXAMPLE ASYNC FUNCTION

  function getPicsAsync(animal) {
    var flickerApi = "http://api.flickr.com/services/feeds/photos_public.gne?tagmode=any&format=json&tags=" + animal;

    return requestAsync({ url: flickerApi });
  }
```

```javascript
  forEachAsync(['dogs', 'cats', 'octocats'], function (element) {
    return getPicsAsync(element);
  }).then(function () {
    // then after all of the elements have been handled
    // the final callback fires to let you know it's all done
    console.log('All requests have finished');
  });
```

### Supplying your own Promises Implementation

If native ES6 promises are not available, then you should supply your own Promises/A+
implementation like so:

```javascript
  forEachAsync = forEachAsync.create(window.Promise || require('bluebird'));
```

Browser Installation
===

You can install from bower:

```bash
bower install --save forEachAsync@5.x
```

Or download the raw file from <https://raw.github.com/FuturesJS/forEachAsync/master/forEachAsync.js>:

```bash
wget https://raw.github.com/FuturesJS/forEachAsync/master/forEachAsync.js
```

```javascript
(function () {
  'use strict';

  var forEachAsync = window.forEachAsync
    ;

  // do stuff ...
}());
```

**Note**: If you need both 3.x/4.x and 5.x version of `forEachAsync` in the browser... good luck with that...

Node Installation
===

```bash
npm install --save forEachAsync@5.x
```

API
===

**`forEachAsync(array, callback[, thisArg])`**

Parameters

  * `array` Array of elements to iterate over
  * `callback` Function to execute for each element, takes 4 arguments
    * `element` a single element of the aforementioned array
    * `index` the index of the current element
    * `array` the same array mentioned above
  * `thisArg` Object to use as `this` when executing `callback`

**`forEachAsync#then(done)`**

Parameters

  * `then` is in the return value of `forEachAsync` and accepts a final `done` callback.
    * `done` called after `forEachAsync` is complete, takes no arguments

Internal API
===

`forEachAsync.__BREAK`

This is used internally for the purposes of the `ArrayAsync` library.

Please don't `break` stuff; use [`ArrayAsync`](https://github.com/FuturesJS/ArrayAsync)`.someAsync` or [`ArrayAsync`](https://github.com/FuturesJS/ArrayAsync)`.everyAsync` instead.
