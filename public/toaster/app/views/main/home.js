(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.views.main.Home = (function(_super) {

    __extends(Home, _super);

    function Home() {
      this.fadeHover = __bind(this.fadeHover, this);
      return Home.__super__.constructor.apply(this, arguments);
    }

    Home.prototype.events = {
      'a mouseover': 'fadeHover',
      'a mouseout': 'fadeHover'
    };

    Home.prototype.fadeHover = function() {
      var $item;
      $item = $(event.currentTarget);
      if (event.type === 'mouseover') {
        return $item.stop().animate({
          opacity: 1
        }, 500);
      } else {
        return $item.stop().animate({
          opacity: .5
        }, 250);
      }
    };

    return Home;

  })(app.AppView);

}).call(this);
