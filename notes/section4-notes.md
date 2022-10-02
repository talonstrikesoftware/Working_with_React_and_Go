# Section 4: Building the Front End

25: What are we going to create?
26: A note about React Router 6
- He will use React Router 5 because of breaking changes
27: Creating our front end application and introducing the React Router
- npx create-react-app go-movies
- deleted files he won't use
- imported bootstrap into index.html as a CDN
- 03:00 created simple container
- `npm start` runs it
- 06:50 - introduces react-router
- 13:30 - shows HashRouter
  - talks about why BrowserRouter leans on the webserver, and HashRouter stays on the client

28: Routing to a component
- How to use react-router's Link component to route to a component

29: Challenge: Route to components
- route to the Home and Admin components
  
30: Solution to Challenge
- Goes over his solution
- shows using the VS Code react extension to use a shortcut to create components - I don't use this
  
31: More about routing (and a bit about the React lifecycle)
- simulates getting a JSON file (inside componentDidMount) - will use useEffect
  
32: More about routing Part II
- works on nested routes
- reverted back to BrowserRouter
- shows a route like `/movies/:id` 
  
33: More about routing Part III
- Add a menu item to browse movies to demonstrate passing parameters
- uses `exact` on a route
- uses `useRouteMatch` from react-router (gives you path and url)
- 06:00 - shows creating a nested route 
  - uses render function to pull out props and pass them to a component
  
34: Displaying one movie
- allow to click a movie and show it's details
- used `component` attribute of Route
  - in the component used `props.match.params.id`

