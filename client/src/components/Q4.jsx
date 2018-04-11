import React from 'react';
import { Route, Link } from 'react-router-dom';
import Q5 from './Q5.jsx';

class Q4 extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }

  render() {
    return(
      <div>
      <Route path='/Location' component={Q5}/>
      <h1>Question 4</h1>
      <button><Link to='/Location'>Mellow</Link></button>
      <button><Link to='/Location'>Active</Link></button>
      </div>
    )
  }
}

export default Q4;
