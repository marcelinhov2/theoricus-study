(function() {

  app.utils.Utils = (function() {

    function Utils() {}

    Utils.fadeHover = function(item, to, time) {
      return item.stop().animate({
        opacity: to
      }, time);
    };

    Utils.showLoad = function() {
      $("body").append("<a id='loader'>Loading...</a>");
      return $("#loader").fadeIn("slow");
    };

    Utils.hideLoad = function() {
      return $("#loader").fadeOut("slow", function() {
        return $(this).remove();
      });
    };

    return Utils;

  }).call(this);

}).call(this);
