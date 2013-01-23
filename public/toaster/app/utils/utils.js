(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  app.utils.Utils = (function() {

    function Utils() {
      this.queue = __bind(this.queue, this);

      this.hideLoad = __bind(this.hideLoad, this);

      this.showLoad = __bind(this.showLoad, this);

      this.fadeHover = __bind(this.fadeHover, this);

    }

    Utils.prototype.fadeHover = function(item, to, time) {
      return item.stop().animate({
        opacity: to
      }, time);
    };

    Utils.prototype.showLoad = function() {
      return $("body").append("<a id='loader'>Loading...</a>", function() {
        return $("#loader").fadeIn("slow");
      });
    };

    Utils.prototype.hideLoad = function() {
      return $("#loader").fadeOut("slow", function() {
        return $("body").remove("<a id='loader'>Loading...</a>");
      });
    };

    Utils.prototype.queue = function(start) {
      var promise, rest;
      rest = [].splice.call(arguments_, 1);
      promise = $.Deferred();
      if (start) {
        $.when(start()).then(function() {});
        return queue.apply(window, rest);
      } else {
        promise.resolve();
        return promise;
      }
    };

    return Utils;

  })();

}).call(this);
