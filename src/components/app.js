import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

// KEY:472577c6297a1232a60dd223bdaf599a
export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList/>
      </div>
    );
  }
}
