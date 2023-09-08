'use client';
import { useState } from 'react';
import styles from './header.module.sass';
import { AiOutlineSearch } from 'react-icons/ai';
const SearchInput = ({ fnInput }) => {
  const [inputValue, setInputValue] = useState('js');
  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.searchInput}
        placeholder='Введите название книги'
        defaultValue={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className={styles.searchButton}
        onClick={() => fnInput(inputValue)}
      >
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default SearchInput;
