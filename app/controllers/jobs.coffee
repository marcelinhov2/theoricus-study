#<< app/app_controller
#<< app/models/job
#<< app/models/posts

class app.controllers.Jobs extends app.AppController

	{Job}   = app.models
	{Posts} = app.models

	index: ->
		model = do Posts.all
		view  = @render "job/index", model

	### ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		DEFAULT ACTION BEHAVIOR
		Override it to take control and customize as you wish
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ###

	# <action-name>:()->
	# 	if Job.all?
	# 		@render "jobs/<action-name>", Job.all()
	# 	else
	# 		@render "jobs/<action-name>", null

	### ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		EXAMPLES
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ###

	# list:()->
	# 	@render "jobs/list", Job.all()

	# create:()->
	# 	@render "jobs/create", null