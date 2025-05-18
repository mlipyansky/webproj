// src/pages/MealPlanning.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import '../styles/MealPlanning.css';

function MealPlanning() {
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [targetCalories, setTargetCalories] = useState('');
  const [mealPlan, setMealPlan] = useState(null);
  const [error, setError] = useState('');
  const [totalCalories, setTotalCalories] = useState(0);

  // Get unique cuisines from restaurant data
  const uniqueCuisines = [...new Set(restaurants
    .filter(r => r.cuisine) // Filter out restaurants without cuisine
    .map(r => r.cuisine))]
    .sort(); // Sort alphabetically

  // Update total calories when meal plan changes
  useEffect(() => {
    if (mealPlan && mealPlan.foods) {
      const total = mealPlan.foods.reduce((sum, food) => 
        sum + (food.calories || 0), 0);
      setTotalCalories(total);
    }
  }, [mealPlan]);

  // Enhanced food selection algorithm
  const selectFoodsForCalorieTarget = (restaurantsWithCuisine, targetCals) => {
    const calorieTarget = parseInt(targetCals, 10);
    const selectedFoods = [];
    let currentTotal = 0;
    
    // Create a food pool with restaurant information embedded
    const foodPool = restaurantsWithCuisine.flatMap(restaurant => 
      restaurant.menu.map(item => ({
        ...item,
        restaurantId: restaurant.id,
        restaurantName: restaurant.name,
        restaurantLogo: restaurant.logo || null
      }))
    );
    
    // Sort foods by calories (ascending) for better selection
    const sortedFoods = [...foodPool].sort((a, b) => 
      (a.calories || 0) - (b.calories || 0)
    );
    
    // Try to find a starter/appetizer (lower calories)
    for (const food of sortedFoods) {
      if ((food.calories || 0) <= calorieTarget * 0.3 && selectedFoods.length < 1) {
        selectedFoods.push(food);
        currentTotal += (food.calories || 0);
        break;
      }
    }
    
    // Try to find a main dish (higher calories)
    for (const food of [...sortedFoods].reverse()) {
      if (!selectedFoods.some(f => f.id === food.id) && 
          currentTotal + (food.calories || 0) <= calorieTarget * 0.8 &&
          selectedFoods.length < 2) {
        selectedFoods.push(food);
        currentTotal += (food.calories || 0);
        if (currentTotal >= calorieTarget * 0.6) break;
      }
    }
    
    // Add complementary items to get close to the target
    for (const food of sortedFoods) {
      if (selectedFoods.length >= 4) break;
      
      if (!selectedFoods.some(f => f.id === food.id) && 
          currentTotal + (food.calories || 0) <= calorieTarget * 1.1) {
        selectedFoods.push(food);
        currentTotal += (food.calories || 0);
      }
    }
    
    // If we couldn't make a good selection, just take some appropriate items
    if (selectedFoods.length < 2) {
      // Clear and start over with a simpler approach
      selectedFoods.length = 0;
      currentTotal = 0;
      
      // Just pick reasonable foods
      for (const food of sortedFoods) {
        if (selectedFoods.length >= 4) break;
        if (!selectedFoods.some(f => f.id === food.id)) {
          selectedFoods.push(food);
          currentTotal += (food.calories || 0);
        }
      }
    }
    
    return selectedFoods;
  };

  const createMealPlan = () => {
    // Clear previous data
    setError('');
    setMealPlan(null);
    setTotalCalories(0);
    
    // Validate inputs
    if (!selectedCuisine) {
      setError('Please select a cuisine type.');
      return;
    }
    
    if (!targetCalories || isNaN(parseInt(targetCalories, 10)) || parseInt(targetCalories, 10) <= 0) {
      setError('Please enter a valid calorie target.');
      return;
    }
    
    // Filter restaurants by cuisine
    const restaurantsWithCuisine = restaurants.filter(restaurant => 
      restaurant.cuisine === selectedCuisine
    );
    
    if (restaurantsWithCuisine.length === 0) {
      setError(`No restaurants found with ${selectedCuisine} cuisine.`);
      return;
    }
    
    // Check if we have menu items with this cuisine
    const hasMenuItems = restaurantsWithCuisine.some(r => r.menu && r.menu.length > 0);
    
    if (!hasMenuItems) {
      setError(`No menu items found for ${selectedCuisine} cuisine.`);
      return;
    }
    
    // Select foods based on calorie target with restaurant info preserved
    const selectedFoods = selectFoodsForCalorieTarget(restaurantsWithCuisine, targetCalories);
    
    if (selectedFoods.length === 0) {
      setError(`Could not create a meal plan for ${selectedCuisine} cuisine with ${targetCalories} calories.`);
      return;
    }
    
    // Create the meal plan with the selected foods
    setMealPlan({
      cuisine: selectedCuisine,
      targetCalories: parseInt(targetCalories, 10),
      foods: selectedFoods
    });
  };

  // Get restaurant details for display
  const getRestaurantDetails = (food) => {
    if (food.restaurantId) {
      const restaurant = restaurants.find(r => r.id === food.restaurantId);
      if (restaurant) {
        return {
          id: restaurant.id,
          name: restaurant.name,
        };
      }
    }
    
    // If we don't have an embedded restaurant ID or can't find it
    return {
      id: null,
      name: food.restaurantName || "Unknown Restaurant",
    };
  };

  return (
    <div className="meal-planning-container">
      <h1>Meal Planner</h1>
      <p className="intro-text">
        Plan a balanced meal based on cuisine type and calorie targets.
        Our intelligent algorithm will suggest dishes that match your preferences.
      </p>
      
      <div className="meal-planner-form">
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
        
        <div className="form-group">
          <label htmlFor="caloriesInput">Target Calories:</label>
          <input 
            type="number" 
            id="caloriesInput" 
            placeholder="e.g., 2000" 
            value={targetCalories} 
            onChange={(e) => setTargetCalories(e.target.value)}
            min="1"
          />
        </div>
        
        <button onClick={createMealPlan} className="create-plan-btn">
          Create Meal Plan
        </button>
        
        {error && <p className="error-message">{error}</p>}
      </div>
      
      {mealPlan && (
        <div className="meal-plan-result">
          <h2>{mealPlan.cuisine} Cuisine Meal Plan</h2>
          <div className="calorie-summary">
            <p>Target: {mealPlan.targetCalories} calories</p>
            <p>Meal Total: <span className={totalCalories > mealPlan.targetCalories * 1.1 ? "over-calories" : ""}>{totalCalories} calories</span></p>
            <div className="calorie-bar-container">
              <div 
                className="calorie-bar" 
                style={{ 
                  width: `${Math.min(100, (totalCalories / mealPlan.targetCalories) * 100)}%`,
                  backgroundColor: totalCalories > mealPlan.targetCalories * 1.1 ? '#e53935' : 
                                 totalCalories > mealPlan.targetCalories ? '#ff9800' : '#4caf50'
                }}
              ></div>
            </div>
          </div>
          
          <div className="meal-foods-grid">
            {mealPlan.foods.map((food, index) => {
              const restaurant = getRestaurantDetails(food);
              return (
                <div key={index} className="meal-food-item">
                  <h3>{food.name}</h3>
                  
                  <div className="restaurant-info">
                    <p className="restaurant-source">
                      from {restaurant.id ? 
                        <Link to={`/restaurant/${restaurant.id}`}>{restaurant.name}</Link> : 
                        restaurant.name}
                    </p>
                    
                  </div>
                  
                  <div className="food-details">
                    {food.price && (
                      <p className="food-price">${food.price.toFixed(2)}</p>
                    )}
                    {food.calories && (
                      <p className="food-calories">
                        <span role="img" aria-label="calories">🔥</span> {food.calories} cal
                      </p>
                    )}
                  </div>
                  
                  {food.tags && food.tags.length > 0 && (
                    <div className="food-tags">
                      {food.tags.map(tag => (
                        <span key={tag} className="food-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                  
                  {restaurant.id && (
                    <Link to={`/restaurant/${restaurant.id}`} className="view-restaurant-btn">
                      View Restaurant
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default MealPlanning;