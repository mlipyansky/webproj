import React from 'react';
import { restaurants } from '../data/restaurants';
import RestaurantCard from '../components/RestaurantCard';

function Home() {
  return (
    <div className="home-container">
      <section className="intro">
        <h2>Find the best food options near campus</h2>
        <p>Hungry Hawks helps you discover great places to eat in and around your campus</p>
      </section>
      
      <section className="featured-restaurants">
        <h2>Featured Restaurants</h2>
        <div className="restaurant-list">
          {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;