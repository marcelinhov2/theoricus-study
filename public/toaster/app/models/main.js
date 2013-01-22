(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.models.Main = (function(_super) {

    __extends(Main, _super);

    Main.fields({
      name: String,
      socials: Array
    });

    function Main(name, socials) {
      this.name = name;
      this.socials = socials;
    }

    return Main;

  })(app.AppModel);

}).call(this);
