import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import FormContacts from '../FormContacts';
import Filter from '../Filter';
import ContactsList from '../ContactsList';
import s from './PhoneBook.module.css';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? initialValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};
function PhoneBook() {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useLocalStorage('filter', '');
  const [name, setIsName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      alert('Контакт с таким именем уже существует');
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    setContacts([...contacts, newContact]);
    setIsName('');
    setNumber('');
  };
  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setIsName(value);
    } else {
      setNumber(value);
    }
  };
  const handleDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  const handleFilter = e => {
    setFilter(e.currentTarget.value.toLowerCase());
  };

  const normalizeFilter = filter.toLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
  return (
    <div className={s.section}>
      <h1 className={s.title}>Phonebook</h1>
      <FormContacts
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        name={name}
        number={number}
      />
      <h2 className={s.title}>Contacts</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <ContactsList contacts={filterContacts} handleDelete={handleDelete} />
    </div>
  );
}

export default PhoneBook;
