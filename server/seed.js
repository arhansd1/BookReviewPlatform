// server/seed.js
const mongoose = require('mongoose');
const Book = require('./models/Book');

const seedBooks = async () => {
  await mongoose.connect('mongodb://localhost:27017/book-review-app');
  
  await Book.deleteMany({});
  
  await Book.insertMany([
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A story of wealth and love in the 1920s.",
      coverImage: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      coverImage: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg"
    }
  ]);
  
  console.log("Database seeded!");
  mongoose.connection.close();
};

seedBooks();