import React from 'react';

class DetailsForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        questions: props.questions,
        responseData: {
          distance: 10,
          minPrice: '$',
          maxPrice: '$$$$',
          zipCode: '10017'
        }
      }
      this.handleSubmitForm = () => {
        props.handleSubmitForm(this.state.responseData);
      }
      this.handleSubmitElement = this.handleSubmitElement.bind(this);
    }
  
    handleSubmitElement(question, choice) {
      this.state.responseData[question] = choice;
      this.setState({responseData: this.state.responseData});
    }
  
    render() {return (
      <div className="general-background">
        <div className="general-container">
          {
            <div>
              Price range:<input type="text" value={this.state.responseData.minPrice}
                  onChange={evt=>(this.handleSubmitElement('minPrice', evt.target.value))}/>
                to <input type="text" value={this.state.responseData.maxPrice}
                    onChange={evt=>(this.handleSubmitElement('maxPrice', evt.target.value))}/>
                <br/>
              Max distance (miles): 
                <input type="range" min="0" max="20"  value={this.state.responseData.distance} onChange={(evt) => {this.handleSubmitElement('distance', evt.target.value)}} />
                {this.state.responseData.distance} <br/>
              Zip code: <input type="text" value={this.state.responseData.zipCode} onChange={(evt)=>{this.handleSubmitElement('zipCode', evt.target.value)}}/>
              <button onClick={this.handleSubmitForm}>Submit</button>
            </div>
          }
        </div>
      </div>
    )}
  }

export default DetailsForm;