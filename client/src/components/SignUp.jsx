import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
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
    this.register(this.state.username, this.state.password, this.state.email)
  }

  register(username, password, email) {
    axios.post('/signup', {username: username, password: password, email: email})
      .then((registrationResponse) => {
        console.log("Registering user was a success")
      })
      .catch((err)=> {
        console.log("There was an error registering user")
      })
  }

  render() {
    return (
      <div>
        Username<input value={this.state.username}></input>
        <br></br>
        Password<input value={this.state.password}></input>
        <br></br>
        Email <input value={this.state.email}></input>
        <button onClick={this.handleClick}><Link to='/login'>Login here</Link></button>
      </div>
    )
  }
}

export default SignUp
