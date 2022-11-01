## {Project Name}
Purpose:
Date Created:

## Startup
### container startup
```bash
cd devops
docker compose build -no-cache
docker compose up -d
docker compose exec golang bash
```

### backend startup
- in container
- `/usr/src/app# export REACT_APP_API='http://localhost:4000'` 
- `/usr/src/app# go run ./cmd/api` 

### client startup
- in container
  ```bash
    export NODE_OPTIONS=--openssl-legacy-provider
    cd go-movies
    npm start # localhost:3000
  ```

#### Bookings
This is the bookings and reservations project

- Built in Go version 1.18
- Uses the [chi router](https://github.com/go-chi/chi)
- Uses [alex edwards SCS](https://github.com/alexedwards/scs/v2) session management
- Uses [nosurf](https://github.com/justinas/nosurf)
