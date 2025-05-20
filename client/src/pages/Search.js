// client/src/pages/Search.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { restaurants, searchRestaurants } from '../data/restaurants';
import '../styles/Search.css';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(restaurants);

  // Get unique cuisines from restaurant data
  const uniqueCuisines = [...new Set(restaurants.map(r => r.cuisine))].filter(Boolean);

  // Handle search input change
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    // If search term is not empty, filter restaurants
    if (term.trim() !== '') {
      const results = searchRestaurants(restaurants, term);
      applyFilters(results);
    } else {
      // If search term is empty, show all restaurants or apply only filters
      applyFilters(restaurants);
    }
  };

  const toggleFilter = () => {
    setFilterModalOpen(!filterModalOpen);
  };

  const handleCuisineChange = (e) => {
    setSelectedCuisine(e.target.value);
  };

  const applyFilters = (restaurantList = null) => {
    let filtered = restaurantList || (searchTerm.trim() !== '' ? 
      searchRestaurants(restaurants, searchTerm) : restaurants);
    
    // Apply cuisine filter if selected
    if (selectedCuisine) {
      filtered = filtered.filter(restaurant => 
        restaurant.cuisine === selectedCuisine
      );
    }
    
    setSearchResults(filtered);
    setFilterModalOpen(false);
  };

  // Apply filters when cuisine changes
  useEffect(() => {
    applyFilters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCuisine]);

  return (
    <div className="search-container">
      <div className="search-header">
        <div className="search-bar-wrapper">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search restaurants, cuisine, or foods..." 
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="filter-button" onClick={toggleFilter}>
            <span role="img" aria-label="filter">⚙️</span>
          </button>
        </div>
        
        <div className={`filter-modal ${filterModalOpen ? 'open' : ''}`}>
          <h3>Cuisine Filters</h3>
          <div className="filter-options">
            <select 
              value={selectedCuisine} 
              onChange={handleCuisineChange}
              className="cuisine-select"
            >
              <option value="">All Cuisines</option>
              {uniqueCuisines.map(cuisine => (
                <option key={cuisine} value={cuisine}>{cuisine}</option>
              ))}
            </select>
          </div>
          <button className="apply-filters-button" onClick={() => applyFilters()}>
            Apply Filters
          </button>
        </div>

        {/* Show selected cuisine as a visible filter tag */}
        {selectedCuisine && (
          <div className="active-filters">
            <div className="filter-tag">
              {selectedCuisine}
              <button 
                className="remove-filter" 
                onClick={() => setSelectedCuisine('')}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="search-results">
        <p className="results-count">
          {searchResults.length} {searchResults.length === 1 ? 'restaurant' : 'restaurants'} found
          {selectedCuisine && ` for ${selectedCuisine}`}
        </p>
        
        <div className="results-list">
          {searchResults.length > 0 ? (
            searchResults.map(restaurant => (
              <div key={restaurant.id} className="restaurant-card">
                <div className="restaurant-header">
                
                  <div className="restaurant-info">
                    <h3>{restaurant.name}</h3>
                    <div className="rating">
                      <span role="img" aria-label="rating">⭐</span> {restaurant.rating}/5
                      {restaurant.cuisine && (
                        <span className="cuisine-tag">{restaurant.cuisine}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="food-grid">
                  {restaurant.menu.slice(0, 4).map(item => (
                    <div key={item.id || item.name} className="food-item">
                      {item.name}
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