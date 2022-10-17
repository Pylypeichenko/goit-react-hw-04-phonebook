import { PropTypes } from 'prop-types';

import { Label, Input } from './Filter.styled';

export const Filter = ({ filter, onListFilter }) => {
  return (
    <>
      <Label htmlFor="contactFilter">Find contact by name</Label>
      <Input
        id="contactFilter"
        name="filter"
        type="text"
        value={filter}
        onChange={onListFilter}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onListFilter: PropTypes.func.isRequired,
};
