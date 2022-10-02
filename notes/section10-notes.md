# Section 10: Deploying our app to a server
99: Getting the React application ready for deployment
- Runs the npm command to build the react source

100: Building the production ready React application
- Here is where the code is built and pushed to dist 
  
101: Getting the Go project ready for deployment
- Does the same thing with the Go project
  
102: Building the Go back end for our remote server
- Runs the build here
  
103: Copying files to the server
- zipped frontend build folder and copied the binary from previous lesson
- used `scp` to server as a zipped file
  
104: Setting up the production database
- assume's postgres is on same machine 
- `pg_dump --no-owner go_movies > gm.sql` <- dumps local database
  - copies to server
- connects to remote server
- created `go_movies` on remote server
- then ran `sudo -u postgres psql -d go_movies -f gm.sql` on the server

105: Setting up the web server
- will use Caddy https://caddyserver.com
  - uses letsencrypt automatically!!
- This is where he configures how the frontend and backend will be served
- you end up editing /etc/caddy/Caddyfile
- virtual hosts live in conf.d directory
- `sudo service caddy start` 
  
106: Running the Go back end with supervisor
- make sure backend server is always running
- `sudo apt install supervisor` 
- `cd /etc/supervisor` edit conf.d
- `sudo vi api.conf` <- this is where environment variables are set and the command for starting the server is set
- To get into and use supervisor
  - `sudo supervisorctl`
  - `supervisor> reread` <- rereads the config dir
  - `supervisor> update` <- add the new config
  - `supervisor> status` <- shows status