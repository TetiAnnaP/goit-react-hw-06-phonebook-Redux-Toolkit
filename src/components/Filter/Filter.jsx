import { useSelector } from 'react-redux';
import css from './Fiter.module.css';

const Filter = ({ handleFilterChange }) => {
  const filter = useSelector(state => state.contacts.filter);
  const handleByFilter = e => {
    const value = e.target.value;
    handleFilterChange(value.trim().toLowerCase());
  };

  return (
    <>
      <p>Find contact by name</p>
      <input
        className={css.inputName}
        type="text"
        name="filter"
        value={filter}
        onChange={handleByFilter}
      />
    </>
  );
};

export default Filter;
