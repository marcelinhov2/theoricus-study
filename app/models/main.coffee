#<< app/app_model

class app.models.Main extends app.AppModel
	
	@fields
		name    : String
		data    : Array

	constructor:( @name, @data )->
