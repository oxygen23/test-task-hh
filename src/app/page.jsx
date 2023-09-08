'use client';
import { Header } from '@/components';
import { useGetBooksbyQueryesQuery } from '@/redux/api/api';
import { useState } from 'react';
import styles from './book/book.module.sass';
import Book from './book/page';
export default function Home() {
  const [inputValue, setInputValue] = useState('js');
  const [category, setCategory] = useState('');
  const [sorting, setSorting] = useState('relevance');
  const [pagination, setPagination] = useState(0);
  const queryParameters = {
    inputValue: inputValue,
    category: category,
    sortingBy: sorting,
    pagination: pagination,
  };
  const { data, isLoading, error, isFetching } =
    useGetBooksbyQueryesQuery(queryParameters);

  const handleInputValue = (value) => {
    setInputValue(value);
  };
  const handleCategories = (value) => {
    setCategory(value);
  };
  const handleSorting = (value) => {
    setSorting(value);
  };

  const handleViewMore = () => {
    setPagination((prevPagination) => prevPagination + 10);
  };
  const handleViewLess = () => {
    setPagination((prevPagination) => prevPagination - 10);
  };

  return (
    <>
      <Header
        fnInput={handleInputValue}
        fnCategories={handleCategories}
        fnSorting={handleSorting}
      />
      <div className={styles.container}>
        {error ? (
          <div>Возникла ошибка, перезагрузите страницу</div>
        ) : isLoading || isFetching ? (
          <>Loading...</>
        ) : data ? (
          <div className={styles.homeBooksWrapper}>
            {data?.items?.map((item, index) => (
              <Book key={index} dataProps={item} />
            ))}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <button
                onClick={() => handleViewLess()}
                disabled={pagination <= 0 ? true : false}
                style={{
                  background: 'transparent',
                  fontSize: '25px',
                  borderRadius: '25px',
                  border: '1px solid black',
                  width: '300px',
                  height: '60px',
                }}
              >
                Предыдущая страница
              </button>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <button
                onClick={() => handleViewMore()}
                style={{
                  background: 'transparent',
                  fontSize: '25px',
                  borderRadius: '25px',
                  border: '1px solid black',
                  width: '300px',
                  height: '60px',
                }}
              >
                Следующая страница
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
