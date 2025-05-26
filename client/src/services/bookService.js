// src/services/bookService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/books';

export const getBooks = async (page = 1, limit = 10, search = '') => {
  try {
    const response = await axios.get(
      `${API_URL}?page=${page}&limit=${limit}&search=${search}`
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Add other API calls here
export const addReview = async (bookId, review) => {
  // Implementation...
};