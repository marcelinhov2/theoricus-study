#<< app/app_view
#<< app/components/visual_identity

class app.views.main.Home extends app.AppView
	
	after_render : =>
		@VisualIdentity = new app.components.VisualIdentity