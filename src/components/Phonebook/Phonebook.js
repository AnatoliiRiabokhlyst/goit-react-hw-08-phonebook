import React from "react";
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import s from "./PhoneBook.module.css";
// import NameInput from "../NameInput";
// import NumberInput from "../NumberInput";


class PhoneBook extends React.Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            })
        ).isRequired,
    };
    state = {
        contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
        name: '',
        number: ''
    }
        handleSubmit = (e) => {
            e.preventDefault();
            const newContact = {
                id: nanoid(),
                name: this.state.name,
                number: this.state.number
            }
            this.setState({
                contacts: [...this.state.contacts, newContact],
                name: '',
                number: ''
            });
        }
        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        handleDelete = (id) => {
            this.setState({
                contacts: this.state.contacts.filter(contact => contact.id !== id)
            });
        }
        handleFilter = (e) => {
            this.setState({
                filter: e.target.value
            });
        }

    render () {
        const normilizeFilter = this.state.filter.toLowerCase()
    const filterContacts = this.state.contacts.filter(contact=>contact.name.toLowerCase().includes(normilizeFilter))
    return (
        <section className={s.section}>
<form className={s.phonebook} onSubmit={this.handleSubmit}>
    <label>Name: 
    <input
    onChange={this.handleChange}
    value={this.state.name}
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
/></label>
<label>Number:
<input
    onChange={this.handleChange}
    value={this.state.number}
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
/>
</label>
<button type="submit" className={s.button} >Add contact</button>
</form>
<h2>Contacts</h2>
<label>Search contacts
<input
    onChange={this.handleFilter}
    value={this.state.filter}
    type="text"
    name="filter"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    />
</label>
<ul className={s.contacts}>
    {filterContacts.map(contact => (
        <li key={contact.name}>
            <span>{contact.name}</span>
            <span>{contact.number}</span>
        </li>
    ))}
</ul>
</section>
    )
}
}
export default PhoneBook