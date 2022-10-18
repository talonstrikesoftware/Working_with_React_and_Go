import React, { Component} from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import "./EditMovie.css"
import Input from "./form-components/Input"
import Textarea from "./form-components/Textarea"
import Select from "./form-components/Select"

export default class EditMovie extends Component {
  state = {
    movie: {},
    isLoaded: false,
    error: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      movie: {
        id: 0,
        title: "",
        release_date: "",
        runtime: "",
        mpaa_rating: "",
        rating: "",
        description: "",
      },
      isLoaded: false,
      error: null,
      mpaaOptions: [
        {id: "G", value: "G"},
        {id: "PG", value: "PG"},
        {id: "PG13", value: "PG13"},
        {id: "R", value: "R"},
        {id: "NC17", value: "NC17"},
      ]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (evt) => {
    console.log("Form was submitted");
    evt.preventDefault();
  }

  handleChange = (evt) => {
    let value = evt.target.value;
    let name = evt.target.name;
    this.setState((prevState)=> ({
      ...prevState.movie,
      [name]: value,
    }))
  }
  componentDidMount() {

  }

  render() {
    let {movie} = this.state;

    return (
      <Fragment>
        <h2>Add/Edit Movie</h2>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <input type='hidden' name='id' id='id' value={movie.id} onChange={this.handleChange} />
          <Input title={'Title'} type={'text'} name={'title'} value={movie.title} handleChange={this.handleChange} />
          <Input title={'Release date'} type={'text'} name={'release_date'} value={movie.release_date} handleChange={this.handleChange} />
          <Input title={'Runtime'} type={'text'} name={'runtime'} value={movie.runtime} handleChange={this.handleChange} />
          <Select title={'MPAA Rating'} name={'mpaa_rating'} options={this.state.mpaaOptions} value={movie.mpaa_rating} handleChange={this.handleChange} placeholder={'Choose...'} />
          {/* <div className='mb-3'>
            <label htmlFor='mpaa_rating' className='form-label'>
              MPAA Rating
            </label>
            <select className='form-select' name='mpaa_rating' value={movie.mpaa_rating} onChange={this.handleChange}>
              <option className='form-select'>Choose...</option>
              <option className='form-select' value='G'>
                G
              </option>
              <option className='form-select' value='PG'>
                PG
              </option>
              <option className='form-select' value='PG13'>
                PG13
              </option>
              <option className='form-select' value='R'>
                R
              </option>
              <option className='form-select' value='NC17'>
                NC17
              </option>
            </select>
            <input type='text' className='form-control' id='runtime' name='runtime' value={movie.runtime} />
          </div> */}
          <Input title={'Rating'} type={'text'} name={'rating'} value={movie.rating} handleChange={this.handleChange} />
          <Textarea title={'Description'} name={'description'} rows={3} value={movie.description} handleChange={this.handleChange} />
          <hr />
          <button classname='btn btn-primary'>Save</button>
        </form>
        <div className='mt-3'>
          <pre>{JSON.stringify(this.state, null, 3)}</pre>
        </div>
      </Fragment>
    );
  }
}