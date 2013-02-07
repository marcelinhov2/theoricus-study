class app.AppModel extends theoricus.mvc.Model
  @_request=( method, url, data='' )->
    fetcher = new theoricus.mvc.lib.Fetcher

    req = $.ajax url:url, type: method, data: data, async: false

    req.done ( data )=>
      fetcher.loaded = true
      fetcher.records = @_instantiate data
      fetcher.onload?( fetcher.records )

    req.error ( error )=>
      fetcher.error = true
      if fetcher.onerror?
        fetcher.onerror error
      else
        throw error

    fetcher

  @_instantiate=( data )->
    Factory = theoricus.core.Factory
    classname = ("#{@}".match /function\s(\w+)/)[1]
    records = []

    $.map data, (value, key) ->
      obj = {}
      obj[key] = value

      model = (Factory.model classname, obj)
      records.push model

    _collection = records

    return if records.length is 1 then records[0] else records