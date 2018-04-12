import React from 'react';
import TwoChoiceQuestion from './TwoChoiceQuestion.jsx';
import FourChoiceQuestion from './FourChoiceQuestion.jsx';
import DetailsForm from './DetailsForm.jsx';
import axios from 'axios';
import Results from './Results.jsx';

var Questions = {
  homeOrCity: {
    choices: {
      'In my home': 'cookOrDelivery',
      'In my city': 'activityLevel'
    },
    type: 'twoChoice'
  },
  cookOrDelivery: {
    choices: {
      'Cook': 'movieGenre',
      'Get delivery': 'movieGenre'
    },
    type: 'twoChoice'
  },
  movieGenre: {
    choices: {
      'Action': null,
      'Comedy': null,
      'Romance': null,
      'Horror': null,
    },
    type: 'fourChoice'
  },
  activityLevel: {
    choices: {
      'Mellow': 'details',
      'Active': 'details',
    }, 
    type: 'twoChoice'
  },
  details: {
    type: 'details',
    next: null
  }
}

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingResults: false,
      questions: Questions,
      currentQuestion: 'homeOrCity',
      responseData: {},
      restaurantResults: null,
      movieResults: null,
      activityResults: null
    }
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleSubmitElement = this.handleSubmitElement.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }
  
  handleRestart() {
    this.setState({
      currentQuestion: 'homeOrCity',
      responseData: {},
      showingResults: false,
      movieResult: null,
      activityResult: null,
      restaurantResult: null
    });
  }

  handleSubmitForm() {
    console.log('SUBMITTING FORM', this.state.responseData);
    var responses = this.state.responseData;
    var genreIds = {
      'Action': 28,
      'Comedy': 35,
      'Romance': 10749,
      'Horror': 27
    }
    var data = {
      cook: responses['cookOrDelivery'] === 'Cook',
      activityLevel: (responses['activityLevel'] || '').toLowerCase(),
      movieGenre: genreIds[responses['movieGenre']]
      //lat: req.body.latitude,
      //long: req.body.longitude,
    }
    if (responses.details) {
      data.radius = responses.details.distance,
      data.minPrice = responses.details.minPrice,
      data.maxPrice = responses.details.maxPrice
    }
    axios.post('/date', data)
      .then(res => {
        console.log('GOT RESPONSE', res.data)
        // display results
        this.setState({
          movieResults: res.data.movies? JSON.parse(res.data.movies): null,
          activityResults: res.data.activities? JSON.parse(res.data.activities): null,
          restaurantResults: res.data.restaurants? JSON.parse(res.data.restaurants): null,
          showingResults: true
        })
      })
  }

  // movie, activity, or restaurant may be null depending on what the user's answers were
  showResults(movie, activity, restaurant) {

  }

  // saves the response to the current element and shows the next question or submits the form
  handleSubmitElement(response) {
    this.state.responseData[this.state.currentQuestion] = response;
    let nextQuestion;
    let currentQuestionData = this.state.questions[this.state.currentQuestion];
    if (currentQuestionData.type === 'details') {
      nextQuestion = currentQuestionData.next;
    } else if (currentQuestionData.type === 'twoChoice' || currentQuestionData.type === 'fourChoice') {
      nextQuestion = currentQuestionData.choices[response];
      console.log('next question', nextQuestion);
    }
    if (nextQuestion === null) {
      this.handleSubmitForm(this.responseData);
      return;
    }
    this.setState({currentQuestion: nextQuestion});
  }

  render() {
    return (
      <div>
        {
          this.state.showingResults? 
            <Results
              {...this.props}
              movie={this.state.movieResults? this.state.movieResults[0]: null}
              activity={this.state.activityResults? this.state.activityResults[0]: null}
              restaurant={this.state.restaurantResults? this.state.restaurantResults[0]: null}
            />:
            (
              this.state.questions[this.state.currentQuestion].type === 'details'?
              <DetailsForm handleSubmitForm={this.handleSubmitElement}/>:
              (this.state.questions[this.state.currentQuestion].type === 'twoChoice'?
                <TwoChoiceQuestion handleSubmit={this.handleSubmitElement}
                  choices={Object.keys(this.state.questions[this.state.currentQuestion].choices)}/> :
                <FourChoiceQuestion handleSubmit={this.handleSubmitElement}
                  choices={Object.keys(this.state.questions[this.state.currentQuestion].choices)}/>
              )
            )
          
        }
        <button onClick={this.handleRestart}>Restart</button>
      </div>
    )
  }
}

export default QuestionForm;