#<< app/app_model

class app.models.Main extends app.AppModel
	
	@fields
		name: String
		socials: Array
	
	constructor:( @name, @socials )->