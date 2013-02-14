(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.controllers.Mains = (function(_super) {
    var Links, Main;

    __extends(Mains, _super);

    function Mains() {
      return Mains.__super__.constructor.apply(this, arguments);
    }

    Main = app.models.Main;

    Links = app.models.Links;

    Mains.prototype.home = function() {
      var model, view;
      model = Links.all();
      return view = this.render("main/home", model);
    };

    return Mains;

  })(app.AppController);

}).call(this);
