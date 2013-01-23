class app.utils.Utils

	fadeHover : (item, to, time) =>
		item.stop().animate
			opacity: to
		, time

	showLoad : =>
		$("body").append "<a id='loader'>Loading...</a>", ->
			$("#loader").fadeIn "slow"

	hideLoad : =>
		$("#loader").fadeOut "slow", ->
			$("body").remove "<a id='loader'>Loading...</a>"

	queue : (start) =>
		rest = [].splice.call(arguments_, 1)
		promise = $.Deferred()
		
		if start
			$.when(start()).then ->
			queue.apply window, rest
		else
			promise.resolve()
			promise