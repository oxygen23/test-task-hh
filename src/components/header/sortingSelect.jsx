import Select from 'react-select';
import styles from './header.module.sass';
const SortingSelect = ({ fnSorting }) => {
  const options = [
    { value: 'relevance', label: 'По популярности' },
    { value: 'newest', label: 'По нивизне' },
  ];

  return (
    <div className={styles.category_wrapper}>
      Категория
      <Select
        defaultValue={options[0]}
        options={options}
        onChange={(e) => fnSorting(e.value)}
        className={styles.select}
      />
    </div>
  );
};

export default SortingSelect;
