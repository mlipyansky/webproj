// src/pages/RestaurantDetail.js
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
        <img 
          src={restaurant.logo} 
          alt={restaurant.name} 
          className="restaurant-detail-logo"
          onError={(e) => {e.target.src = 'images/default-logo.png'}}
        />
        <div className="restaurant-detail-info">
          <h1>{restaurant.name}</h1>
          <div className="rating">⭐ {restaurant.rating}/5</div>
          {restaurant.location && (
            <p className="address">{restaurant.location.address} • {restaurant.location.distance}</p>
          )}
          {restaurant.priceRange && (
            <p className="price-range">Price Range: {restaurant.priceRange}</p>
          )}
        </div>
      </div>

      <section className="menu-section">
        <h2>Menu</h2>
        <div className="food-detail-grid">
          {restaurant.foods.map(food => (
            <div key={food.id} className="food-detail-item">
              <h3>{food.name}</h3>
              {food.price && <p className="price">${food.price}</p>}
              {food.tags && food.tags.length > 0 && (
                <div className="tags">
                  {food.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="deals-section">
        {restaurant.deals && restaurant.deals.length > 0 && (
          <>
            <h2>Special Deals</h2>
            <ul className="deals-list">
              {restaurant.deals.map((deal, index) => (
                <li key={index} className="deal-item">{deal}</li>
              ))}
            </ul>
          </>
        )}
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