'use es6';

import React, { Component } from 'react';

export default class FilterState extends Component {
  state = {
    filterOpen: false,
    dropdownOpen: ''
  };
  handleDropdown = e => {
    const item = e.currentTarget.getAttribute('id');
    this.setState(prevState => ({
      filterOpen: !prevState.filterOpen,
      dropdownOpen: item ? item : ''
    }));
  };
  render() {
    const { filterOpen, dropdownOpen } = this.state;
    return this.props.children({
      filterOpen,
      dropdownOpen,
      handleDropdown: this.handleDropdown
    });
  }
}
