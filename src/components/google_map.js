import React, { Component } from 'react'

// ref is a reference system in react
// It allows us to get a direct reference to an HTML element that has been rendered to the page
class GoogleMap extends Component {
  componentDidMount() {
    // Create a new, embedded google map in the HTML element we passed
    new google.maps.Map(this.refs.map, {
      'zoom': 12,
      'center': {
        'lat': this.props.lat,
        'lng': this.props.lon,
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}


export default GoogleMap;
