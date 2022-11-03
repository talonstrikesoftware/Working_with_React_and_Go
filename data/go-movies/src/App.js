import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Movies from './components/Movies';
import Admin from './components/Admin';
import AdminFunc from './components/AdminFunc';
import Home from './components/Home';
import OneMovie from './components/OneMovie';
import OneMovieFunc from './components/OneMovieFunc';
import Genres from './components/Genres';
import OneGenre from './components/OneGenre';
import OneGenreFunc from './components/OneGenreFunc';
import EditMovie from './components/EditMovie';
import EditMovieFunc from './components/EditMovieFunc';
import Login from './components/Login';
import LoginFunc from './components/LoginFunc';
import GraphQL from './components/GraphQL';
import OneMovieGraphQL from './components/OneMovieGraphQL';
import MoviesFunc from './components/MoviesFunc';
import GenresFunc from './components/GenresFunc';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: '',
    };
    this.handleJWTChange(this.handleJWTChange.bind(this));
  }

  componentDidMount() {
    let t = window.localStorage.getItem("jwt");
    if (t) {
      if (this.state.jwt === "") {
        this.setState({jwt: JSON.parse(t)});
      }
    }
  }
  handleJWTChange = (jwt) => {
    this.setState({ jwt: jwt });
  };

  logout = () => {
    this.setState({ jwt: '' });
    // clear local storage as well
    window.localStorage.removeItem("jwt");
  };

  render() {
    return (
      <Router>
        <div className='container'>
          <div className='row'>
            <div className='col mt-3'>
              <h1 className='mt-3'>Go Watch a Movie!</h1>
            </div>
            <div className='col mt-3 text-end'>
              {this.state.jwt === '' ? (
                <Link to='/login'>Login</Link>
              ) : (
                <Link to='logout' onClick={this.logout}>
                  Logout
                </Link>
              )}
            </div>
            <hr className='mb-3'></hr>
          </div>

          <div className='row'>
            <div className='col-md-2'>
              <nav>
                <ul className='list-group'>
                  <li className='list-group-item'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='list-group-item'>
                    <Link to='/movies'>Movies</Link>
                  </li>
                  <li className='list-group-item'>
                    <Link to='/genres'>Genres</Link>
                  </li>
                  {this.state.jwt !== '' && (
                    <Fragment>
                      <li className='list-group-item'>
                        <Link to='/admin/movie/0'>Add movie</Link>
                      </li>
                      <li className='list-group-item'>
                        <Link to='/admin'>Manage Catalogue</Link>
                      </li>
                    </Fragment>
                  )}
                  <li className='list-group-item'>
                    <Link to='/graphql'>GraphQL</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className='col-md-10'>
              <Switch>
                <Route path='/movies/:id' component={OneMovieFunc} />
                <Route path='/moviesgraphql/:id' component={OneMovieGraphQL} />

                <Route path='/movies'>
                  <MoviesFunc />
                </Route>
                <Route path='/genre/:id' component={OneGenreFunc} />

                <Route exact path='/login' component={(props) => <LoginFunc {...props} handleJWTChange={this.handleJWTChange} />} />
                <Route exact path='/genres'>
                  <GenresFunc />
                </Route>
                <Route exact path='/graphql'>
                  <GraphQL />
                </Route>

                <Route path='/admin/movie/:id' component={(props) => <EditMovieFunc {...props} jwt={this.state.jwt} />} />
                <Route path='/admin' component={(props) => <AdminFunc {...props} jwt={this.state.jwt} />} />
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
