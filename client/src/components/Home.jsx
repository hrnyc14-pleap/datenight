import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import Welcome from './Welcome.jsx';
import SignUp from './SignUp.jsx'
import { Route, Link, Switch } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="home">
        <h1>Date Night</h1>
        <div className="home-container">
          <div className="home-container-signUp">
            <h2>Sign Up Here</h2>
            <SignUp history={this.props.history}/>
            <br/>
            <br/>
            <br/>

            <Link to='/questions'><RaisedButton label="Just Take Me to the Questions.." /></Link>
          </div>
          <div className="home-container-goQ">
          </div>
        </div>
       
      </div>
    )
  }
}

export default Home;
