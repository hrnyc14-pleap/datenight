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
          <Route path='/Food' component={Q2}/>
          <Route path='/Energy' component={Q4} />
        </Switch>
        <button><Link to='/Food'>In my Home</Link></button>
        <button><Link to='/Energy'>In my City</Link></button>
      </div>
    )
  }
}

export default Q1;
