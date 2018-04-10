import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import Login from './login.jsx';
import Welcome from './welcome.jsx';
import Q1 from './Q1.jsx';
import Q2 from './Q2.jsx';
import Q3 from './Q3.jsx';
import Q4 from './Q4.jsx';
import Q5 from './Q5.jsx';
import Home from './Home.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      apiQueries:{
        cook: false,
        delivery: false,
        movieGenre: "",
        activityLevel: false,
        location: "",
        price: ""
      },
      results: {},
      saved: []
    }
  }

  

  render() {
    return (
      <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/welcome' component={Welcome}/>
        <Route path='/question1' component={Q1} />
        <Route path='/question2' component={Q2} />
        <Route path='/question3' component={Q3} />
        <Route path='/question4' component={Q4} />
        <Route path='/question5' component={Q5} />
      </Switch>
      </main>
    )
  }
}



export default Main;