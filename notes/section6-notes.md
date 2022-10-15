# Section 6: Connecting to our REST API
Front-matter


48: Setting up CORS middleware
- CORS stops running client on 3000 and backend on 4000 so must fix this
- To do this create a `middleware.go` file and intercept the Response and add a header for "Access-Control-Allow-Origin" of "*"

49: Getting the list of movies
- connect front end with back end
- Since code is class based I have a choice, I can either keep following the tutorial and keep the code class based or start the conversion
  - Decided to stay with class based and I will convert later.
- Here we load up the movies

50: Checking for errors
- Simulate an network error by changing the url to be something no existent
  
51: Displaying one movie
- Implement showing a single movie retrieved from the api
  
52: Getting started with Movies by Genre
- Code cleanup/refactoring
  - removed Categories.js - won't be needed
  - Categories will now be called Genres
  - Created `Genres.js` instead

53: Getting Genres from back end
- now setup the api route for extracting genres from database
- At this point can retrieve genres from database and return as json 

54: Displaying the list of Genres
- Update client to hook to api and display list of genres 
  
55: Getting movies by Genre
- Added a genre parameter to `movies-db.All` which allows to get movies by a genre
  
56: Displaying movies by Genre
57: Showing Genre name - an alternative to lifting state
58: Code clean up