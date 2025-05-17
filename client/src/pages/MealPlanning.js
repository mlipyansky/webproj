// src/pages/MealPlanning.js
import React, { useState } from 'react';
import { restaurants } from '../data/restaurants';
import { filterByDiet } from '../data/restaurants';
import '../styles/MealPlanning.css';

function MealPlanning() {
  const [selectedDiet, setSelectedDiet] = useState('');
  const [calories, setCalories] = useState('');
  const [mealPlan, setMealPlan] = useState(null);
  const [error, setError] = useState('');

  const createMealPlan = () => {
    if (!selectedDiet || !calories) {
      setError('Please select a diet and input calories.');
      return;
    }
    
    setError('');
    
    // Filter restaurants by selected diet
    const filteredRestaurants = filterByDiet(restaurants, selectedDiet);
    
    if (filteredRestaurants.length === 0) {
      setError(`No restaurants found with ${selectedDiet} options.`);
      return;
    }
    
    // Get all foods matching the diet
    const dietFoods = filteredRestaurants.flatMap(r => 
      r.menu.filter(item => item.tags && item.tags.includes(selectedDiet.toLowerCase()))
    );
    
    if (dietFoods.length === 0) {
      setError(`No foods found for ${selectedDiet} diet.`);
      return;
    }
    
    // For simplicity, select up to 4 foods
    const selectedFoods = dietFoods.slice(0, 4);
    
    setMealPlan({
      diet: selectedDiet,
      targetCalories: calories,
      foods: selectedFoods
    });
  };

  return (
    <div className="meal-planning-container">
      <h1>Meal Planner</h1>
      <p className="intro-text">
        Plan your meals based on dietary preferences and calorie targets.
        This tool helps you find suitable food options from nearby restaurants.
      </p>
      
      <div className="meal-planner-form">
        <div className="form-group">
          <label htmlFor="dietSelect">Select Diet:</label>
          <select 
            id="dietSelect" 
            value={selectedDiet} 
            onChange={(e) => setSelectedDiet(e.target.value)}
          >
            <option value="">Select Diet</option>
            <option value="halal">Halal</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten-Free</option>
          </select>
        </div>
        
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
          <h2>{mealPlan.diet.charAt(0).toUpperCase() + mealPlan.diet.slice(1)} Meal Plan</h2>
          <p>Target: ~{mealPlan.targetCalories} calories</p>
          
          <div className="meal-foods-grid">
            {mealPlan.foods.map((food, index) => (
              <div key={index} className="meal-food-item">
                <h3>{food.name}</h3>
                <p className="restaurant-source">
                  from {restaurants.find(r => 
                    r.menu.some(item => item.id === food.id)
                  )?.name || 'Unknown Restaurant'}
                </p>
                <div className="food-tags">
                  {food.tags.map(tag => (
                    <span key={tag} className="food-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MealPlanning;