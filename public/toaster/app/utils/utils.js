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

    Utils.prototype.queue = function(methods) {
      var i, method, _results;
      i = 0;
      _results = [];
      while (i < methods.length) {
        method = methods[i];
        method();
        _results.push($(window).on('finishAnimation', function() {
          return i++;
        }));
      }
      return _results;
    };

    return Utils;

  })();

}).call(this);
