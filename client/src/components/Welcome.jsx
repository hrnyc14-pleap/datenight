import React from 'react';
import { Route } from 'react-router-dom';
import Q1 from './Q1.jsx';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log(this.props)
    this.props.history.push('/Where')
  }

  render() {
    return (
      <div>
        <Route path="/Where" component={Q1} />
        <h1>Welcome Page</h1>
        <button onClick={this.handleClick}>Continue to questions..</button>

      </div>
    )
  }
}


export default Welcome;