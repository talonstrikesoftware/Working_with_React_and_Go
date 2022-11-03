import React, { useState, Fragment } from 'react'
import Input from './form-components/Input';
import Alert from './ui-components/Alert';

const LoginFunc = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState([]);
  const [alert, setAlert] = useState({type: 'd-none', message: ''});

  const handleJWTChange = (jwt) => {
    props.handleJWTChange(jwt);
  }

  const hasError = (key) => {
    return errors.indexOf(key) !== -1;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "") {
      errors.push("email");
    }
    if (password === "") {
      errors.push("password");
    }
    setErrors(errors);
    if (errors.length > 0) {
      return false;
    }

    const data = new FormData(event.target);
    const payload = Object.fromEntries(data.entries());

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(payload),
    };

    fetch(`${process.env.REACT_APP_API_URL}/v1/signin`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setAlert({type: 'alert-danger', message: 'Invalid Login'})
        } else {
          handleJWTChange(Object.values(data)[0]);
          window.localStorage.setItem("jwt", JSON.stringify(Object.values(data)[0]));
          props.history.push({
            pathname: "/admin"
          })
        }
      });
  }

  const handleEmail = (event)=> {
    setEmail(event.target.value);
  }

  const handlePassword = (event)=> {
    setPassword(event.target.value);
  }

  return (
          <Fragment>
        <h2>Login</h2>
        <hr />
        <Alert alertType={alert.type} alertMessage={alert.message} />
        <form className='pt-3' onSubmit={handleSubmit}>
          <Input
            title={'Email'}
            type={'type'}
            name={'email'}
            handleChange={handleEmail}
            className={hasError('email') ? 'is-invalid' : ''}
            errorDiv={hasError('email') ? 'text-danger' : 'd-none'}
            errorMsg={'Please enter a valid email address'}
          />
          <Input
            title={'Password'}
            type={'type'}
            name={'password'}
            handleChange={handlePassword}
            className={hasError('password') ? 'is-invalid' : ''}
            errorDiv={hasError('password') ? 'text-danger' : 'd-none'}
            errorMsg={'Please enter a valid password'}
          />
          <hr />
          <button className='btn btn-primary'>Login</button>
        </form>
      </Fragment>

  )


}

export default LoginFunc;