(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.views.main.Home = (function(_super) {

    __extends(Home, _super);

    function Home() {
      return Home.__super__.constructor.apply(this, arguments);
    }

    return Home;

  })(app.AppView);

}).call(this);
