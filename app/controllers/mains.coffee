#<< app/app_controller
#<< app/models/main
#<< app/models/links

class app.controllers.Mains extends app.AppController
	{Main} = app.models
	{Links} = app.models

	home: ->
		name  = 'Marcelo Andrade Front-End Developer'
		model = do Links.all
		console.log model
		view  = @render "main/home", model