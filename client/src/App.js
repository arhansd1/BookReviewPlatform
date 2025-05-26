import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopBar from './components/TopBar';
import HomePage from './pages/HomePage';
import BooksListPage from './pages/BooksListPage';
import BookDetailsPage from './pages/BookDetailsPage';
import ProfilePage from './pages/ProfilePage';
import MyReviewsPage from './pages/MyReviewsPage';

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksListPage />} />
        <Route path="/books/:id" element={<BookDetailsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/my-reviews" element={<MyReviewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
