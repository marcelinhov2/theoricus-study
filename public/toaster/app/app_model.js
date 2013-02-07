(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app.AppModel = (function(_super) {

    __extends(AppModel, _super);

    function AppModel() {
      return AppModel.__super__.constructor.apply(this, arguments);
    }

    AppModel._request = function(method, url, data) {
      var fetcher, req,
        _this = this;
      if (data == null) {
        data = '';
      }
      fetcher = new theoricus.mvc.lib.Fetcher;
      req = $.ajax({
        url: url,
        type: method,
        data: data,
        async: false
      });
      req.done(function(data) {
        fetcher.loaded = true;
        fetcher.records = _this._instantiate(data);
        return typeof fetcher.onload === "function" ? fetcher.onload(fetcher.records) : void 0;
      });
      req.error(function(error) {
        fetcher.error = true;
        if (fetcher.onerror != null) {
          return fetcher.onerror(error);
        } else {
          throw error;
        }
      });
      return fetcher;
    };

    AppModel._instantiate = function(data) {
      var Factory, classname, model, obj, records, _collection;
      Factory = theoricus.core.Factory;
      classname = (("" + this).match(/function\s(\w+)/))[1];
      records = [];
      obj = {};
      $.map(data, function(value, key) {
        return obj[key] = value;
      });
      model = Factory.model(classname, obj);
      records.push(model);
      _collection = records;
      if (records.length === 1) {
        return records[0];
      } else {
        return records;
      }
    };

    return AppModel;

  })(theoricus.mvc.Model);

}).call(this);
