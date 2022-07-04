import React from "react";
import PropTypes from "prop-types";


const Filter = ({ filter, handleFilter }) => {
    return (
        <label>Search contacts
<input
    onChange={handleFilter}
    value={filter}
    type="text"
    name="filter"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    />
</label>
    );
}
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
}
export default Filter;