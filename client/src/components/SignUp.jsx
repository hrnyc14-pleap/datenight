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
    // console.log(this.username.value, this.password.value, this.email.value)
    this.register(this.username.value, this.password.value, this.email.value)
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
        Username<input ref={username => this.username = username}></input>
        <br></br>
        Password<input ref={password => this.password = password}></input>
        <br></br>
        Email <input ref={email => this.email = email}></input>
        <button onClick={this.handleClick}><Link to='/login'>Sign Up!</Link></button>

      </div>
    )
  }
}
export default SignUp
