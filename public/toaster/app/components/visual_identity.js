(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.components.VisualIdentity = (function(_super) {

    __extends(VisualIdentity, _super);

    VisualIdentity.prototype.el = '.visual_identity';

    function VisualIdentity() {
      this.hideVisualIdentity = __bind(this.hideVisualIdentity, this);

      this.showVisualIdentity = __bind(this.showVisualIdentity, this);

      this.hideSocial = __bind(this.hideSocial, this);

      this.hideTitle = __bind(this.hideTitle, this);

      this.showSocial = __bind(this.showSocial, this);

      this.showTitle = __bind(this.showTitle, this);
      this.title = $(this.el + ' h1');
      this.socials = $(this.el + ' ul li');
    }

    VisualIdentity.prototype.showTitle = function(callback) {
      return this.title.fadeIn('slow', function() {
        if (callback != null) {
          return callback();
        }
      });
    };

    VisualIdentity.prototype.showSocial = function(callback) {
      var _this = this;
      return this.socials.each(function(i, item) {
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

    VisualIdentity.prototype.hideTitle = function(callback) {
      return this.title.fadeOut('slow', function() {
        if (callback != null) {
          return callback();
        }
      });
    };

    VisualIdentity.prototype.hideSocial = function(callback) {
      var _this = this;
      return this.socials.each(function(i, item) {
        var delay, link, reverse_index;
        reverse_index = (_this.socials.length - 1) - i;
        item = $(_this.socials[reverse_index]);
        link = item.find("a");
        delay = 150 * i;
        return item.delay(delay).fadeOut("slow");
      }).promise().done(function() {
        if (callback != null) {
          return callback();
        }
      });
    };

    VisualIdentity.prototype.showVisualIdentity = function() {
      var showQueue;
      showQueue = new app.utils.Queue([this.showTitle, this.showSocial]);
      return showQueue.start();
    };

    VisualIdentity.prototype.hideVisualIdentity = function() {
      var hideQueue;
      hideQueue = new app.utils.Queue([this.hideSocial, this.hideTitle]);
      return hideQueue.start();
    };

    return VisualIdentity;

  })(app.AppView);

}).call(this);
