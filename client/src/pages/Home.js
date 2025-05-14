// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h2>Find the best food options near campus</h2>
        <p>Hungry Hawks helps you discover great places to eat in and around your campus</p>
      </section>
      
      <section className="featured-section">
        <h2 className="section-title">Featured Restaurants</h2>
        <div className="restaurant-grid">
          {restaurants.map(restaurant => (
            <div key={restaurant.id} className="restaurant-card">
              <div className="restaurant-header">
                <img 
                  src={restaurant.logo} 
                  alt={restaurant.name} 
                  className="restaurant-logo"
                  onError={(e) => {e.target.src = 'images/default-logo.png'}}
                />
                <div className="restaurant-info">
                  <h3>{restaurant.name}</h3>
                  <div className="rating">⭐ {restaurant.rating}/5</div>
                </div>
              </div>
              
              <div className="food-grid">
                {restaurant.foods.map(food => (
                  <div key={food.id} className="food-item">
                    {food.name}
                  </div>
                ))}
              </div>
              
              <Link to={`/restaurant/${restaurant.id}`} className="view-details-btn">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;