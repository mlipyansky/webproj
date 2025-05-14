// src/pages/Search.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { restaurants, searchRestaurants } from '../data/restaurants';
import '../styles/Search.css';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(restaurants);

  const dietaryOptions = [
    { value: 'halal', label: 'Halal' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'gluten-free', label: 'Gluten-Free' }
  ];

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    // If search term is not empty, filter restaurants
    if (term.trim() !== '') {
      const results = searchRestaurants(restaurants, term);
      setSearchResults(results);
    } else {
      // If search term is empty, show all restaurants or apply only filters
      setSearchResults(restaurants);
    }
  };

  const toggleFilter = () => {
    setFilterModalOpen(!filterModalOpen);
  };

  const toggleFilterOption = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const applyFilters = () => {
    if (activeFilters.length === 0) {
      // If no filters are active, just apply the search term
      if (searchTerm.trim() !== '') {
        setSearchResults(searchRestaurants(restaurants, searchTerm));
      } else {
        setSearchResults(restaurants);
      }
    } else {
      // Apply filters
      let filtered = restaurants;
      
      // Apply search term if present
      if (searchTerm.trim() !== '') {
        filtered = searchRestaurants(filtered, searchTerm);
      }
      
      // Filter restaurants that have at least one food item matching all selected dietary requirements
      filtered = filtered.filter(restaurant => 
        activeFilters.every(filter => 
          restaurant.foods.some(food => 
            food.tags && food.tags.includes(filter.toLowerCase())
          )
        )
      );
      
      setSearchResults(filtered);
    }
    
    // Close the filter modal after applying
    setFilterModalOpen(false);
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <div className="search-bar-wrapper">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search restaurants or foods..." 
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="filter-button" onClick={toggleFilter}>
            <span role="img" aria-label="filter">⚙️</span>
          </button>
        </div>
        
        <div className={`filter-modal ${filterModalOpen ? 'open' : ''}`}>
          <h3>Dietary Filters</h3>
          <div className="filter-options">
            {dietaryOptions.map(option => (
              <label key={option.value} className="filter-option">
                <input 
                  type="checkbox" 
                  checked={activeFilters.includes(option.value)}
                  onChange={() => toggleFilterOption(option.value)}
                />
                {option.label}
              </label>
            ))}
          </div>
          <button className="apply-filters-button" onClick={applyFilters}>
            Apply Filters
          </button>
        </div>
      </div>
      
      <div className="search-results">
        <p className="results-count">{searchResults.length} results found</p>
        
        <div className="results-list">
          {searchResults.length > 0 ? (
            searchResults.map(restaurant => (
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
                  {restaurant.foods.slice(0, 4).map(food => (
                    <div key={food.id || food.name} className="food-item">
                      {food.name}
                    </div>
                  ))}
                </div>
                
                <Link to={`/restaurant/${restaurant.id}`} className="view-details-btn">
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p className="no-results">No restaurants found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;