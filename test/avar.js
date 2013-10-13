
var test = require('tape');
var avar = require('..');

function fetchOne(ret) {
  fetchOne.calls++;
  setTimeout(function () {
    ret(1);
  }, 25);
}
fetchOne.calls = 0;

test('works', function(t) {
  t.plan(4);

  var one = avar(fetchOne);

  one.get(function (v) {
    t.equal(fetchOne.calls, 1);
    t.equal(v, 1);
  });

  setTimeout(function () {
    one.get(function (v) {
      t.equal(fetchOne.calls, 1);
      t.equal(v, 1);
    });
  }, 50);
});
