import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import MovieView from './MovieView.jsx';
import ActivityView from './ActivityView.jsx';
import RestaurantView from './RestaurantView.jsx';


const Results = ({movie, restaurant, activity, movieIsSaved, restaurantIsSaved, activityIsSaved,
   handleMovieButton, handleActivityButton, handleRestaurantButton}) => (<div>
  <div>
        <h1>Your Results:</h1>
        <p> Your date night will be this .... placeholder </p>

        <br/>
        Movie
        {
          movie === undefined?
            (''):
            (<div>
              <MovieView data={movie}/>
              <button onClick={()=>handleMovieButton(movie)}>{movieIsSaved? 'save': 'unsave'}</button>
            </div>
            )
        }
        Restaurant
        {
          restaurant === undefined?
            (''):
            (<div>
              <RestaurantView data={restaurant}/>
              <button onClick={()=>handleRestaurantButton(restaurant)}>{restaurantIsSaved? 'save': 'unsave'}</button>
            </div>
            )
        }
        <br/>
        Activity
        {
          activity === undefined?
            (''):
            (<div>
              <ActivityView data={activity}/>
              <button onClick={()=>handleActivityButton(activity)}>{activityIsSaved? 'save': 'unsave'}</button>
            </div>
            )
        }
      </div>
</div>)

export default Results;