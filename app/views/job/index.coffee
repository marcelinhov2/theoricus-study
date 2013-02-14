#<< app/app_view
#<< app/utils/utils
#<< app/components/visual_identity

class app.views.job.Index extends app.AppView

  before_render : =>
  	do app.utils.Utils.showLoad

  after_render : =>
  	console.log @data