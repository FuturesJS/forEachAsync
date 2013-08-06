forEachAsync
===

v3.0 - Diet Cola Edition (not yet published to npm)

Analogous to `[].forEach`, but handles items asynchronously with a final callback passed to `then`.

This is the most essential piece of the [`ArrayAsync`](https://github.com/FuturesJS/ArrayAsync) package.

Usage
===

It's as simple as you could guess:

```javascript
  // an asynchronous web request
  function getPics(animal, cb) {
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(
      flickerAPI
    , { tags: thing
      , tagmode: "any"
      , format: "json"
      , success: function (data) {
          console.log('teh animals:', data);
        }
      , complete: cb
      }
    );
  }

  // waits for one request to finish before beginning the next
  forEachAsync(['dogs', 'cats', 'octocats'], function (next, element, index, array) {
    getPics(element, next);
  
  // then after all of the elements have been handled
  // the final callback fires to let you know it's all done
  }).then(function () {
    console.log('All requests have finished');
  });
```


Browser Installation
===

You can download and include `forEachAsync.js`:

```html
<script src="https://raw.github.com/FuturesJS/forEachAsync/master/forEachAsync.js"></script>
```

```javascript
(function () {
  'use strict';

  var forEachAsync = window.forEachAsync
    ;

  // do stuff ...
}());
```

Or you can build it alongside other libraries:

```bash
npm install -g pakmanager
npm install forEachAsync@3.x --save
pakmanager -e browser build
```

```html
<script src="pakmanaged.js"></script>
```

```javascript
(function () {
  'use strict';

  var forEachAsync = require('forEachAsync').forEachAsync
    ;

  // do stuff ...
}());
```


Node Installation
===

```bash
npm install --save forEachAsync@3.x
```

API
===

**`forEachAsync(array, callback[, thisArg])`**

Parameters

  * `array` Array of elements to iterate over
  * `callback` Function to execute for each element, takes 4 arguments
    * `next` the function to call when the current element has been dealt with
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

Please don't `break` stuff; use `someAsync` or `everyAsync` instead.
