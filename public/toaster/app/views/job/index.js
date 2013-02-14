(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.views.job.Index = (function(_super) {

    __extends(Index, _super);

    function Index() {
      this.after_render = __bind(this.after_render, this);

      this.before_render = __bind(this.before_render, this);
      return Index.__super__.constructor.apply(this, arguments);
    }

    Index.prototype.before_render = function() {
      return app.utils.Utils.showLoad();
    };

    Index.prototype.after_render = function() {
      return console.log(this.data);
    };

    return Index;

  })(app.AppView);

}).call(this);
