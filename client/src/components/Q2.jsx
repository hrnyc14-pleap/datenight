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
      <Route path='/Movie' component={Q3}/>
      <h1>Question 2</h1>
      <button><Link to='/Movie'>Cook</Link></button>
      <button><Link to='/Movie'>Get Delivery</Link></button>
      </div>
    )
  }
}


export default Q2;
