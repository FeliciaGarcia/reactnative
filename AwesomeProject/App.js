import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
}
componentDidMount() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => !==
      r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responsJson.moveis),
      }, function() {


      });
    })
    .catch((error) => {
      console.error(error);
    });
}
