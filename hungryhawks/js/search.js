
const restaurants = [
    {
      name: "Joe's Pizza",
      rating: 4.9,
      logo: "assets/images/joes-pizza-logo.png",
      foods: [
        { name: "Cheese Pizza", tags: ["vegetarian"] },
        { name: "Buffalo Wings", tags: ["halal"] }
      ]
    },
    {
      name: "Sushi Time",
      rating: 4.8,
      logo: "assets/images/sushi-logo.png",
      foods: [
        { name: "California Roll", tags: ["pescetarian"] },
        { name: "Spicy Tuna", tags: ["pescetarian"] }
      ]
    }
  ];
  
  function renderRestaurants(data) {
    const container = document.getElementById('restaurant-container');
    container.innerHTML = '';
  
    data.forEach(r => {
      const block = document.createElement('div');
      block.className = 'restaurant-block';
      block.innerHTML = `
        <div class="restaurant-header">
          <img src="${r.logo}" class="restaurant-logo" alt="${r.name}" onerror="this.src='assets/images/default-logo.png';" />
          <div><strong>${r.name}</strong><br>⭐ ${r.rating}/5</div>
        </div>
        <div class="food-grid">
          ${r.foods.map(food => `<div class="food-item">${food.name}</div>`).join('')}
        </div>
      `;
      container.appendChild(block);
    });
  
    document.querySelector('.results-text').textContent = `${data.length} results found`;
  }
  
  function toggleFilter() {
    const modal = document.getElementById('filterModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  }
  
  function applyFilters() {
    const checkboxes = document.querySelectorAll('.filter-modal input[type="checkbox"]');
    const activeFilters = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value.toLowerCase());
  
    const filtered = restaurants.filter(r =>
      activeFilters.every(filter =>
        r.foods.some(food => food.tags && food.tags.includes(filter))
      )
    );
  
    renderRestaurants(filtered);
    toggleFilter();
  }
  
  document.querySelector('.search-bar').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase();
    const results = restaurants.filter(r => r.name.toLowerCase().includes(term));
    renderRestaurants(results);
  });
  
  window.onload = () => renderRestaurants(restaurants);