#<< app/app_view

class app.views.main.Home extends app.AppView
	
	events:
		'a mouseover' : 'fadeHover'
		'a mouseout' : 'fadeHover'

	fadeHover : =>
		$item = $( event.currentTarget )

		if event.type is 'mouseover'
			$item.stop().animate
				opacity: 1
			, 500
		else
			$item.stop().animate
				opacity: .5
			, 250
