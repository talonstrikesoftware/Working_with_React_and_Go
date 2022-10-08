# Section 5: Setting up our Go Back end as a REST API
35: Installing the necessary software
- https://go.dev/ 
- installs vscode tools

36: Setting up the Go project
- source-code-setting-up-app.zip
- unzipped this into `data` directory
- walks over the code
- start app `go run cmd/api/main.go` 
- localhost:4000/status

37: Installing a router and creating handlers
- https://github.com/julienschmidt/httprouter 
  - only listens for explicit routes, 
- `go get github.com/julienschmidt/httprouter` 
- created `routes.go` and `statusHandler.go` 
- `go run cmd/api/*.go` 
- hit: `localhost:4000/status`
  
38: Models
- created the `models` directory and the three models objects: `Movie`, `Genre`, `MovieGenre`


39: Setting up a simple API router
- set up api call for `getOneMovie` and `getAllMovies`

40: Improved error handling
- set up in `utilities.go` ability to return an error message as json

41: Creating the database
- will use `go_movies.sql` to seed the database
- start database client (postico)
- create database `go_movies`
- `psql -d go_movies -f go_movies.sql`

42: Creating our connection pool and connecting to the database
- add driver
  - `go get -u github.com/lib/pq@v1.10.0` 
- added imports to main.go
- updated config var
- added func to create the connection pool 
- connection string that worked is:
  - `postgres://admin:example@postgres/go_movies?sslmode=disable`

43: Database functions & a challenge
44: Solution to challenge
45: An aside: cleaning up our JSON feed
46: Getting all movies as JSON
47: Next Steps