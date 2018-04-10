import React from 'react';
import Q1 from './Q1.jsx';
import { Route, Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Route path='/question1' component={Q1} />
      <button><Link to='/question1'>Question 1</Link></button>
      </div>
    )
  }
}



export default Login;
