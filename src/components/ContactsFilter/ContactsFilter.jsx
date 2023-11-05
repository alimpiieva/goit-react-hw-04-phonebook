import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput } from './ContactsFilter.styled';

const ContactsFilter = ({ filter, onFilterChange }) => {
  return (
    <FilterInput
      type="text"
      name="filter"
      value={filter}
      onChange={onFilterChange}
      placeholder="Search contacts..."
    />
  );
};

ContactsFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
}

export default ContactsFilter;
