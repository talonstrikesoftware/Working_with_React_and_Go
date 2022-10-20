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