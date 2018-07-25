# Code Review


## Workflow

	- README
		- Description of App
		- Instructions for running locally
		- Link to Deployed version

	- Semantic Commits
		- 3 parts
			- Nature of commit (Fix, Feature, Test, Style, Refactor, etc)
			- Area of commit coverate (API, React, Auth, etc)
			- Present-tense description of what commit does (Replaced promises in GET route w/ Async Await)

## Routes
	
	- Good job vertical slicing!
	- Conventional Stati = GET 200, POST 201, DELETE 204
	- Before next slice, take a SEAT (Stop Everything and Test)
	- Think of leveraging router.params for eager loading
	- Good job + please continue to keep routes RESTful

		- GET products/:id
		VS GET products/shoyou
		- orders/:userid
		- NOT orders/users/:id
	- Have some conditional logic/err handling for empty/bad request

## Models

	- Consider refactoring CART to be a single Property on Order
	- Multiple levels of join tables => Bowl = Ingredient * category), Order => (Bowl, User)
	- Nice job avoiding Sequelize.ARRAY!  




