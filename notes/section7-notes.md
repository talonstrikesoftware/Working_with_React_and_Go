# Section 7: Working with forms, React, and Go
Front-matter
- These will be our POST calls

59: Building a form in React
- create a form to add or edit a movie - `EditMovie.js`
  
60: Making our form a controlled component, and binding it to state
- have to use htmlFor for for in html because of jsx constraint
- Here the form elements is bound to state so the internal state is updated as stuff is typed in

61: Making form inputs reusable components and a Challenge
- made a POJS file for a stand alone input
- Challenge is to do the same thing for a textarea

62: Solution to Challenge
- Showed his solution
  
63: Creating a reusable select component
- Made the common select component
  
64: Pre-populating the form with an existing movie
- Modify the code to prepopulate the form with an existing movie
  
65: Sending data to the REST back end
- start working on posting info back to back end
- at this point the endpoint is created and the form submits, but nothing is done with it yet
  
66: Client side form validation
- will do one input using Boostrap's logic
- creates an array of errors and puts in keys for the form values that are in error
    
67: Receiving data on the REST back end
- to start with we have problems parsing the time parameters
- chose not to do a decoder on the back end, instead defined a new type in the handlers `MoviePayload`  
  - We do this to read the JSON payload into this struct 


68: Providing feedback with a reusable alert
- add ability to do a modify instead of insert (when editing a movie)
- added a custom alert component `Alert.js`
  
69: Editing an existing movie
- Here the necessary code is written to do an update of a movie
  
70: Deleting a movie
- Add abiilty to delete a movie
71: Adding a confirmation step when deleting movies
72: Implementing delete on the back end
73: Connecting our delete button to the REST back end
74: Challenge: displaying list of movies to edit
75: Solution to challenge