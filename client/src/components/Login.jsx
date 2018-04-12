import React from 'react';
import QuestionForm from './QuestionForm.jsx';
import { Route, Link } from 'react-router-dom';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';


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
    return (
      <div className="general-background">
        <div className="login-container">
          Enter your Username<input value={this.username} onChange={this.onUserChange }/>
          <br></br>
          Enter your Password<input value={this.password} onChange={this.onPasswordChange} onKeyPress={this.handleKeyPress}  /> 
          <br></br>
          <RaisedButton onClick={this.submit} label="Log In" />

        </div>
      </div>
    )
  }
}
// <Link to='/Where'>Log In</Link>


export default Login;
