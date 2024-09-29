import styles from './SearchBox.module.css';
const SearchBox = ({ searchValue, handleSearchChange }) => {
  return (
    <input className={styles.searchBox}
      type="text"
      placeholder="Пошук за ім'ям..."
      value={searchValue}
      onChange={(e) => handleSearchChange(e.target.value)}
    />
  );
};

export default SearchBox;