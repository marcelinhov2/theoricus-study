(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.views.job.Index = (function(_super) {

    __extends(Index, _super);

    function Index() {
      Index.__super__.constructor.apply(this, arguments);
      app.utils.Utils.showLoad();
    }

    return Index;

  })(app.AppView);

}).call(this);
