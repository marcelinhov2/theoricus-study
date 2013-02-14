(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.controllers.Jobs = (function(_super) {
    var Job, Posts;

    __extends(Jobs, _super);

    function Jobs() {
      return Jobs.__super__.constructor.apply(this, arguments);
    }

    Job = app.models.Job;

    Posts = app.models.Posts;

    Jobs.prototype.index = function() {
      var model, view;
      model = Posts.all();
      return view = this.render("job/index", model);
    };

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    		DEFAULT ACTION BEHAVIOR
    		Override it to take control and customize as you wish
    	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    */


    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    		EXAMPLES
    	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    */


    return Jobs;

  })(app.AppController);

}).call(this);
