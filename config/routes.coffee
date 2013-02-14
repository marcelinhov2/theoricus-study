# MAIN
match "/main"
	to: "mains/index"
	at: null
	el: "body"
	
# HOME
match "/home"
	to: "mains/home"
	at: "/main"
	el: "#container"

# JOBS
match "/!/jobs"
	to: "jobs/index"
	at: null
	el: "#container"

# DEFAULT ROUTE
root "/home" 