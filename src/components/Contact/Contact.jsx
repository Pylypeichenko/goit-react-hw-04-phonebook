import { PropTypes } from 'prop-types';

import { ContactInfo, Button } from './Contact.styled';

export const Contact = ({ name, number, onContactDelete }) => {
  return (
    <>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <Button type="button" onClick={onContactDelete}>
        Delete contact
      </Button>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};
