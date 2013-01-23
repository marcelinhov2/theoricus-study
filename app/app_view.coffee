#<< app/utils/utils

class app.AppView extends theoricus.mvc.View
	
	constructor : ->
		@Utils = new app.utils.Utils

	events:
		'a.fadeHover mouseover' : 'hoverEffects'
		'a.fadeHover mouseout'  : 'hoverEffects'

	hoverEffects : =>
		$item = $( event.currentTarget )

		if event.type is 'mouseover'
			@Utils.fadeHover $item, 1, 500
		else
			@Utils.fadeHover $item, .3, 250