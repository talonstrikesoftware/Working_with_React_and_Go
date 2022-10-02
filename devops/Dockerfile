FROM golang

LABEL maintainer="redwolf89@gmail.com"

# basics
RUN apt-get update -yqq
RUN apt-get install -yqq --no-install-recommends build-essential vim 

# Node 
RUN apt install -y curl 
RUN su -c 'curl -fsSL https://deb.nodesource.com/setup_18.x | bash -' 
RUN su -c 'apt update'
RUN su -c 'apt install -y nodejs'
# RUN apt install -y nodejs
# RUN apt-get install -yqq --install-suggests npm --fix-missing

# Webpack
#RUN npm install --save-dev webpack webpack-dev-server

# Nodemon
# RUN npm i -g nodemon

# install node 
# RUN apt-get install npm

# postgres tools
# RUN apt-get install -yqq --no-install-recommends libpq-dev postgresql-client-9.6 --fix-missing --no-install-recommends 

# Go tools
RUN go install -v golang.org/x/tools/gopls@latest
RUN go install honnef.co/go/tools/cmd/staticcheck@latest

# yarn
RUN corepack enable 

# RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -\
#     && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
#     && apt-get update \
#     && apt-get install -y yarn

# Define an environment variable we will use in the COPY command - this is passed in via the args from docker-compose
#ARG project_dir

WORKDIR /usr/src/app

EXPOSE 8000
EXPOSE 8080
EXPOSE 3000
EXPOSE 4000

# Start server (Exec form)
#ENTRYPOINT ["./docker-entrypoint.sh"]
#CMD ["npm", "start"]

# Launch a shell
ENTRYPOINT ["/bin/bash"]
