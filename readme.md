# avar

Asyncronous variables

## Installation

  Install with npm

    $ npm install avar


## Example

```javascript
var avar = require('avar')

function query(done) {
  setTimeout(function() {
    done(null, 2);
  }, 1000);
}

// query is called is its resulting arguments are cached for future `get`s
var example = avar(query);

example.get(function (err, data) {
  // will get called when done, subsequent calls to get retrieve
  // cached arguments
});

setTimeout(function () {
  example.get(function (err, data) {
    // err and data were retrieved from cache
  });
}, 2000);
```

## License

  MIT
