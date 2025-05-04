let restaurant = {
    name: "Joe's Pizza",
    rating: 4.9,
    logo: "assets/images/joes-pizza-logo.png",
    foods: [
      { name: "Cheese Pizza" },
      { name: "Buffalo Wings" },
      { name: "Garlic Knots" },
      { name: "Calzone" }
    ],
    reviews: []
  };
  
  function renderRestaurant() {
    const container = document.getElementById('restaurantDetails');
    container.innerHTML = `
      <div class="restaurant-header">
        <img src="${restaurant.logo}" class="restaurant-logo" alt="${restaurant.name}" onerror="this.src='assets/images/default-logo.png';" />
        <div>
          <h2>${restaurant.name}</h2>
          <p>⭐ ${restaurant.rating}/5</p>
        </div>
      </div>
      <h3>Menu</h3>
      <div>
        ${restaurant.foods.map(food => `<div class="food-item">${food.name}</div>`).join('')}
      </div>
    `;
  }
  
  function addReview() {
    const input = document.getElementById('reviewInput');
    const reviewText = input.value.trim();
    if (reviewText === "") return;
  
    restaurant.reviews.push(reviewText);
    input.value = "";
    renderReviews();
  }
  
  function renderReviews() {
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = restaurant.reviews.map(r => `<div class="review">${r}</div>`).join('');
  }
  
  window.onload = () => {
    renderRestaurant();
    renderReviews();
  };