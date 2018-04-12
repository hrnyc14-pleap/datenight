import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import MovieView from './MovieView.jsx';
import ActivityView from './ActivityView.jsx';
import RestaurantView from './RestaurantView.jsx';
import {Redirect} from 'react-router-dom';

const Favorites = ({movies, activities, restaurants, isLoggedIn, location}) => {
  if (!isLoggedIn) {
    return <div><Redirect to='/login'/></div>;
  }
  return ( <div>
    <h1> Restaurants </h1>
      {
        restaurants.map(item => {
          <RestaurantView data={item}/>;
        })
      }
    <h1> Activities </h1>
      {
        activities.map(item => {
          <ActivityView data={item}/>;
        })
      }
    <h1> Movies </h1>
      {
        movies.map(item => {
          <MovieView data={item}/>;
        })
      }
  </div>
)
}

export default Favorites;
