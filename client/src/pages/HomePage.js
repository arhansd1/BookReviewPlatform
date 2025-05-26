// pages/HomePage.js
import React from 'react';
import BookCard from '../components/books/BookCard';
import './HomePage.css';

const featuredBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "/images/great-gatsby.jpg",
    rating: 4.5
  },
  // Add more books as needed
];

function HomePage() {
  return (
    <div className="home-page">
      <h2>Featured Books</h2>
      <div className="books-grid">
        {featuredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;