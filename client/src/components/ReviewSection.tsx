
import React, { useState, useEffect } from 'react';

const ReviewSection = () => {
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    // this fetches reviews for our pizza shops (API call or mock data)
    setReviews([
      { user: 'John', review: 'Best pizza ever!' },
      { user: 'Sarah', review: 'Loved the crust!' },
    ]);
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.user}:</strong> {review.review}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewSection;
