(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  app.utils.Queue = (function() {

    Queue.prototype.index = null;

    Queue.prototype.methods = null;

    function Queue(methods) {
      this.when_done = __bind(this.when_done, this);

      this.execute = __bind(this.execute, this);

      this.queue = __bind(this.queue, this);
      this.index = 0;
      this.methods = methods;
    }

    Queue.prototype.queue = function(after_all) {
      this.after_all = after_all;
      return this.execute();
    };

    Queue.prototype.execute = function() {
      if (this.index === this.methods.length && (this.after_all != null)) {
        return this.after_all();
      }
      if (this.methods[this.index]) {
        return this.methods[this.index](this.when_done);
      }
    };

    Queue.prototype.when_done = function() {
      this.index++;
      return this.execute();
    };

    return Queue;

  })();

}).call(this);
