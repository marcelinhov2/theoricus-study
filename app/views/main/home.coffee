#<< app/app_view
#<< app/components/visual_identity

class app.views.main.Home extends app.AppView
  
  after_render : =>
    do app.components.VisualIdentity.show