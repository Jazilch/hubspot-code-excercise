'use es6';

import React, { Component } from 'react';
import getJoke from '../utils/getJoke';

export default class TestimonialFetcher extends Component {
  state = {
    data: null,
    isLoading: false
  };
  componentDidMount() {
    getJoke().then(data => {
      this.setState({
        data
      });
    });
  }
  handleClick = () => {
    getJoke().then(data => {
      this.setState({
        data
      });
    });
  };
  render() {
    const { data, isLoading } = this.state;
    return this.props.children({ data, isLoading, handleClick: this.handleClick });
  }
}
