(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.App = (function(_super) {

    __extends(App, _super);

    function App() {
      App.__super__.constructor.call(this);
      this.start();
    }

    return App;

  })(theoricus.Theoricus);

  new app.App();

}).call(this);
