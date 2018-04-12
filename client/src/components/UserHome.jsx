import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Welcome from './Welcome.jsx';
import QuestionForm from './QuestionForm.jsx';

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <Route path={`${match.url}/favorites`} component={Topic} />
        <Route
            exact
            path={match.url}
            render={Welcome}
        />
          <QuestionForm/>
      </div>
    )
  }
}

export default UserHome;
