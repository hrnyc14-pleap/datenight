import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import MovieView from './MovieView.jsx';
import ActivityView from './ActivityView.jsx';
import RestaurantView from './RestaurantView.jsx';
import {Redirect} from 'react-router-dom';



class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteMovies: [],
      favoriteRestaurants: [],
      favoriteActivities: []
    }
    this.getFavorites = this.getFavorites.bind(this);    
    this.getFavorites();
  }

  
  getFavorites() {
    console.log('GETTING FAVORITES');
    axios.get('/getFavorites')
    .then((res) => {
      console.log('GOT FAVORITES', res.data)
      this.setState({
        favoriteMovies: res.data.movies,
        favoriteRestaurants: res.data.restaurants,
        favoriteActivities: res.data.activities
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    if (!this.props.isLoggedIn) {
      return <div><Redirect to='/login'/></div>;
    }
    return(
      <div>
        <h1> Restaurants </h1>
          {
            this.state.favoriteRestaurants.map((item, i) => (
                <div key={i}>
                  <RestaurantView data={item}/>
                  <button onClick={() => { this.props.handleDeleteRestaurant(item.name)} }>Delete</button>
                </div>  
            ))
          }
        <h1> Activities </h1>
          {
            this.state.favoriteActivities.map((item, i) => (
              <div key={i}>
                <ActivityView data={item} />
                <button onClick={() => { this.props.handleDeleteActivity(item.name)} }>Delete</button>
              </div>
            ))
          }
        <h1> Movies </h1>
          {
            this.state.favoriteMovies.map((item, i) => (
              <div key={i}>
                <MovieView data={item} />
                <button onClick={() => { this.props.handleDeleteMovie(item.name)} }>Delete</button>
              </div>
            ))
          }
      </div>
    )}
}
export default Favorites;
