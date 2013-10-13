
# avar

Asyncronous variables

## Installation

  Install with npm

    $ npm install avar

  or

    $ npm install jb55/avar
 

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

// future calls to get will also wait for async call or retrieve cached
// results instantly

## License

  MIT
