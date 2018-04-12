import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import MovieView from './MovieView.jsx';
import ActivityView from './ActivityView.jsx';
import RestaurantView from './RestaurantView.jsx';


const Results = ({movie, restaurant, activity,
    handleSaveMovie, handleSaveActivity, handleSaveRestaurant,
    handleDeleteMovie, handleDeleteActivity, handleDeleteRestaurant}) => (<div>
  <div className="general-background">
        <h1>Your Results:</h1>
        <p> Your date night will be this .... placeholder </p>

        <br/>
        Movie
        {
          movie === null?
            (''):
            (<div>
              <MovieView data={movie}/>
              <button onClick={()=>{handleSaveMovie(movie)}}>save</button>
            </div>
            )
        }
        Restaurant
        {
          restaurant === null ?
            (''):
            (<div>
              <RestaurantView data={restaurant}/>
              <button onClick={()=>{handleSaveRestaurant(restaurant)}}>save</button>
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
              <button onClick={()=>{handleSaveActivity(activity)}}>save</button>
            </div>
            )
        }
      </div>
</div>)

export default Results;