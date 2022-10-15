import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class Genres extends Component {
  state = {
    genres: [],
    isLoaded: false,
    error: null,
  };

  componentDidMount() {
    fetch('http://localhost:4000/v1/genres')
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
            genres: json.genres,
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
    const { genres, isLoaded, error} = this.state;

    return (
      <Fragment>
        <h2>Genres</h2>
        <ul>
          { genres.map((m)=> {
            <li key={m.id}>
              <link to={`/genre/${m.id}`}>{m.genre_name}</link>
            </li>
          })}
        </ul>
      </Fragment>
    )
  }
}