import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFormSubmit = contactData => {
    const contact = {
      id: nanoid(),
      name: contactData.name,
      number: contactData.number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  handleFilterInputChange = e => {
    const contactFilter = e.currentTarget.value.toLowerCase().trim();
    this.setState({ filter: contactFilter });
  };

  render() {
    const filterContacts = this.state.contacts.filter(item => {
      return item.name.toLowerCase().includes(this.state.filter);
    });

    return (
      <>
        <h1>Phonebook</h1>
        <h2>Adding contact</h2>
        <Form onFormSubmit={this.handleFormSubmit} />
        <h2>Your noted contacts</h2>
        <Filter
          filter={this.state.filter}
          onListFilter={this.handleFilterInputChange}
        />
        <ContactList contacts={filterContacts} />
      </>
    );
  }
}
