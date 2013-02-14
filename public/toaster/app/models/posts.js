(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.models.Posts = (function(_super) {

    __extends(Posts, _super);

    function Posts() {
      return Posts.__super__.constructor.apply(this, arguments);
    }

    Posts.rest({
      'all': ['GET', 'http://localhost/portfolio/api/get_recent_posts/']
    });

    return Posts;

  })(app.AppModel);

}).call(this);
