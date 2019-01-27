'use es6';

import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Checkbox from './Checkbox';

const FilterDropdown = ({ data, selected, handleFilters }) => (
  <ul className="filter__dropdown">
    {data.map(filter => (
      <li key={uuid.v4()} className="filter__item" value={filter} onClick={e => handleFilters(e)}>
        <Checkbox label={filter} checked={selected.includes(filter)} onChange={handleFilters} />
      </li>
    ))}
  </ul>
);

FilterDropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFilters: PropTypes.func.isRequired
};

export default FilterDropdown;
