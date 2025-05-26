import { createContext, useContext, useReducer } from 'react';

const BookContext = createContext();

const bookReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return { ...state, books: action.payload };
    case 'ADD_REVIEW':
      return {
        ...state,
        books: state.books.map(book => 
          book.id === action.payload.bookId 
            ? { ...book, reviews: [...book.reviews, action.payload.review] }
            : book
        )
      };
    // other cases
    default:
      return state;
  }
};

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, {
    books: [],
    currentBook: null,
    isLoading: false,
    error: null
  });

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);