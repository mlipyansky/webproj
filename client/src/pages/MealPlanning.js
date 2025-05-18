// src/pages/MealPlanning.js
import React, { useState } from 'react';
import { restaurants } from '../data/restaurants';
import '../styles/MealPlanning.css';

function MealPlanning() {
  const [mealType, setMealType] = useState('cuisine'); // 'cuisine' or 'diet'
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedDiet, setSelectedDiet] = useState('');
  const [calories, setCalories] = useState('');
  const [mealPlan, setMealPlan] = useState(null);
  const [error, setError] = useState('');

  // Get unique cuisines from restaurant data
  const uniqueCuisines = [...new Set(restaurants.map(r => r.cuisine))].filter(Boolean);

  // Filter functions
  const filterByCuisine = (restaurantList, cuisineType) => {
    return restaurantList.filter(restaurant => 
      restaurant.cuisine && restaurant.cuisine === cuisineType
    );
  };

  const filterByDietaryTags = (menuItems, dietType) => {
    return menuItems.filter(item => 
      item.tags && item.tags.includes(dietType.toLowerCase())
    );
  };

  const createMealPlan = () => {
    // Clear previous errors and meal plans
    setError('');
    setMealPlan(null);
    
    // Validate inputs
    if (mealType === 'cuisine' && !selectedCuisine) {
      setError('Please select a cuisine type.');
      return;
    }
    
    if (mealType === 'diet' && !selectedDiet) {
      setError('Please select a dietary preference.');
      return;
    }
    
    if (!calories) {
      setError('Please enter a calorie target.');
      return;
    }

    let filteredRestaurants = [];
    let selectedFoods = [];

    if (mealType === 'cuisine') {
      // Filter restaurants by cuisine
      filteredRestaurants = filterByCuisine(restaurants, selectedCuisine);
      
      if (filteredRestaurants.length === 0) {
        setError(`No restaurants found with ${selectedCuisine} cuisine.`);
        return;
      }
      
      // Get all menu items from filtered restaurants
      const cuisineFoods = filteredRestaurants.flatMap(r => r.menu);
      
      if (cuisineFoods.length === 0) {
        setError(`No foods found for ${selectedCuisine} cuisine.`);
        return;
      }
      
      // For simplicity, select up to 4 foods
      selectedFoods = cuisineFoods.slice(0, 4);
      
      setMealPlan({
        type: 'cuisine',
        cuisine: selectedCuisine,
        targetCalories: calories,
        foods: selectedFoods
      });
    } else {
      // Get all foods that match the dietary preference across all restaurants
      const dietFoods = restaurants.flatMap(r => 
        filterByDietaryTags(r.menu, selectedDiet)
      );
      
      if (dietFoods.length === 0) {
        setError(`No foods found for ${selectedDiet} dietary preference.`);
        return;
      }
      
      // For simplicity, select up to 4 foods
      selectedFoods = dietFoods.slice(0, 4);
      
      setMealPlan({
        type: 'diet',
        diet: selectedDiet,
        targetCalories: calories,
        foods: selectedFoods
      });
    }
  };

  // Get restaurant name for a menu item
  const getRestaurantName = (menuItem) => {
    const restaurant = restaurants.find(r => 
      r.menu.some(item => item.id === menuItem.id)
    );
    return restaurant ? restaurant.name : 'Unknown Restaurant';
  };

  return (
    <div className="meal-planning-container">
      <h1>Meal Planner</h1>
      <p className="intro-text">
        Plan your meals based on cuisine type or dietary preferences and calorie targets.
        This tool helps you find suitable food options from nearby restaurants.
      </p>
      
      <div className="meal-planner-form">
        <div className="toggle-container">
          <button 
            className={`toggle-btn ${mealType === 'cuisine' ? 'active' : ''}`}
            onClick={() => setMealType('cuisine')}
          >
            By Cuisine
          </button>
          <button 
            className={`toggle-btn ${mealType === 'diet' ? 'active' : ''}`}
            onClick={() => setMealType('diet')}
          >
            By Dietary Preference
          </button>
        </div>
        
        {mealType === 'cuisine' ? (
          <div className="form-group">
            <label htmlFor="cuisineSelect">Select Cuisine:</label>
            <select 
              id="cuisineSelect" 
              value={selectedCuisine} 
              onChange={(e) => setSelectedCuisine(e.target.value)}
            >
              <option value="">Select Cuisine</option>
              {uniqueCuisines.map(cuisine => (
                <option key={cuisine} value={cuisine}>{cuisine}</option>
              ))}
            </select>
          </div>
        ) : (
          <div className="form-group">
            <label htmlFor="dietSelect">Select Dietary Preference:</label>
            <select 
              id="dietSelect" 
              value={selectedDiet} 
              onChange={(e) => setSelectedDiet(e.target.value)}
            >
              <option value="">Select Preference</option>
              <option value="halal">Halal</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="gluten-free">Gluten-Free</option>
            </select>
          </div>
        )}
        
        <div className="form-group">
          <label htmlFor="caloriesInput">Target Calories:</label>
          <input 
            type="number" 
            id="caloriesInput" 
            placeholder="e.g., 2000" 
            value={calories} 
            onChange={(e) => setCalories(e.target.value)}
          />
        </div>
        
        <button onClick={createMealPlan} className="create-plan-btn">
          Create Meal Plan
        </button>
        
        {error && <p className="error-message">{error}</p>}
      </div>
      
      {mealPlan && (
        <div className="meal-plan-result">
          <h2>
            {mealPlan.type === 'cuisine' 
              ? `${mealPlan.cuisine} Cuisine Meal Plan` 
              : `${mealPlan.diet.charAt(0).toUpperCase() + mealPlan.diet.slice(1)} Meal Plan`}
          </h2>
          <p>Target: ~{mealPlan.targetCalories} calories</p>
          
          <div className="meal-foods-grid">
            {mealPlan.foods.map((food, index) => (
              <div key={index} className="meal-food-item">
                <h3>{food.name}</h3>
                <p className="restaurant-source">
                  from {getRestaurantName(food)}
                </p>
                {food.price && (
                  <p className="food-price">${food.price.toFixed(2)}</p>
                )}
                {food.tags && food.tags.length > 0 && (
                  <div className="food-tags">
                    {food.tags.map(tag => (
                      <span key={tag} className="food-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MealPlanning;