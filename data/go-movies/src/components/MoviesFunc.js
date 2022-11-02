import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

const MoviesFunc = (props) => {

  const [movies, setMovies] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/v1/movies`)
      .then((response) => {
        console.log('Status code is', response.status);
        if (response.status !== 200) {
          setErrors('Invalid response code: ' + response.status);
        }
        else {
          setErrors(null);
        }
        return response.json();
      })
      .then((json) => {
        setMovies(json.movies);
      });
  },[]);

  if (errors !== null) {
    return (
            <div>Error: {error.message}</div>
    )
  }
  else {
      return (
        <Fragment>
          <h2>Choose a movie</h2>

          <div className='list-group'>
            {movies.map((m) => (
              <Link key={m.id} className='list-group-item list-group-item-action' to={`/movies/${m.id}`}>
                {m.title}
              </Link>
            ))}
          </div>
        </Fragment>
      );
  }
}

export default MoviesFunc;
