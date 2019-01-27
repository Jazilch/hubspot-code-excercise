'use es6';

import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, checked, onChange }) => (
  <label>
    <input type="checkbox" name={label} value={label} checked={checked} onChange={onChange} />
    {label}
  </label>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
