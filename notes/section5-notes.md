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
39: Setting up a simple API router