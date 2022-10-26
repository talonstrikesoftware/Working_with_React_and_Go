# Section 9: Adding GraphQ into the equation
Front-matter


88: What is GraphQL?
- advantages
  - allows not over-requesting
  - can get multiple stuff at one time
  - gives lots of control to the ui dev
- will use plain javascript

89: Setting up a schema and REST endpoint for GraphQL
- created graphql.go
- imported a new third party package
  - go get github.com/graphql-go/graphql
  - defined the schema and fields

90: Handling the GraphQL request
- Setup the code to actually do the graphql request

91: Implementing GraphQL requests for all movies
- Added a GraphQL component to list the movies and made the query from the client