// pages/BookDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetailsPage.css';

function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    // Fetch book details and reviews from API or mock data
    const fetchBook = async () => {
      // Replace with actual API call
      const mockBook = {
        id: id,
        title: "Sample Book",
        author: "Sample Author",
        description: "This is a sample book description.",
        coverImage: "/images/sample-book.jpg"
      };
      setBook(mockBook);
      
      const mockReviews = [
        { id: 1, user: "User1", review: "Great book!", rating: 5 },
        { id: 2, user: "User2", review: "Enjoyed it", rating: 4 }
      ];
      setReviews(mockReviews);
    };
    
    fetchBook();
  }, [id]);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      const userReview = {
        id: reviews.length + 1,
        user: "CurrentUser", // Replace with actual user
        review: newReview,
        rating: 4 // You can add a rating input
      };
      setReviews([...reviews, userReview]);
      setNewReview('');
      // Here you would also save to your database/backend
    }
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-details">
      <div className="book-info">
        <img src={book.coverImage} alt={book.title} />
        <h2>{book.title}</h2>
        <h3>by {book.author}</h3>
        <p>{book.description}</p>
      </div>
      
      <div className="reviews-section">
        <h3>Reviews</h3>
        <form onSubmit={handleSubmitReview}>
          <textarea 
            value={newReview} 
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review..."
          />
          <button type="submit">Submit Review</button>
        </form>
        
        <div className="reviews-list">
          {reviews.map(review => (
            <div key={review.id} className="review">
              <h4>{review.user}</h4>
              <p>{review.review}</p>
              <div>Rating: {review.rating}/5</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookDetailsPage;