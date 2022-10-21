# Section 8: Securing Routes in our REST API
Front-matter


76: Generating JSON Web Tokens on the back end
- https://en.wikipedia.org/wiki/JSON_Web_Token 
- Token has a:
  - Header
  - Payload
  - Signature
- Install package 
  - go get github.com/pascaldekloe/jwt
- Generate a password hash
  - https://go.dev/play/p/uKMMCzJWGsW 
- Another script to generate the JWT secret
  - https://go.dev/play/p/s8KlqJIOWej
- have to add the bcrypt library
  - go get golang.org/x/crypto/bcrypt


77: Changing App to a component, and setting up state
- Create a login screen
  - Want admin functions to be protected
  - hide admin items as well
- Converted App.js to a class
- Added a Login component

78: Getting the JSON Web Token from the back end
- work on the handleSubmit button in Login.js
  
79: Handling a successful login
- dealt with the successful else case of the fetch to handle when a JWT token comes in
- Note: login is me@here.com:password 
  
80: Adding middleware to check for a valid token
- Fixed a mistake at the end of Signin, need to cast the jwtBytes to a string
- have to add token to requests done in `middleware.go` checkToken
- shows how to apply middleware only to some routes (in `routes.go`)
  - simplest way is to install a package that allows chaining middleware: `go get github.com/justinas/alice` 

81: Protecting the route on our front end
- send the header from the front end to the back end, done on EditMovie.js
  - we have to send an appropriate web token
  
82: Adding redirects for protected components
- Deal with a redirect so user can't save url when they are logged in and access the protected page when they are logged out

83: Challenge
- Manage Catalogue needs to be protected
- Protect the Delete button as well

84: Solution to Challenge
- Did the challenge 

85: Saving our token when the user leaves the site
- lose login when we got to a different site and come back in - goal is to let user stay logged in
- Done in Login.js by putting token into LocalStorage
  
86: Making better error responses from our back end
- right now we always return a HTTPStatusCode.BadRequest when errors occur - will clean this up
- to fix this added a third parameter to utilities.go `errorJSON` - called status
  - Then updated middleware.go to pass in the correct code when desired
  
87: Adding images
