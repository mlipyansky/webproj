function createMealPlan() {
    const selectedDiet = document.getElementById('dietSelect').value;
    const calories = document.getElementById('caloriesInput').value;
    const mealResults = document.getElementById('mealResults');
    mealResults.innerHTML = '';
  
    if (!selectedDiet || !calories) {
      alert('Please select a diet and input calories.');
      return;
    }
  
    const dietFoods = restaurants.flatMap(r =>
      r.foods.filter(f => f.tags && f.tags.includes(selectedDiet.toLowerCase()))
    );
  
    const selectedFoods = dietFoods.slice(0, 4);
  
    if (selectedFoods.length === 0) {
      mealResults.innerHTML = `<p>No foods found for this diet.</p>`;
      return;
    }
  
    const mealBlock = document.createElement('div');
    mealBlock.innerHTML = `
      <h3>${selectedDiet.charAt(0).toUpperCase() + selectedDiet.slice(1)} Meal Plan (~${calories} calories)</h3>
      <div>
        ${selectedFoods.map(food => `<div class="food-item">${food.name}</div>`).join('')}
      </div>
    `;
    mealResults.appendChild(mealBlock);
  }