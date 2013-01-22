(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.controllers.Mains = (function(_super) {
    var Main;

    __extends(Mains, _super);

    function Mains() {
      return Mains.__super__.constructor.apply(this, arguments);
    }

    Main = app.models.Main;

    Mains.prototype.home = function() {
      var model, name, socials, view;
      socials = [
        {
          name: 'Linkedin',
          klass: 'linkedin',
          url: 'http://www.linkedin.com/in/meandrade'
        }, {
          name: 'Twitter',
          klass: 'twitter',
          url: 'http://twitter.com/marcelinhov2'
        }, {
          name: 'Facebook',
          klass: 'facebook',
          url: 'http://www.facebook.com/marcelinhov2'
        }, {
          name: 'Email',
          klass: 'email',
          url: 'mailto:marceloandrade150@gmail.com?subject=Contato via Portfólio'
        }, {
          name: 'PDF',
          klass: 'pdf',
          url: '#'
        }
      ];
      name = 'Marcelo Andrade Front-End Developer';
      model = new Main(name, socials);
      return view = this.render("main/home", model);
    };

    return Mains;

  })(app.AppController);

}).call(this);