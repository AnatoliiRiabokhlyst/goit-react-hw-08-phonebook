import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import Notification from '../Notification';
import s from './ContactList.module.css';

export default function ContactList({ contacts, deletContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, phone, id }) => (
        <li key={id} className={s.item}>
          <ContactItem
            name={name}
            number={phone}
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
