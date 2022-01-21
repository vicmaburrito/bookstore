import React from 'react';
import { useSelector } from 'react-redux';
import Book from './CreateNewBook';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="container">
      <ul>
        {
          books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              category={book.category}
              title={book.title}
              author={book.author}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default Books;
