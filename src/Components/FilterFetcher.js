'use es6';

import React, { Component } from 'react';
import getGenres from '../utils/getGenres';
import getYears from '../utils/getYears';

export default class FilterFetcher extends Component {
  sort = (a, b) => {
    return a.localeCompare(b);
  };
  sortNumbers = (a, b) => {
    return b - a;
  };
  render() {
    const { media } = this.props;
    const genreList = getGenres(media);
    const yearsList = getYears(media);
    const sortedGenreList = genreList.sort(this.sort);
    const sortedYearsList = yearsList.sort(this.sortNumbers);
    return this.props.children({ sortedGenreList, sortedYearsList });
  }
}
