(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.views.main.Home = (function(_super) {

    __extends(Home, _super);

    function Home() {
      this.after_render = __bind(this.after_render, this);

      this.before_render = __bind(this.before_render, this);
      return Home.__super__.constructor.apply(this, arguments);
    }

    Home.prototype.before_render = function() {
      return app.utils.Utils.showLoad();
    };

    Home.prototype.after_render = function() {
      var queue;
      queue = new app.utils.Queue([app.utils.Utils.hideLoad, app.components.VisualIdentity.show]);
      return queue.start();
    };

    return Home;

  })(app.AppView);

}).call(this);
