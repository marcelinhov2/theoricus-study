class app.utils.Utils

	@fadeHover : (item, to, time) =>
		item.stop().animate
			opacity: to
		, time

	@showLoad : =>
		$("body").append "<a id='loader'>Loading...</a>"
		$("#loader").fadeIn "slow"

	@hideLoad : =>
		$("#loader").fadeOut "slow", ->
			do $(@).remove