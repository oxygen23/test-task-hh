import { CategoriesSelect, SearchInput, SortingSelect } from '..';
import bg from '../../../public/assets/books.jpg';
import styles from './header.module.sass';

const Header = ({ fnInput, fnCategories, fnSorting }) => {
  
  return (
    <div
      className={styles.header}
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className={`${styles.container} ${styles.headerContainer}`}>
        <div className={styles.upBlock}>
          <span>
            <h1>Search for books</h1>
          </span>
          <SearchInput fnInput={fnInput} />
        </div>
        <div className={styles.bottomBlock}>
          <CategoriesSelect fnCategories={fnCategories} />
          <SortingSelect fnSorting={fnSorting} />
        </div>
      </div>
    </div>
  );
};

export default Header;
