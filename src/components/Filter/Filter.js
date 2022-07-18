import { useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { changeFilter } from 'redux/contacts/contacts-actions';

function Filter() {
  const dispatch = useDispatch();

  return (
    <div className={s.filter}>
      <label htmlFor="filter" className={s.title}>
        {' '}
        Find contacts by name
      </label>
      <input
        className={s.input}
        id="filter"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}

export default Filter;
