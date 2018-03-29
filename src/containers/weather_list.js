import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Chart data={temps} units="K" color="orange" /></td>
        <td><Chart data={pressures} units="hPa" color="blue" /></td>
        <td><Chart data={humidities} units="%" color="green" /></td>
      </tr>
    );
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  // If we don't want to use the ES6 shorthand, we would write it as such
  // function mapStateToProps(state)
  // return { 'weather': state.weather };
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
