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
      isLoggedIn: false,
      favoriteMovies: [],
      favoriteRestaurants: [],
      favoriteActivities: []
    }
    this.handleSaveRestaurant = this.handleSaveRestaurant.bind(this);
    this.handleSaveMovie = this.handleSaveMovie.bind(this);
    this.handleSaveActivity = this.handleSaveActivity.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
<<<<<<< HEAD
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  } 

  getFavorites() {
    // TODO
=======
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
    this.handleDeleteRestaurant = this.handleDeleteRestaurant.bind(this);
    this.handleDeleteActivity = this.handleDeleteActivity.bind(this);
  } 

  getFavorites() {
    axios.get('/getFavorites')
    .then((data) => {
      this.setState({
        favoriteMovies: data.movies,
        favoriteRestaurants: data.restaurants,
        favoriteActivities: data.activities
      })
    })
    .catch((err) => {
      console.log(err);
    })
>>>>>>> 9b62965244f740a9960b1dd0cfd454ab0632a160
  }

  handleSaveRestaurant(restaurant){
    axios.post('/saveRestaurant', {
      restaurantName: restaurant.name,
      restaurantPhoto: restaurant.image_url,
      price: restaurant.price.length
    })
    .then((res) => {
      console.log('Restaurant saved to favorites', res);
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
      console.log('Movie saved to favorites', res);
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
      console.log('Activity saved to favorites', res);
      this.getFavorites();
    })
    .catch((err) => {
      console.log('Unable to save activity to favorites', err);
    })
  }

  handleLogin(username, password, cb) {
    console.log('attempting to login with credentails', username, password);
    axios.post('/login', {username: username, password: password})
      .then((logInResponse) => {
        console.log('Login reponse', logInResponse)
        this.setState({
          loggedIn : true
        });
        cb();
      })
      .catch((err)=> {
        console.log('There was an error signing in')
      })
  }

  handleLogout() {
    //TODO
  }

  handleDeleteMovie(movieName){
    axios.delete('/deleteMovie', {
      params: {
        movie: movieName
      }   
    })
    .then((res) => {
      console.log('Movie has been deleted')
      this.getFavorites();
    })
    .catch((err) => {
      console.log('Failed to delete movie', err)
    })
  }

  handleDeleteRestaurant(restaurantName){
    axios.delete('/deleteRestaurant', {
      params: {
        restaurant: restaurantName
      }   
    })
    .then((res) => {
      console.log('Restaurant has been deleted')
      this.getFavorites();
    })
    .catch((err) => {
      console.log('Failed to delete restaurant', err)
    })
  }

  handleDeleteActivity(activityName){
    axios.delete('/deleteActivity', {
      params: {
        activity: activityName
      }   
    })
    .then((res) => {
      console.log('Activity has been deleted')
      this.getFavorites();
    })
    .catch((err) => {
      console.log('Failed to delete activiy', err)
    })
  }


  render() {
    return (
      <div>
      <Router>
        <div>
          <Route exact="true" path='/' component={()=><NavBar path='/' handleLogout={()=>console.log('IMPLEMENT LOGOUT')}/>}/>
        {['/signup', '/login', '/welcome', '/questions', '/home', '/favorites'].map(path => 
          <Route path={path} component={()=><NavBar path={path} handleLogout={()=>console.log('IMPLEMENT LOGOUT')}/>}/>
        )}
        <Route exact='true' path='/' component={Home}/>
        <Route path='/signup' component={Home}/>
        <Route path='/login' component={(props) => <Login {...props} handleLogin={this.handleLogin}/>}/>
        <Route path='/welcome' component={Welcome}/>
        <Route path='/questions' component={(props) => <QuestionForm
          handleSaveMovie={this.handleSaveMovie}
          handleSaveActivity={this.handleSaveActivity}
          handleSaveRestaurant={this.handleSaveRestaurant}/>}/>
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
