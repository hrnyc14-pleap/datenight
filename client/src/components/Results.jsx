import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import MovieView from './MovieView.jsx';
import ActivityView from './ActivityView.jsx';
import RestaurantView from './RestaurantView.jsx';


const Results = ({movie, restaurant, activity, isSaved,
    handleSaveMovie, handleSaveActivity, handleSaveRestaurant,
    handleDeleteMovie, handleDeleteActivity, handleDeleteRestaurant}) => (<div>
  <div>
        <h1>Your Results:</h1>
        <p> Your date night will be this .... placeholder </p>

        <br/>
        Movie
        {
          movie === null?
            (''):
            (<div>
              <MovieView data={movie}/>
              <button onClick={()=>{isSaved('movie', movie)? handleDeleteMovie(movie): handleSaveMovie(movie)}}>
                {isSaved('movie', movie)? 'unsave': 'save'}</button>
            </div>
            )
        }
        Restaurant
        {
          restaurant === null ?
            (''):
            (<div>
              {console.log('this is the results page')}
              <RestaurantView data={restaurant}/>
              <button onClick={()=>{isSaved('restaurant', restaurant)? handleDeleteRestaurant(restaurant): handleSaveRestaurant(restaurant)}}>
                {isSaved('restaurant', restaurant)? 'unsave': 'save'}</button>
            </div>
            )
        }
        <br/>
        Activity
        {
          activity === null?
            (''):
            (<div>
              <ActivityView data={activity}/>
              <button onClick={()=>{isSaved('activity', activity)? handleDeleteActivity(activity): handleSaveActivity(activity)}}>
                {isSaved('activity', activity)? 'unsave': 'save'}</button>
            </div>
            )
        }
      </div>
</div>)

export default Results;
