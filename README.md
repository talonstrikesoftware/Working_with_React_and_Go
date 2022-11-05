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
  ```bash
  export GO_MOVIES_JWT='2dce505d96a53c5768052ee90f3df2055657518dad489160df9913f66042e160'
  go run ./cmd/api
  ```

### client startup
- in container
  ```bash
    export NODE_OPTIONS=--openssl-legacy-provider
    export REACT_APP_API_URL='http://localhost:4000'
    cd go-movies
    npm start # localhost:3000
  ```

#### Bookings
This is the bookings and reservations project

- Built in Go version 1.18
- Uses the [chi router](https://github.com/go-chi/chi)
- Uses [alex edwards SCS](https://github.com/alexedwards/scs/v2) session management
- Uses [nosurf](https://github.com/justinas/nosurf)
