import React from 'react';
import Q1 from './Q1.jsx';
import { Route, Link } from 'react-router-dom';
import axios from 'axios'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.onUserChange = this.onUserChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.submit = this.submit.bind(this)
  }

  onUserChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleClick() {
    this.submit(this.state.username, this.state.password)
  }

  handleKeyPress(e) {
    if (e.charCode === 13) {
      this.submit(this.state.username, this.state.password)
    }
  }

  submit(username, password) {
    axios.post('/login', {username: username, password: password})
      .then((logInResponse) => {
        console.log('submitted')
      })
  }

  render() {
    return (
      <div>
      <Route path='/Where' component={Q1} />
      <input value={this.username} onChange={this.onUserChange }/> Enter your Username
      <br></br>
      <input value={this.password} onChange={this.onPasswordChange} onKeyPress={this.handleKeyPress}  /> Enter your Password
      <br></br>
      <button onClick={this.handleClick}><Link to='/Where'>Log In</Link></button>
      </div>
    )
  }
}



export default Login;
