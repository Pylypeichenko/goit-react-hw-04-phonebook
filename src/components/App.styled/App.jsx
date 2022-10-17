import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

import { Container, Section, PageTitle, SectionTitle } from './App.styled';

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

    const contactNames = this.state.contacts.map(item =>
      item.name.toLowerCase()
    );

    if (contactNames.includes(contact.name.toLowerCase())) {
      window.alert(`${contact.name} is already in your Phonebook`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  handleFilterInputChange = e => {
    const contactFilter = e.currentTarget.value.toLowerCase().trim();
    this.setState({ filter: contactFilter });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filterContacts = this.state.contacts.filter(item => {
      return item.name.toLowerCase().includes(this.state.filter);
    });

    return (
      <Container>
        <Section>
          <PageTitle>Phonebook</PageTitle>
          <SectionTitle>Adding contact</SectionTitle>
          <Form onFormSubmit={this.handleFormSubmit} />
        </Section>
        <Section>
          <SectionTitle>Your noted contacts</SectionTitle>
          <Filter
            filter={this.state.filter}
            onListFilter={this.handleFilterInputChange}
          />
          <ContactList
            contacts={filterContacts}
            onContactDelete={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}