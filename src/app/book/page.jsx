import Image from 'next/image';
import styles from './book.module.sass';
import Link from 'next/link';

const Book = ({ dataProps }) => {
  return (
    <Link href={`book/${dataProps.id}`} className={styles.bookItem}>
      <div className={styles.bookItem_img_wrapper}>
        <Image
          src={dataProps?.volumeInfo?.imageLinks?.thumbnail}
          alt='Обложка книги'
          width={170}
          height={250}
          className={styles.bookItem_img}
        />
      </div>
      <div className={styles.bookItem_info}>
        <p className={styles.bookItem_info_category}>
          {dataProps?.volumeInfo?.categories}
        </p>
        <p className={styles.bookItem_info_title}>
          {dataProps?.volumeInfo?.title}
        </p>
        {dataProps?.volumeInfo?.authors?.length > 1 ? (
          dataProps?.volumeInfo?.authors?.map((author, index) => (
            <p className={styles.bookItem_info_authors} key={index}>
              {author}
            </p>
          ))
        ) : (
          <span className={styles.bookItem_info_authors}>
            {dataProps?.volumeInfo?.authors}
          </span>
        )}
      </div>
    </Link>
  );
};

export default Book;
