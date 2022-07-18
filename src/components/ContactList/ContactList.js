import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import Notification from '../Notification';
import s from './ContactList.module.css';

function ContactList({ contacts, deletContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={s.item}>
          <ContactItem
            name={name}
            number={number}
            deletContact={deletContact}
            id={id}
          />
        </li>
      ))}
      {contacts.length === 0 && <Notification message={'No contacts found'} />}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletContact: PropTypes.func.isRequired,
};

export default ContactList;
