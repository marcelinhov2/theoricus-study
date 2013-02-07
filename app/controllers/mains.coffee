#<< app/app_controller
#<< app/utils/utils
#<< app/models/main
#<< app/models/links

class app.controllers.Mains extends app.AppController
	{Main} = app.models
	{Links} = app.models

	home: ->
		do app.utils.Utils.showLoad
		
		model = do Links.all
		view  = @render "main/home", model