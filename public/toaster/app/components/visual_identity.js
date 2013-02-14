(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.components.VisualIdentity = (function(_super) {
    var hideSocial, hideTitle, showGetIn, showSocial, showTitle,
      _this = this;

    __extends(VisualIdentity, _super);

    function VisualIdentity() {
      return VisualIdentity.__super__.constructor.apply(this, arguments);
    }

    VisualIdentity.title = '.visual_identity h1';

    VisualIdentity.socials = '.visual_identity  ul li a';

    VisualIdentity.getIn = '.visual_identity  .getIn a';

    showTitle = function(callback) {
      var time;
      time = 0.8;
      return TweenLite.to($(VisualIdentity.title), time, {
        css: {
          opacity: 1,
          top: 0,
          left: 0,
          display: 'block'
        },
        ease: Back.easeOut,
        onComplete: callback != null ? callback : void 0
      });
    };

    showSocial = function(callback) {
      var delay, millisecounds, t, time;
      delay = 0;
      time = 0.5;
      $(VisualIdentity.socials).each(function(i, item) {
        item = $(item);
        delay += .20;
        time += .05;
        return TweenLite.to(item, time, {
          css: {
            opacity: 0.3,
            top: 0,
            left: 0,
            display: 'block'
          },
          delay: delay,
          ease: Back.easeOut.config(3)
        });
      });
      delay += .20;
      millisecounds = parseInt(delay * 1000);
      return t = setTimeout(function() {
        if (callback != null) {
          return callback();
        }
      }, millisecounds);
    };

    showGetIn = function() {
      var time;
      time = 0.8;
      return TweenLite.to($(VisualIdentity.getIn), time, {
        css: {
          opacity: .3,
          top: 0,
          left: 0,
          display: 'block'
        },
        ease: Back.easeOut
      });
    };

    hideTitle = function(callback) {
      var time;
      time = 0.5;
      return TweenLite.to($(VisualIdentity.title), time, {
        css: {
          opacity: 0,
          top: -20,
          left: 0,
          display: 'none'
        },
        ease: Back.easeOut,
        onComplete: callback != null ? callback : void 0
      });
    };

    hideSocial = function(callback) {
      var delay, time;
      delay = 0;
      time = 0.5;
      $($(VisualIdentity.socials).get().reverse()).each(function(i, item) {
        var tween;
        item = $(item);
        delay += .20;
        time += .05;
        return tween = TweenLite.to(item, time, {
          css: {
            opacity: 0,
            top: -20,
            left: 0,
            display: 'none'
          },
          delay: delay,
          ease: Back.easeOut.config(3)
        });
      });
      delay += .20;
      return setTimeout((function() {
        if (callback != null) {
          return callback();
        }
      }), delay * 1000);
    };

    VisualIdentity.show = function() {
      var showQueue;
      showQueue = new app.utils.Queue([showTitle, showSocial]);
      return showQueue.start(showGetIn);
    };

    VisualIdentity.hide = function() {
      var hideQueue;
      hideQueue = new app.utils.Queue([hideSocial, hideTitle]);
      return hideQueue.start();
    };

    return VisualIdentity;

  }).call(this, app.AppView);

}).call(this);
