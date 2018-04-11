import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import Welcome from './welcome.jsx';
import SignUp from './SignUp.jsx'
import { Route, Link, Switch } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
          <Route path='/login' component={Login}></Route>
          <h1>This is the beginning of our app</h1>
          <h2>Sign Up Here</h2>
          <button><Link to='/login'>Login here</Link></button>
          <button><Link to='/questions'>Go to questions</Link></button>
      </div>
    )
  }
}

export default Home;
