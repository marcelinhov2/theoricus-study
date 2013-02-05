(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.views.main.Home = (function(_super) {

    __extends(Home, _super);

    function Home() {
      this.after_render = __bind(this.after_render, this);
      return Home.__super__.constructor.apply(this, arguments);
    }

    Home.prototype.after_render = function() {
      var visual_identity;
      visual_identity = new app.components.VisualIdentity;
      return visual_identity.showVisualIdentity();
    };

    return Home;

  })(app.AppView);

}).call(this);
