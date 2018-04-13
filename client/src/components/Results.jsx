import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import MovieView from './MovieView.jsx';
import ActivityView from './ActivityView.jsx';
import RestaurantView from './RestaurantView.jsx';


const Results = ({movie, restaurant, activity,
    handleSaveMovie, handleSaveActivity, handleSaveRestaurant,
    handleDeleteMovie, handleDeleteActivity, handleDeleteRestaurant}) => (<div>
  <div className="general-background view">

        <h1>We've got an awesome night planned for you guys!</h1>
        { movie === null ? ('') : <h2>The movie you will be watching is {movie.title}. </h2>}
        { movie && restaurant ? <h2>and you will be eating {restaurant.name}. </h2> : restaurant === null ? ('') : <h2>You guys will be eating from {restaurant.name}</h2> }
        { activity === null ? ('') : <h2> You will be enjoying your time at {activity.name}.</h2>}

        {
          movie === null?
            (''):
            (<div>
              <MovieView data={movie}/>
              <button className="save" onClick={()=>{handleSaveMovie(movie)}}>Save</button>
            </div>
            )
        }

        {
          restaurant === null ?
            (''):
            (<div>
              <RestaurantView data={restaurant}/>
              <button className="save" onClick={()=>{handleSaveRestaurant(restaurant)}}>Save</button>
            </div>
            )
        }

        {
          activity === null?
            (''):
            (<div>

              <ActivityView data={activity}/>
              <button className="save" onClick={()=>{handleSaveActivity(activity)}}>Save</button>
            </div>
            )
        }
      </div>
</div>)

export default Results;
