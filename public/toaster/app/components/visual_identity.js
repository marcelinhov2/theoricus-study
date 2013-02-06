(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.components.VisualIdentity = (function(_super) {
    var hideSocial, hideTitle, showSocial, showTitle,
      _this = this;

    __extends(VisualIdentity, _super);

    function VisualIdentity() {
      return VisualIdentity.__super__.constructor.apply(this, arguments);
    }

    VisualIdentity.title = '.visual_identity h1';

    VisualIdentity.socials = '.visual_identity  ul li';

    showTitle = function(callback) {
      return $(VisualIdentity.title).fadeIn('slow', function() {
        if (callback != null) {
          return callback();
        }
      });
    };

    showSocial = function(callback) {
      return $(VisualIdentity.socials).each(function(i, item) {
        var delay, link;
        item = $(item);
        link = item.find("a");
        delay = 150 * i;
        return item.delay(delay).fadeIn("slow");
      }).promise().done(function() {
        if (callback != null) {
          return callback();
        }
      });
    };

    hideTitle = function(callback) {
      return $(VisualIdentity.title).fadeOut('slow', function() {
        if (callback != null) {
          return callback();
        }
      });
    };

    hideSocial = function(callback) {
      return $(VisualIdentity.socials).each(function(i, item) {
        var delay, link, reverse_index;
        reverse_index = (VisualIdentity.socials.length - 1) - i;
        item = $(VisualIdentity.socials[reverse_index]);
        link = item.find("a");
        delay = 150 * i;
        return item.delay(delay).fadeOut("slow");
      }).promise().done(function() {
        if (callback != null) {
          return callback();
        }
      });
    };

    VisualIdentity.show = function() {
      var showQueue;
      showQueue = new app.utils.Queue([showTitle, showSocial]);
      return showQueue.start();
    };

    VisualIdentity.hide = function() {
      var hideQueue;
      hideQueue = new app.utils.Queue([hideSocial, hideTitle]);
      return hideQueue.start();
    };

    return VisualIdentity;

  }).call(this, app.AppView);

}).call(this);
