import React from 'react';
import { Route, Link } from 'react-router-dom';
import Q3 from './Q3.jsx';

class Q2 extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }

  render() {
    return(
      <div>
      <Route path='/question3' component={Q3}/>
      <h1>Question 2</h1>
      <button><Link to='/question3'>Cook</Link></button>
      <button><Link to='/question3'>Get Delivery</Link></button>
      </div>
    )
  }
}


export default Q2;