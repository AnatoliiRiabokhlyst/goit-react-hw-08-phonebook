import React from 'react';
import PropTypes from 'prop-types';
import s from './FormContacts.module.css';

const FormContacts = ({ handleSubmit, handleChange, name, number }) => {
  return (
    <form className={s.phonebook} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number:
        <input
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
};
FormContacts.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default FormContacts;
