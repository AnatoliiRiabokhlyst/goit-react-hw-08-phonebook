import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

const ContactsList = ({ contacts, handleDelete }) => {
  return (
    <div className={s.contacts}>
      <ul className={s.list}>
        {contacts.map(contact => (
          <li key={contact.id}>
            <div className={s.contact}>
              <span className={s.contact_name}>{contact.name} -</span>
              <span className={s.contact_number}>{contact.number}</span>
              <button
                className={s.btn}
                onClick={() => handleDelete(contact.id)}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ContactsList;
