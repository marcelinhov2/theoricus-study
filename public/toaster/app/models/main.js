(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.models.Main = (function(_super) {

    __extends(Main, _super);

    Main.fields({
      name: String,
      data: Array
    });

    function Main(name, data) {
      this.name = name;
      this.data = data;
    }

    return Main;

  })(app.AppModel);

}).call(this);
