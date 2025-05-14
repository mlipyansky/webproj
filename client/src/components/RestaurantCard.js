import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <div className="restaurant-header">
        <img src={restaurant.logo} className="restaurant-logo" alt={restaurant.name} />
        <div>
          <h3>{restaurant.name}</h3>
          <p>⭐ {restaurant.rating}/5</p>
        </div>
      </div>
      <div className="food-grid">
        {restaurant.foods.map((food, index) => (
          <div key={index} className="food-item">
            {food.name}
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