import React from 'react';
import QuestionForm from './QuestionForm.jsx';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.onUserChange = this.onUserChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleLogin = props.handleLogin;
    this.submit = this.submit.bind(this);
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

  handleKeyPress(e) {
    if (e.charCode === 13) {
      this.submit(this.state.username, this.state.password);
    }
  }

  submit() {
    console.log('handle login', this.state.username, this.state.password)
    this.handleLogin(this.state.username, this.state.password, ()=> {
      console.log('submit props', this.props)
      this.props.history.push('/questions');
    });
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to='/questions'/>
    }
    return (
      <div>
      <input value={this.username} onChange={this.onUserChange }/> Enter your Username
      <br></br>
      <input value={this.password} onChange={this.onPasswordChange} onKeyPress={this.handleKeyPress}  /> Enter your Password
      <br></br>
      <button onClick={this.submit}>Log in</button>
      </div>
    )
  }
}
// <Link to='/Where'>Log In</Link>


export default Login;
