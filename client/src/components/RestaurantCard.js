import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <div className="restaurant-header">
        <div>
          <h3>{restaurant.name}</h3>
          <p><span role="img" aria-label="rating">⭐</span> {restaurant.rating}/5</p>
        </div>
      </div>
      <div className="food-grid">
        {restaurant.menu.map((item) => (
          <div key={item.id} className="food-item">
            {item.name}
          </div>
        ))}
      </div>
      <Link to={`/restaurant/${restaurant.id}`} className="view-more">
        View Details
      </Link>
    </div>
  );
}

export default RestaurantCard;