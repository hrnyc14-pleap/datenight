import React from 'react';
import QuestionForm from './QuestionForm.jsx';
import { Route, Link } from 'react-router-dom';
import axios from 'axios'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: false
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
    if (this.state.loggedIn === true ) {
      this.props.history.push('/questions')
    }
  }

  handleKeyPress(e) {
    if (e.charCode === 13) {
      this.submit(this.state.username, this.state.password)
    }
  }

  submit(username, password) {
    axios.post('/login', {username: username, password: password})
      .then((logInResponse) => {
        console.log('Login reponse', logInResponse)
        this.setState({
          loggedIn : true
        })
        console.log('login', this.props.history)
        this.props.history.push('/Where')
      })
      .catch((err)=> {
        console.log('There was an error signing in')
      })
  }

  render() {
    return (
      <div>
      <Route path='/questions' component={QuestionForm} />
      <input value={this.username} onChange={this.onUserChange }/> Enter your Username
      <br></br>
      <input value={this.password} onChange={this.onPasswordChange} onKeyPress={this.handleKeyPress}  /> Enter your Password
      <br></br>
      <button onClick={this.handleClick}>Log in</button>
      </div>
    )
  }
}
// <Link to='/Where'>Log In</Link>


export default Login;
