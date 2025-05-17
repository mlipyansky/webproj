// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section - Enhanced */}
      <section className="hero-section">
        <h1 className="main-title">Hungry Hawks</h1>
        <h2>Find the best food options near Hunter College</h2>
        <p className="hero-description">
          Your ultimate guide to discovering delicious and affordable dining options that match your dietary preferences.
        </p>
        <div className="hero-cta">
          <Link to="/search" className="cta-button primary">Find Food Now</Link>
          <Link to="/map" className="cta-button secondary">View Map</Link>
        </div>
      </section>
      
      {/* About Section - New */}
      <section className="about-section">
        <h2 className="section-title">What is Hungry Hawks?</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hungry Hawks is a student-designed platform specifically created for Hunter College students who want to find great food options near campus.
            </p>
            <p>
              Whether you're a freshman exploring the neighborhood for the first time, a commuter looking for a quick bite between classes, or simply tired of the cafeteria, Hungry Hawks helps you discover restaurants that match your preferences and dietary needs.
            </p>
            <h3>Key Features:</h3>
            <ul className="features-list">
              <li><span>🍽️</span> Curated restaurant listings near Hunter College</li>
              <li><span>🥗</span> Filter by dietary restrictions (vegetarian, halal, vegan, etc.)</li>
              <li><span>💰</span> View student discounts and special deals</li>
              <li><span>🗺️</span> Interactive map to find locations easily</li>
              <li><span>📝</span> Create personalized meal plans based on preferences</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Featured Restaurants Section - Existing */}
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
                  <div className="rating">
                    <span role="img" aria-label="rating">⭐</span> {restaurant.rating}/5
                  </div>
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
      
      {/* How It Works Section - New */}
      <section className="how-it-works-section">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Search or Browse</h3>
            <p>Find restaurants by name, food type, or simply browse our curated list</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Filter Your Options</h3>
            <p>Narrow down choices by dietary restrictions, price range, or distance</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Discover Details</h3>
            <p>View menus, student discounts, and location information</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Enjoy Great Food</h3>
            <p>Grab a bite with confidence knowing it meets your preferences</p>
          </div>
        </div>
      </section>
      
      {/* Call to Action - New */}
      <section className="bottom-cta-section">
        <h2>Ready to find your next favorite spot?</h2>
        <Link to="/search" className="cta-button primary">Start Exploring</Link>
      </section>
    </div>
  );
}

export default Home;