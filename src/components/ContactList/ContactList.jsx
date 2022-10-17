import { PropTypes } from 'prop-types';

import { Contact } from '../Contact/Contact';

import { ListItem } from './ContactList.styled';

export const ContactList = ({ contacts, onContactDelete }) => {
  return (
    <ul>
      {contacts.map(item => {
        const { id, name, number } = item;
        return (
          <ListItem key={id}>
            <Contact
              name={name}
              number={number}
              onContactDelete={() => onContactDelete(id)}
            />
          </ListItem>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
