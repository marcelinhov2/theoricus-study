#<< app/app_view
#<< app/utils/utils
#<< app/components/visual_identity

class app.views.main.Home extends app.AppView

  constructor : ->
    super

    do app.utils.Utils.showLoad
  
  after_render : =>
  	queue = new app.utils.Queue [ app.utils.Utils.hideLoad, app.components.VisualIdentity.show ]
  	do queue.start