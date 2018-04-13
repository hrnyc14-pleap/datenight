import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Login from './login.jsx';
import SignUp from './SignUp.jsx';
import Welcome from './Welcome.jsx';
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
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
    this.handleDeleteRestaurant = this.handleDeleteRestaurant.bind(this);
    this.handleDeleteActivity = this.handleDeleteActivity.bind(this);
    this.handleRegister = this.handleRegister.bind(this); 
  }

  componentDidMount() {
    console.log('checking if user is logged in')
    axios.get('/isloggedin')
    .then(res => {
      console.log('user is logged in: ', res.data);
      this.setState({isLoggedIn: res.data});
    })
  }

  handleSaveRestaurant(restaurant){
    console.log('saving restaurant', restaurant)
    if (!this.state.isLoggedIn) {
      console.log('ERROR, NOT LOGGED IN');
      return;
    }
    axios.post('/saveRestaurant', {
      restaurantName: restaurant.name,
      restaurantPhoto: restaurant.image_url,
      price: restaurant.price.length
    })
    .then((res) => {
      console.log('Restaurant saved to favorites', res);
    })
    .catch((err) => {
      console.log('Unable to save restaurant to favorites', err);
    })
  }

  handleSaveMovie(movie){
    console.log('saving movie', movie)
    if (!this.state.isLoggedIn) {
      console.log('ERROR, NOT LOGGED IN');
      return;
    }
    axios.post('/saveMovie', {
      movieName: movie.title,
      moviePhoto: movie.poster_path
    })
    .then((res) => {
      console.log('Movie saved to favorites', res);
    })
    .catch((err) => {
      console.log('Unable to save movie to favorites', err);
      res.send(400, 'error saving to database');
    })
  }

  handleSaveActivity(activity){
    console.log('saving activity', activity)
    if (!this.state.isLoggedIn) {
      console.log('ERROR, NOT LOGGED IN');
      return;
    }
    axios.post('/saveActivity', {
      activityName: activity.name,
      activityPhoto: activity.image_url
    })
    .then((res) => {
      console.log('Activity saved to favorites', res);
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
          isLoggedIn : true
        });
        cb();
      })
      .catch((err)=> {
        console.log('There was an error signing in')
      })
  }

  handleRegister(username, password, email, cb) {
    axios.post('/signup', {username: username, password: password, email: email})
      .then((registrationResponse) => {
        // console.log("Registering user was a success", registrationResponse)
        this.setState({
          isLoggedIn: true
        })
        cb();
      })
      .catch((err)=> {
        console.log(err);
        console.log("There was an error registering user")
      })
      .then(() => {
        console.log("HIII CAUGHT")
      })
  }

  handleLogout() {
    axios.post('/logout')
    .then(res => {
      this.setState({isLoggedIn: false});
    })
  }

  handleDeleteMovie(movieName, cb){
    axios.delete('/deleteMovie', {
      params: {
        movie: movieName
      }   
    })
    .then((res) => {
      console.log('Movie has been deleted')
      cb();
    })
    .catch((err) => {
      console.log('Failed to delete movie', err)
    })
  }

  handleDeleteRestaurant(restaurantName, cb){
    axios.delete('/deleteRestaurant', {
      params: {
        restaurant: restaurantName
      }   
    })
    .then((res) => {
      console.log('Restaurant has been deleted')
      cb();
    })
    .catch((err) => {
      console.log('Failed to delete restaurant', err)
    })
  }

  handleDeleteActivity(activityName, cb){
    axios.delete('/deleteActivity', {
      params: {
        activity: activityName
      }   
    })
    .then((res) => {
      console.log('Activity has been deleted');
      cb();
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

          <Route exact={true} path='/' component={()=><NavBar path='/' isLoggedIn={this.state.isLoggedIn}
            handleLogout={()=>console.log('IMPLEMENT LOGOUT')}/>}/>
        {['/signup', '/login', '/welcome', '/questions', '/favorites'].map(path => 
          <Route path={path} component={()=><NavBar path={path} handleLogout={this.handleLogout}
            isLoggedIn={this.state.isLoggedIn}
          />}/>
        )}
        <Route exact={true} path='/' component={(props)=><Redirect {...props} to='/signup'/>}/>
        <Route path='/signup' component={(props) => <SignUp {...props} isLoggedIn={this.state.isLoggedIn} handleRegister={this.handleRegister}/>}/>
        <Route path='/login' component={(props) => <Login {...props} handleLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn}/>}/>
        <Route path='/welcome' component={Welcome}/>
        <Route path='/questions' component={(props) => <QuestionForm
          handleSaveMovie={this.handleSaveMovie}
          handleSaveActivity={this.handleSaveActivity}
          handleSaveRestaurant={this.handleSaveRestaurant}
          handleDeleteActivity={this.handleDeleteActivity}
          handleDeleteMovie={this.handleDeleteMovie}
          handleDeleteRestaurant={this.handleDeleteRestaurant}/>}
        />
        <Route path='/results' component={Results}/>
        <Route path='/favorites' component={() => <Favorites
            {...this.props}
            isLoggedIn={this.state.isLoggedIn} 
            handleDeleteMovie={this.handleDeleteMovie} 
            handleDeleteRestaurant = {this.handleDeleteRestaurant}
            handleDeleteActivity = {this.handleDeleteActivity}
          />
          }
        />
        </div>
      </Router>
      </div>
    )
  }
}

export default App;
