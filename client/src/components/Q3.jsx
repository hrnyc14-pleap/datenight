import React from 'react';
import { Route, Link } from 'react-router-dom';
import Q4 from './Q4.jsx';
import Results from './Results.jsx';

class Q3 extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }

  render() {
    return(
      <div>
        <Route path='/results' component={Results}/>
        <h1>Question 3</h1>
        <button><Link to='/results'>Action</Link></button>
        <button><Link to='/results'>Comedy</Link></button>
        <button><Link to='/results'>Romance</Link></button>
        <button><Link to='/results'>Horror</Link></button>
      </div>
    )
  }
}

export default Q3;