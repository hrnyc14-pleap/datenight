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
    this.handleSaveRestaurant = this.handleSaveRestaurant.bind(this);
    this.handleSaveMovie = this.handleSaveMovie.bind(this);
    this.handleSaveActivity = this.handleSaveActivity.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
  }

  getFavorites() {

  }

  handleSaveRestaurant(restaurant){
    axios.post('/saveRestaurant', {
      restaurantName: restaurant.name,
      restaurantPhoto: restaurant.image_url,
      price: restaurant.price.length
    })
    .then((res) => {
      console.log('Restaurant saved to favorites', res)
      this.getFavorites();
    })
    .catch((err) => {
      console.log('Unable to save restaurant to favorites', err);
    })
  }

  handleSaveMovie(movie){
    axios.post('/saveMovie', {
      movieName: movie.title,
      moviePhoto: movie.poster_path
    })
    .then((res) => {
      console.log('Movie saved to favorites', res)
      this.getFavorites();
    })
    .catch((err) => {
      console.log('Unable to save movie to favorites', err);
    })
  }

  handleSaveActivity(activity){
    axios.post('/saveActivity', {
      activityName: activity.name,
      location: activity.location,
      price: activity.price.length,
      acitivityPhoto: activity.image_url
    })
    .then((res) => {
      console.log('Activity saved to favorites', res)
      this.getFavorites();
    })
    .catch((err) => {
      console.log('Unable to save activity to favorites', err);
    })
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
