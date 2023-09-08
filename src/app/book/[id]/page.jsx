'use client';
import { useGetBookByIdQuery } from '@/redux/api/api';
import styles from '../book.module.sass';
import Image from 'next/image';
import { useState } from 'react';
const BookItem = ({ params }) => {
  const [isImageReady, setIsImageReady] = useState(false);
  const onLoadCallBack = (e) => {
    setIsImageReady(true);
    typeof onLoad === 'function' && onLoad(e);
  };

  const { data, isLoading, isFetching, error } = useGetBookByIdQuery(params.id);
  if (isLoading || isFetching) {
    return <>Загрузка...</>;
  }
  if (error) {
    return <>Возникла ошибка, перезагрузите страницу</>;
  }
  return (
    <div className={`${styles.bookItemId_wrapper} ${styles.container}`}>
      <div className={styles.bookItemId_img}>
        {!isImageReady && 'Загрузка фотографии'}
        <Image
          src={data?.volumeInfo?.imageLinks?.large}
          className={styles.bookItemId_img_item}
          width={350}
          height={500}
          alt='Обложка книги'
          onLoad={onLoadCallBack}
        />
      </div>
      <div className={styles.bookItemId_info}>
        <p className={styles.bookItemId_info_category}>
          {data?.volumeInfo?.categories}
        </p>
        <p className={styles.bookItemId_info_title}>
          {data?.volumeInfo?.title}
        </p>
        <div>
          {data?.volumeInfo?.authors?.length > 1 ? (
            data?.volumeInfo?.authors?.map((author, index) => (
              <p className={styles.bookItemId_info_authors} key={index}>
                {author}
              </p>
            ))
          ) : (
            <span className={styles.bookItemId_info_authors}>
              {data?.volumeInfo?.authors}
            </span>
          )}
        </div>
        <p className={styles.bookItemId_info_description}>
          {data?.volumeInfo?.description}
        </p>
      </div>
    </div>
  );
};

export default BookItem;
