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

92: Adding a search endpoint
- changed graphql route to be simplier
- added a "search" graphql query to the backend `graphql.go` file

93: Implementing GraphQL requests for search on front end
- hooked in the search to the GraphQL.js component

94: Displaying one movie using GraphQL
95: Updating the front end
96: Modifying the back end to handle poster images
97: Updating the front end to display the poster image
98: Cleaning things up
