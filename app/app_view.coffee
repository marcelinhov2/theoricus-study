#<< app/utils/utils

class app.AppView extends theoricus.mvc.View
	
	events:
		'a.fadeHover mouseover' : 'hoverEffects'
		'a.fadeHover mouseout'  : 'hoverEffects'

	hoverEffects : =>
		$item = $( event.currentTarget )

		if event.type is 'mouseover'
			app.utils.Utils.fadeHover $item, 1, 250
		else
			app.utils.Utils.fadeHover $item, .3, 250