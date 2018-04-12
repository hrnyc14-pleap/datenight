import React from 'react';
import { Route } from 'react-router-dom';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log(this.props)
    this.props.history.push('/questions')
  }

  render() {
    return (
      <div>
        <h1>Welcome Page</h1>
        <button onClick={this.handleClick}>Continue to questions..</button>
      </div>
    )
  }
}


export default Welcome;