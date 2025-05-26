// pages/HomePage.js
import React from 'react';
import BookCard from '../components/books/BookCard';
import './HomePage.css';

const featuredBooks = [
  {
    id: 1,
    title: " Great Gatsby",
    author: " Scott Fitzgerald",
    coverImage: "/images/great-gatsby.jpg",
    rating: 4
  },

  {
    id:2,
    title: "Harry Potter",
    author:"harry ",
    coverImage:/images/harry_potter.jpg",,
    rating:0.5
  },
  //temporary

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
