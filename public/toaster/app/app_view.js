(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.AppView = (function(_super) {

    __extends(AppView, _super);

    function AppView() {
      this.hoverEffects = __bind(this.hoverEffects, this);
      return AppView.__super__.constructor.apply(this, arguments);
    }

    AppView.prototype.events = {
      'a.fadeHover mouseover': 'hoverEffects',
      'a.fadeHover mouseout': 'hoverEffects'
    };

    AppView.prototype.hoverEffects = function() {
      var $item;
      $item = $(event.currentTarget);
      if (event.type === 'mouseover') {
        return app.utils.Utils.fadeHover($item, 1, 250);
      } else {
        return app.utils.Utils.fadeHover($item, .3, 250);
      }
    };

    return AppView;

  })(theoricus.mvc.View);

}).call(this);
