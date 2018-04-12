import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import MovieView from './MovieView.jsx';
import ActivityView from './ActivityView.jsx';
import RestaurantView from './RestaurantView.jsx';

const Favorites = ({movies, activities, restaurants, handleDeleteMovie, handleDeleteRestaurant, handleDeleteActivity}) => {
  return(
    <div>
      <h1> Restaurants </h1>
        {
          restaurants.map((item, i) => (
              <div key={i}>
                <RestaurantView data={item}/>
                <button onClick={() => { handleDeleteRestaurant(item.name)} }>Delete</button>
              </div>  
          ))
        }
      <h1> Activities </h1>
        {
          activities.map((item, i) => (
            <div key={i}>
              <ActivityViewdata data={item} />
              <button onClick={() => { handleDeleteActivity(item.name)} }>Delete</button>
            </div>
          ))
        }
      <h1> Movies </h1>
        {
          movies.map((item, i) => (
            <div key={i}>
              <MovieView data={item} />
              <button onClick={() => { handleDeleteMovie(item.name)} }>Delete</button>
            </div>

          ))
        }
    </div>
  )
}



export default Favorites;
