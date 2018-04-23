import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import Welcome from './Welcome.jsx';
import { Redirect, Route, Link, Switch } from 'react-router-dom';

import QuestionForm from './QuestionForm.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.register = this.register.bind(this)
  }

  handleClick() {
    // console.log(this.username.value, this.password.value, this.email.value)
    this.register(this.username.value, this.password.value, this.email.value)
  }

  register(username, password, email) {
    this.props.handleRegister(username, password, email, () => {
      this.props.history.push('/welcome');
    })
  }

  render() {
    //renders a component based off the isLoggedIn T/F
    if (this.props.isLoggedIn) {
      return <Redirect to='/questions'/>
    }
    return (
      <div className="home">
        <h1>Date Night</h1>
        <div className="home-container">
          <div className="home-container-signUp">
            <h2>Sign Up Here</h2>
            <div>
            Username  <input ref={username => this.username = username}></input>
            <br/>
            Password  <input ref={password => this.password = password}></input>
            <br/>
            Email  <input ref={email => this.email = email}></input>
            <br/>
            <br/>
            <RaisedButton label="Sign Up!" onClick={this.handleClick}/>

          </div>

            <br/>
            <br/>
            <br/>

            <Link to='/questions'><RaisedButton label="Just Take Me to the Questions..." /></Link>
          </div>
          <div className="home-container-goQ">
          </div>
        </div>

      </div>
    )
  }
}

export default SignUp;
