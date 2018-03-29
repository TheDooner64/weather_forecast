import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

// Make sure not to export the class from here, since we do it at the bottom with connect
class SearchBar extends Component {
  // A controlled field is a form element where the value of an input is set by the state of the component
  // Not the other way around!
  constructor(props) {
    super(props);

    this.state = { 'term': '' };

    // We need to bind "this" to the callback function
    // Alternatively, we could have wrapped the input's onChange in a fat arrow function like so
    // onChange={() => this.onInputChange}
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // All vanilla DOM event handlers accept an "event" argument
  onInputChange(event) {
    this.setState({ 'term': event.target.value });
  }

  // When you click submit or press enter for a form element child,
  // the browser automatically tries to submit the contents of the form with a POST request
  // We want to prevent this default behavior since this is supposed to be a single page application
  // We can do this by creating a custom onSubmit event handler
  onFormSubmit(event) {
    event.preventDefault();

    // Fetch the weather data based on the city the user searched for
    this.props.fetchWeather(this.state.term);

    // Clear out the search input
    this.setState({ 'term': '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// We have a null here because we don't need to use mapStateToProps (i.e. this container doesn't care about state)
// mapDispatchToProps always needs to tbe the second argument
export default connect(null, mapDispatchToProps)(SearchBar);
