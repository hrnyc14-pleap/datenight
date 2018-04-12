import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './login.jsx';
import SignUp from './SignUp.jsx';
import Welcome from './Welcome.jsx';
import Home from './Home.jsx';
import QuestionForm from './QuestionForm.jsx';
import Favorites from './Favorites.jsx';
import NavBar from './NavBar.jsx';
import Results from './Results.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    return (
      <div>
      <Router>
        <div>
          <Route exact="true" path='/' component={()=><NavBar path='/' handleLogout={()=>console.log('IMPLEMENT LOGOUT')}/>}/>
        {['/signup', '/login', '/welcome', '/questions', '/home'].map(path => 
          <Route path={path} component={()=><NavBar path={path} handleLogout={()=>console.log('IMPLEMENT LOGOUT')}/>}/>
        )}
        <Route exact='true' path='/' component={Home}/>
        <Route path='/signup' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/welcome' component={Welcome}/>
        <Route path='/questions' component={QuestionForm}/>
        <Route path='/results' component={Results}/>
        <Route path='/favorites' component={() => <Favorites movies={[]} activities ={[]} restaurants={[]}/>}/>
        </div>
      </Router>
      Application by Amy San Felipe, Heidi Poon, Ian Pradhan, and Kevin Wang 2018 
      </div>
    )
  }
}

export default App;
