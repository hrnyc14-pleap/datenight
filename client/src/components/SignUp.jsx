import React from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom';
import Welcome from './Welcome.jsx';
import QuestionForm from './QuestionForm.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class SignUp extends React.Component{
  constructor(props) {
    super(props)
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
    axios.post('/signup', {username: username, password: password, email: email})
      .then((registrationResponse) => {
        // console.log("Registering user was a success", registrationResponse)
        this.props.history.push('/welcome');
      })
      .catch((err)=> {
        console.log(err);
        console.log("There was an error registering user")
      })
      .then(() => {
        console.log("HIII CAUGHT")
      })
  }

  render() {
    return (
      <div>
        Username<input ref={username => this.username = username}></input>
        <br/>
        Password<input ref={password => this.password = password}></input>
        <br/>
        Email <input ref={email => this.email = email}></input>
        <br/>
        <br/>
        <RaisedButton label="Sign Up!" onClick={this.handleClick}/>

      </div>
    )
  }
}
export default SignUp
