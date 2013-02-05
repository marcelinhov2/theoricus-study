class app.utils.Queue
    
  # position of the current callback being executed in the queue
  index : null

  # saves a list of methods to be executed sequentially
  methods : null

  constructor : (@methods) ->
    @index   = 0

  # array of methods to be executed
  # all the methods must receive a callback as parameter
  # and just execute the callback when all the jazz is done
  start : ( @after_all ) =>
    do @execute

  execute : =>
    if @index is @methods.length and @after_all?
      return @after_all()

    if @methods[@index]
      @methods[@index]( @when_done )

  when_done : =>
    @index++
    do @execute