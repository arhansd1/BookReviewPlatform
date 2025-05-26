
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MyReviewsPage.css';

function MyReviewsPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch user's reviews from API or mock data
    const mockReviews = [
      {
        id: 1,
        bookId: 1,
        bookTitle: "The Great Gatsby",
        review: "Loved this classic!",
        rating: 5
      }
    ];
    setReviews(mockReviews);
  }, []);

  return (
    <div className="my-reviews">
      <h2>My Reviews</h2>
      {reviews.length === 0 ? (
        <p>You haven't reviewed any books yet.</p>
      ) : (
        <div className="reviews-list">
          {reviews.map(review => (
            <div key={review.id} className="review-item">
              <Link to={`/books/${review.bookId}`}>
                <h3>{review.bookTitle}</h3>
              </Link>
              <p>{review.review}</p>
              <div>Rating: {review.rating}/5</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyReviewsPage;
