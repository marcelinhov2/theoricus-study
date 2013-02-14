#<< app/app_model

class app.models.Posts extends app.AppModel
	@rest
		'all' : ['GET', 'http://localhost/portfolio/api/get_recent_posts/']