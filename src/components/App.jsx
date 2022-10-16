import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const contactName = form.elements.name.value;
    const contactTel = form.elements.number.value;
    this.setState({ name: contactName });
    this.setState({ number: contactTel });

    this.state.contacts.push({
      id: nanoid(),
      name: contactName,
      number: contactTel,
    });
    console.log(this.state.contacts);
    form.reset();
  };

  handleInputChange = e => {
    this.setState({ filter: e.target.value });

    const input = e.currentTarget;
    const filter = input.value.toLowerCase().trim();

    const filtetContacts = this.state.contacts.filter(item => {
      return item.name.includes(filter.toLowerCase().trim());
    });

    console.log(filtetContacts);
    console.log(this.state.contacts);
    // this.setState({ contacts: filtetContacts });
  };

  render() {
    console.log();
    return (
      <>
        <h1>Phonebook</h1>
        <h2>Adding contact</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="contactName">Write down a name</label>
          <input
            id="contactName"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="contactTel">Write down a phone number</label>
          <input
            id="contactTel"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Your noted contacts</h2>
        <label htmlFor="contactFilter">Find contact by name</label>
        <input
          id="contactFilter"
          name="filter"
          type="text"
          value={this.state.filter}
          onChange={this.handleInputChange}
        />
        <ul>
          {this.state.contacts.map(item => {
            return (
              <li key={item.id}>
                <p>
                  {item.name}: {item.number}
                </p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
