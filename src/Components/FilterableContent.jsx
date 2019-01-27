'use es6';

import React from 'react';
import PropTypes from 'prop-types';
import FiltersState from './FiltersState';
import FilterDropdown from './FilterDropdown';
import FilterFetcher from './FilterFetcher';

const FilterableContent = ({
  media,
  selected,
  type,
  searchTerm,
  handleClearFilter,
  handleType,
  handleFilters,
  handleSearch
}) => (
  <FiltersState>
    {({ filterOpen, dropdownOpen, handleDropdown }) => (
      <section className="filters page-center">
        <div>
          <div>
            <div className="filters__wrapper">
              <div className="filter">
                <div
                  tabIndex="-1"
                  onKeyPress={e => handleDropdown(e)}
                  onFocus={e => handleDropdown(e)}
                  onBlur={e => handleDropdown(e)}
                  role="button"
                  id="genre"
                  className="filter__select icon"
                >
                  <span>Genre</span>
                  <div className="filter__wrapper">
                    {dropdownOpen === 'genre' && filterOpen && (
                      <FilterFetcher media={media}>
                        {({ sortedGenreList }) => (
                          <FilterDropdown
                            data={sortedGenreList}
                            selected={selected}
                            dropdownOpen={dropdownOpen}
                            filterOpen={filterOpen}
                            handleFilters={handleFilters}
                          />
                        )}
                      </FilterFetcher>
                    )}
                  </div>
                </div>
                <div
                  tabIndex="-1"
                  onKeyPress={e => handleDropdown(e)}
                  onFocus={e => handleDropdown(e)}
                  onBlur={e => handleDropdown(e)}
                  role="button"
                  id="year"
                  className="filter__select icon"
                >
                  <span>Year</span>
                  <div className="filter__wrapper">
                    {dropdownOpen === 'year' && filterOpen && (
                      <FilterFetcher media={media}>
                        {({ sortedYearsList }) => (
                          <FilterDropdown
                            data={sortedYearsList}
                            selected={selected}
                            dropdownOpen={dropdownOpen}
                            filterOpen={filterOpen}
                            handleFilters={handleFilters}
                          />
                        )}
                      </FilterFetcher>
                    )}
                  </div>
                </div>
                <div className="filter__search icon search">
                  <input
                    className="filter__search--primary"
                    value={searchTerm}
                    type="text"
                    placeholder="Search movies"
                    onChange={handleSearch}
                  />
                </div>
              </div>
              <div className="filter">
                <div className="filter__radio">
                  <input
                    type="radio"
                    value="movie"
                    checked={type.includes('movie')}
                    onChange={handleType}
                  />
                  <label>Movies</label>
                </div>
                <div className="filter__radio">
                  <input
                    type="radio"
                    value="book"
                    checked={type.includes('book')}
                    onChange={handleType}
                  />
                  <label>Books</label>
                </div>
                <div className="filter__clear">
                  <a className="filter__clear--primary" href="#" onClick={handleClearFilter}>
                    Clear filters
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  </FiltersState>
);

FilterableContent.propTypes = {
  media: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  handleClearFilter: PropTypes.func.isRequired,
  handleType: PropTypes.func.isRequired,
  handleFilters: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
};

export default FilterableContent;
