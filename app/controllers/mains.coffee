#<< app/app_controller
#<< app/models/main

class app.controllers.Mains extends app.AppController
	{Main} = app.models

	index: ->
		data = { 
			name  : 'Marcelo Andrade Front-End Developer'
			socials : [
				{
					name : 'Linkedin'
					klass  : 'linkedin'
					url    : 'http://www.linkedin.com/in/meandrade'
				},
				{
					name  : 'Twitter'
					klass : 'twitter'
					url   : 'http://twitter.com/marcelinhov2'
				},
				{
					name  : 'Facebook'
					klass : 'facebook'
					url   : 'http://www.facebook.com/marcelinhov2'
				},
				{
					name  : 'Email'
					klass : 'email'
					url   : 'mailto:marceloandrade150@gmail.com?subject=Contato via Portfólio'
				},
				{
					name  : 'PDF'
					klass : 'pdf'
					url   : '#'
				}
			]
		}

		return view = @render "main/home", data