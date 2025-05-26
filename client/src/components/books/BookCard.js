// client/src/components/books/BookCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <Link to={`/books/${book._id}`}>
        {book.coverImage && (
          <img src={book.coverImage} alt={book.title} className="book-cover" />
        )}
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </Link>
    </div>
  );
};

export default BookCard;