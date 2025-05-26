
import React, { useState } from 'react';

const BookFilters = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search books..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default BookFilters;
