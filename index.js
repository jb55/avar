
var EventEmitter = require('events').EventEmitter;

module.exports = AVar;

function AVar (async) {
  if (!(this instanceof AVar)) return new AVar(async);
  var self = this;
  this.data = null;
  this.fetched = false;
  this.emitter = new EventEmitter();

  async(function () {
    var xs = 1 <= arguments.length? [].slice.call(arguments, 0) : [];
    self.fetched = true;
    self.data = xs;
    self.emitter.emit('fetched', self.data)
  });
}

AVar.prototype.get = function(asker) {
  if (this.fetched) return asker.apply(null, self.data);
  this.emitter.on("fetched", function(args) {
    return asker.apply(null, args);
  });
}

