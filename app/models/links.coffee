#<< app/app_model

class app.models.Links extends app.AppModel
	@rest
		'all' : ['GET', 'http://localhost/portfolio/api/get_links/']