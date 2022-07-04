import React from "react";
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import FormContacts from "../FormContacts";
import Filter from "../Filter";
import ContactsList from "../ContactsList";
import s from "./PhoneBook.module.css";



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
            if (this.state.contacts.some(contact => contact.name === this.state.name)) {
                alert('Контакт с таким именем уже существует');
                return;
            }
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
    const normalizeFilter = this.state.filter.toLowerCase()
    const filterContacts = this.state.contacts.filter(contact=>contact.name.toLowerCase().includes(normalizeFilter))
    return (
        <div className={s.section}>
        <h1 className={s.title}>Phonebook</h1>
        <FormContacts
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            name={this.state.name}
            number={this.state.number}
        />
<h2 className={s.title}>Contacts</h2>
<Filter filter={this.state.filter} handleFilter={this.handleFilter} />
<ContactsList contacts={filterContacts} handleDelete={this.handleDelete}/>
</div>
    )
}
}
export default PhoneBook