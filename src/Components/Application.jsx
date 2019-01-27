'use es6';

import React, { Component } from 'react';
import axios from 'axios';
import getMedia from '../utils/getMedia';

import MediaGrid from '../Components/MediaGrid';
import Testimonials from './Testimonials';
import FilterableContent from './FilterableContent';

import selectItems from '../utils/stateChanges';
import stripArticles from '../utils/stripArticles';

export default class Application extends Component {
  state = {
    media: [],
    selected: [],
    type: '',
    searchTerm: ''
  };
  componentDidMount() {
    getMedia().then(({ media }) => {
      this.setState({
        media
      });
    });
  }
  handleFilters = ({ currentTarget: { textContent: selected } }) => {
    this.setState(state => selectItems(state, selected));
  };
  handleClearFilter = () => {
    this.setState({
      selected: [],
      type: '',
      searchTerm: ''
    });
  };
  handleSearch = ({ target: { value: searchTerm } }) => {
    this.setState({
      searchTerm
    });
  };
  handleType = ({ target: { value: type } }) => {
    this.setState({
      type
    });
  };
  filterByGenre = media => {
    const { selected } = this.state;
    if (selected.length === 0) {
      return true;
    }
    return selected.every(m => media.year.includes(m) || media.genre.includes(m));
  };
  filterBySearch = media => {
    const { searchTerm } = this.state;
    return media.title.toLocaleLowerCase().includes(String(searchTerm).toLocaleLowerCase());
  };
  filterByType = media => {
    const { type } = this.state;
    return media.type.includes(type);
  };
  sort = (a, b) => {
    return stripArticles(a.title).localeCompare(stripArticles(b.title));
  };
  getFilteredMedia = media => {
    return media
      .filter(this.filterByGenre)
      .filter(this.filterBySearch)
      .filter(this.filterByType)
      .sort(this.sort);
  };
  render() {
    const { media, filterOpen, dropdownOpen, selected, type, searchTerm } = this.state;
    const filteredMedia = this.getFilteredMedia(media);
    return (
      <div className="Application">
        <FilterableContent
          media={media}
          selected={selected}
          searchTerm={searchTerm}
          type={type}
          handleClearFilter={this.handleClearFilter}
          handleType={this.handleType}
          handleSearch={this.handleSearch}
          handleFilters={this.handleFilters}
        />
        <MediaGrid media={filteredMedia} />
        <Testimonials />
      </div>
    );
  }
}
