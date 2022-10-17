import { Component } from 'react';

export class ContactList extends Component {
  state = {
    filter: '',
  };

  handleInputChange = e => {
    const contactFilter = e.currentTarget.value.toLowerCase().trim();
    this.setState({ filter: contactFilter });

    const filterContacts = this.state.contacts.filter(item => {
      return item.name.toLowerCase().includes(this.state.filter);
    });

    console.log(filterContacts);
    return this.setState({ contacts: filterContacts });
  };

  render() {
    const { contacts } = this.props;
    return (
      <>
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
          {contacts.map(item => {
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
