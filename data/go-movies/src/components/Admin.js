import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Admin extends Component {
  state = { movies: [], isLoaded: false, error: null };

  componentDidMount() {
    fetch('http://localhost:4000/v1/movies')
      //      .then((response) => response.json())
      .then((response) => {
        console.log('Status code is', response.status);
        if (response.status !== 200) {
          let err = Error;
          err.message = 'Invalid response code: ' + response.status;
          this.setState({ error: err });
        }
        return response.json();
      })
      .then((json) => {
        this.setState(
          {
            movies: json.movies,
            isLoaded: true,
          },
          (error) => {
            this.setState({
              isLoading: true,
              error,
            });
          }
        );
      });
  }

  render() {
    const { movies, isLoaded, error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <Fragment>
          <h2>Manage Catalogue</h2>

          <div className='list-group'>
            {movies.map((m) => (
              <Link key={m.id} className='list-group-item list-group-item-action' to={`/admin/movie/${m.id}`}>
                {m.title}
              </Link>
            ))}
          </div>
        </Fragment>
      );
    }
  }
}