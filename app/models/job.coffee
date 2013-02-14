#<< app/app_model

class app.models.Job extends app.AppModel

	### ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		MODEL PROPERTIES
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ###

	# @fields
	# 	'id'   : Number
	# 	'name' : String
	# 	'age'  : Number



	### ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		RESTFULL JSON SPECIFICATION
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ###

	# @rest
	# 	'all'    : ['GET', '/jobs.json']
	# 	'create' : ['POST','/jobs.json']
	# 	'read'   : ['GET', '/jobs/:id.json']
	# 	'update' : ['PUT', '/jobs/:id.json']
	# 	'delete' : ['DELETE', '/jobs/:id.json']