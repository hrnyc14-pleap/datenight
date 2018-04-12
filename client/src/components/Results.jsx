import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    }
    this.handleTryAgain = this.handleTryAgain.bind(this)
<<<<<<< HEAD
    this.handleSaveActivity = this.handleSaveActivity.bind(this)
  }

  handleSaveRestaurant() {
    axios.post('/saveRestaurant')
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log('Error saving favorite restaurant')
      })
  }

  handleSaveMovie() {
    axios.post('/saveMovie')
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log('Error saving favorite movie')
      })
  }

  handleSaveActivity() {
    axios.post('/saveActivity')
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log('Error saving favorite activity')
      })
=======
>>>>>>> 36e21dbf50d5576a94de20d2d784702c1aef316a
  }

  handleTryAgain(){
    this.props.history.push('/Where')
  }

  render() {
    return(
      <div>
        <h1>Your Results:</h1>
        <p> Your date night will be this .... placeholder </p>

        <br/>
        <p>Restaurant: Mcdonalds </p>
        <button onClick={this.handleSaveRestaurant}>Save this</button>

        <br/>
        <p>Movie: Fight Club </p>
        <button onClick={this.handleSaveMovie}>Save this</button>


        <br/>
        <p>Activity: Go to a concert </p>
        <button onClick={this.handleSaveActivity}>Save this</button>


        <br/>
        <br/>
        <button onClick={this.handleTryAgain}>Try Again</button>


      </div>
    )
  }
}

export default Results;
