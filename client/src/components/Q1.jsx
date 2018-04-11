import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Q2 from './Q2.jsx';
import Q4 from './Q4.jsx';

class Q1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/question2' component={Q2}/>
          <Route path='/question4' component={Q4} />
        </Switch>
        <button><Link to='/question2'>In my Home</Link></button>
        <button><Link to='/question4'>In my City</Link></button>
      </div>
    )
  }
}

export default Q1;