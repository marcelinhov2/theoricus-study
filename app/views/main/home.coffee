#<< app/app_view
#<< app/components/visual_identity

class app.views.main.Home extends app.AppView
	
	after_render : =>
		visual_identity = new app.components.VisualIdentity
		do visual_identity.showVisualIdentity