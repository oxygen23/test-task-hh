import Select from 'react-select';
import styles from './header.module.sass';
const CategoriesSelect = ({ fnCategories }) => {
  const options = [
    { value: '', label: 'All' },
    { value: 'art', label: 'Art' },
    { value: 'biography', label: 'Biography' },
    { value: 'computers', label: 'Computers' },
    { value: 'history', label: 'History' },
    { value: 'medical', label: 'Medical' },
    { value: 'poetry', label: 'Poetry' },
  ];

  return (
    <div className={styles.category_wrapper}>
      Категория
      <Select
        defaultValue={options[0]}
        options={options}
        onChange={(e) => fnCategories(e.value)}
        className={styles.select}
      />
    </div>
  );
};

export default CategoriesSelect;
