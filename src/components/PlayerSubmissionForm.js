import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective: '',
      noun: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    };
  }

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;

    this.setState(field);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addLineCallback({
      adjective: this.state.adjective,
      noun: this.state.noun,
      adverb: this.state.adverb,
      verb: this.state.verb,
      adjective2: this.state.adjective2,
      noun2: this.state.noun2
    });

    this.setState({
      adjective: '',
      noun: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    });


    // Refactor this line
    // const poemVerse = 'The ' + this.state.adjective + ' ' + this.state.noun + ' ' + this.state.adverb + ' ' + this.state.verb + ' the ' + this.state.adjective2 + ' ' + this.state.noun2 + '.';
    // this.props.addLineCallback(poemVerse);
  }
 

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.playerNumber + 1}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit} >

          <div className="PlayerSubmissionForm__poem-inputs">
            <label>The</label> 
              <input
                name="adjective"
                placeholder="adjective"
                type="text"
                onChange={this.onChangeHandler}
                value={this.state.adjective}
                required />
           
            <input
              name="noun"
              placeholder="noun"
              type="text" 
              required
              onChange={this.onChangeHandler}
              value={this.state.noun} />
            <input
              name="adverb"
              placeholder="adverb"
              type="text"
              required 
              onChange={this.onChangeHandler}
              value={this.state.adverb} />
            <input
              name="verb"
              placeholder="verb"
              type="text" 
              required 
              onChange={this.onChangeHandler}
              value={this.state.verb}/>
            <label>the</label>
              <input
                name="adjective2"
                placeholder="adjective2"
                type="text"
                required
                onChange={this.onChangeHandler}
                value={this.state.adjective2} />
            <input
              name="noun2"
              placeholder="noun2"
              type="text" 
              required
              onChange={this.onChangeHandler}
              value={this.state.noun2} />
            <label>.</label>
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
