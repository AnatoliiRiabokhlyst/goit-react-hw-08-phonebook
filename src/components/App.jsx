import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addContact, deletContact } from 'redux/contacts/contacts-actions';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const formSubmit = data => {
    if (contacts.some(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    data.id = nanoid();
    dispatch(addContact(data));
  };

  const handleDelet = id => dispatch(deletContact(id));

  return (
    <div className="section">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter />
      {contacts && (
        <ContactList contacts={contacts} deletContact={handleDelet} />
      )}
    </div>
  );
}

export { App };
