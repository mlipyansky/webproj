import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import '../styles/RestaurantDetail.css';

function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Find the restaurant by ID
    const foundRestaurant = restaurants.find(r => r.id === parseInt(id));
    if (foundRestaurant) {
      setRestaurant(foundRestaurant);
      setReviews(foundRestaurant.reviews || []);
    }
  }, [id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review.trim() === '') return;
    
    const newReview = {
      id: reviews.length + 1,
      text: review,
      date: new Date().toLocaleDateString()
    };
    
    setReviews([...reviews, newReview]);
    setReview('');
  };

  if (!restaurant) {
    return <div className="loading">Loading restaurant details...</div>;
  }

  return (
    <div className="restaurant-detail-container">
      <div className="restaurant-detail-header">
        <div className="restaurant-detail-info">
          <h1>{restaurant.name}</h1>
          <div className="rating">
            <span role="img" aria-label="rating">⭐</span> {restaurant.rating}/5
          </div>
          <p className="address">{restaurant.address}</p>
          <p className="price-range">Price Range: {restaurant.priceRange}</p>
          <p className="cuisine">
          <span role="img" aria-label="cuisine">🍽️</span> Cuisine:
          <span className="cuisine-tag detail-tag">{restaurant.cuisine}</span>
          </p>
          <p className="description">{restaurant.description}</p>
          <p className="deals">{restaurant.deals}</p>
          {restaurant.website && (
  <p className="website">
    <span role="img" aria-label="website">🌐</span>{' '}
    <a 
      href={restaurant.website} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="website-link"
    >
      Visit Website
    </a>
  </p>
)}
        </div>
      </div>

      <section className="menu-section">
  <h2>Featured Menu Items</h2>
  <div className="food-detail-grid">
    {restaurant.menu.map(item => (
      <div key={item.id} className="food-detail-item">
        <h3>{item.name}</h3>
        <div className="food-detail-info">
          {item.price && <p className="price">${item.price.toFixed(2)}</p>}
          {item.calories && (
            <p className="calories">
               
              {item.calories} cal
            </p>
          )}
        </div>
        {item.tags && item.tags.length > 0 && (
          <div className="tags">
            {item.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
</section>

    

      <section className="reviews-section">
        <h2>Reviews</h2>
        
        <form onSubmit={handleReviewSubmit} className="review-form">
          <textarea 
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review..."
            className="review-input"
          />
          <button type="submit" className="submit-review-btn">Submit Review</button>
        </form>
        
        <div className="reviews-list">
          {reviews.length === 0 ? (
            <p>No reviews yet. Be the first to leave a review!</p>
          ) : (
            reviews.map((review, index) => (
              <div key={index} className="review-item">
                <p className="review-text">{review.text}</p>
                {review.date && <p className="review-date">{review.date}</p>}
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default RestaurantDetail;