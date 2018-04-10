import React from 'react';
import { Route, Link } from 'react-router-dom';
import Results from './Results.jsx';

class Q5 extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }

  render() {
    return(
      <div>
        <Route path='/results' component={Results}/>
        <div>Hello this is question 5</div>
        <input></input>
        <input></input>
        <button><Link to='/results'>Get results!</Link></button>
      </div>
    )
  }
}

export default Q5;