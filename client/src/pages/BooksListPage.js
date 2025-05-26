
import React, { useState, useEffect } from 'react';
import { getBooks } from '../services/bookService';
import BookCard from '../components/books/BookCard';
import Pagination from '../components/ui/Pagination';
import BookFilters from '../components/books/BookFilters';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import Error from '../components/ui/Error';

const BooksListPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0
  });

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const data = await getBooks(pagination.page, pagination.limit);
        setBooks(data.books);
        setPagination(prev => ({ ...prev, total: data.total }));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchBooks();
  }, [pagination.page, pagination.limit]);  // Added pagination.limit as a dependency

  if (loading) return <LoadingSpinner />;
  if (error) return <Error message={error} />;

  return (
    <div className="container">
      <BookFilters onFilter={(search) => {
        setPagination(prev => ({ ...prev, page: 1 }));
        // implement this in getBooks later
      }} />
      <div className="books-grid">
        {books.map(book => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
      <Pagination
        currentPage={pagination.page}
        totalPages={Math.ceil(pagination.total / pagination.limit)}
        onPageChange={(page) => setPagination(prev => ({ ...prev, page }))}
      />
    </div>
  );
};

export default BooksListPage;
