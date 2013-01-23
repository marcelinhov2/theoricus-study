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

	queue : (methods) =>
		i = 0

		while i < methods.length
			method = methods[i]

			do method

			$(window).on 'finishAnimation', ->
				i++