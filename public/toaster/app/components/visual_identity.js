(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.components.VisualIdentity = (function(_super) {

    __extends(VisualIdentity, _super);

    VisualIdentity.prototype.el = '.visual_identity';

    function VisualIdentity() {
      this.animateVisualIdentity = __bind(this.animateVisualIdentity, this);

      this.showSocial = __bind(this.showSocial, this);

      this.showTitle = __bind(this.showTitle, this);
      this.Utils = new app.utils.Utils;
      this.title = $(this.el + ' h1');
      this.socials = $(this.el + ' ul li');
      this.animateVisualIdentity();
    }

    VisualIdentity.prototype.showTitle = function() {
      return this.title.fadeIn('slow');
    };

    VisualIdentity.prototype.showSocial = function() {
      var delay, i, item, link, _results;
      i = 0;
      _results = [];
      while (i < this.socials.length) {
        item = $(this.socials[i]);
        link = item.find("a");
        delay = 200 * i;
        item.delay(delay).fadeIn("slow");
        _results.push(i++);
      }
      return _results;
    };

    VisualIdentity.prototype.animateVisualIdentity = function() {
      this.showTitle();
      return this.showSocial();
    };

    return VisualIdentity;

  })(app.AppView);

}).call(this);
