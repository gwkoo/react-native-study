import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = "584c706959dbf7fc9faf596bc0b6a467";

export default class App extends Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition( 
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        })
      }
    )
  }

  _getWeather = (latitude, longitude) => {
    console.log('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&APPID=' + API_KEY)
    fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&APPID=' + API_KEY)
    .then(response => response.json())
    .then(data => {
      this.setState({
        temperature: data.main.temp,
        name: data.weather[0].main,
        isLoaded: true
      })
    })
  }

  render() {
    const { isLoaded, error, temperature, name } = this.state
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
      { isLoaded ? <Weather temperature={Math.ceil(temperature - 273.15)} weatherName={name} /> : (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting the weather</Text>
          {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
      )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent'
  },
  loading: {
    flex: 1,
    backgroundColor: '#fdf6aa',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  }
});
  