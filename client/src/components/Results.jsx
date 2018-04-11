import React from 'react';
import { Route, Link } from 'react-router-dom';
import Q1 from './Q1.jsx';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    }
    this.handleSaveRestaurant = this.handleSaveRestaurant.bind(this)
    this.handleSaveMovie = this.handleSaveMovie.bind(this)
    this.handleTryAgain = this.handleTryAgain.bind(this)
    this.handleSaveActivity = this.handleSaveActivity.bind(this)
  }

  handleSaveRestaurant(){

  }

  handleSaveMovie(){

  }

  handleSaveActivity(){

  }

  handleTryAgain(){
    this.props.history.push('/Where')
  }

  render() {
    return(
      <div>
        <Route path='/Where' component={Q1} />

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