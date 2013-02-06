#<< app/app_view
#<< app/utils/utils
#<< app/components/visual_identity

class app.views.main.Home extends app.AppView

  constructor : ->
    super
    do app.utils.Utils.showLoad
  
  after_render : =>
    do app.utils.Utils.hideLoad
    do app.components.VisualIdentity.show