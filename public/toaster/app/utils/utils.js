(function() {

  app.utils.Utils = (function() {

    function Utils() {}

    Utils.fadeHover = function(item, to, time) {
      return item.stop().animate({
        opacity: to
      }, time);
    };

    Utils.showLoad = function() {
      return $("body").append("<a id='loader'>Loading...</a>", function() {
        return $("#loader").fadeIn("slow");
      });
    };

    Utils.hideLoad = function() {
      return $("#loader").fadeOut("slow", function() {
        return $("body").remove("<a id='loader'>Loading...</a>");
      });
    };

    return Utils;

  }).call(this);

}).call(this);
