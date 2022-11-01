# Section 10: Deploying our app to a server
99: Getting the React application ready for deployment
- Runs the npm command to build the react source
- CRA has a section on environment variables
  - created REACT_APP_API_URL: `export REACT_APP_API='http://localhost:4000'`
  - then can use `${process.env.REACT_APP_API_URL}`

100: Building the production ready React application
- Here is where the code is built and pushed to dist 
- environment variables are substituted at build time so before you build you have to adjust the exported variable to what the production server needs
- `npm run build`
- next compress the `dist` directory (zip or tar)
  
101: Getting the Go project ready for deployment
- Does the same thing with the Go project
- have to not encode the jwt secret into your code and rather pull it from the environment
  - `cfg.jwt.secret = os.Getenv("GO_MOVIES_JWT")`
  - `export GO_MOVIES_JWT='2dce505d96a53c5768052ee90f3df2055657518dad489160df9913f66042e160'`
- 
  
102: Building the Go back end for our remote server
- Runs the build here
  - in project root `env GOOS=linux GOARCH=amd64 go build -o gomovies ./cmd/api`
  - This builds a single binary
  
103: Copying files to the server
- zipped frontend `build` folder and copied the binary from previous lesson
- copied the `gomovies` binary from the previous lesson into the same folder
  - should have `build.zip` and `gomovies` 
- used `scp` to copy two files to his server
  
104: Setting up the production database
- assume's postgres is on same machine 
- `pg_dump --no-owner go_movies > gm.sql` <- dumps local database (with no owner)
  - copies to server
- connects to remote server via postico
- created `go_movies` on remote server
- then ran `sudo -u postgres psql -d go_movies -f gm.sql` on the server
- finally on the server does this:
  - `./gomovies -dsn="host=localhost port=5432 user=postgres password=verysecret dbname=go_movies sslmode=disable"`

105: Setting up the web server
- will use `Caddy` web server written in Go - https://caddyserver.com
  - uses letsencrypt automatically!! and renews the automatically
- unzips the build.zip file
- then `mv build www.learn-code.ca` 
- `sudo mv www.learn-cod.ca /var/www/`
- `cd /var/www`
- `sudo mkdir api.learn-code.ca`
- `cd api.learn-code.ca`
- `sudo cp ~/gomovies .`
- This is where he configures how the frontend and backend will be served
- you end up editing /etc/caddy/Caddyfile - 04:40 goes over Caddyfile
- virtual hosts live in conf.d directory
  - `sudo vi www.learn-code.ca.conf` <- for the frontend
  - `sudo vi api.learn-code.ca.conf` <- for the backend
- `sudo service caddy start` 
  
106: Running the Go back end with supervisor
- makes sure backend server is always running
- `sudo apt install supervisor` 
- `cd /etc/supervisor` 
- `cd conf.d`
- `sudo vi api.conf` <- this is where environment variables are set and the command for starting the server is set
- To get into and use supervisor
  - `sudo supervisorctl`
  - `supervisor> reread` <- rereads the config dir
  - `supervisor> update` <- add the new config
  - `supervisor> status` <- shows status