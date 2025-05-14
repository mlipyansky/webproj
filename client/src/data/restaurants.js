// src/data/restaurants.js
export const restaurants = [
  {
    id: 1,
    name: "Joe's Pizza",
    rating: 4.9,
    logo: "images/joes-pizza-logo.png",
    location: {
      address: "123 Campus Rd",
      distance: "0.2 miles from campus",
      coordinates: { lat: 40.768, lng: -73.964 }
    },
    priceRange: "$",
    foods: [
      { id: 1, name: "Cheese Pizza", price: 3.99, tags: ["vegetarian"] },
      { id: 2, name: "Buffalo Wings", price: 5.99, tags: ["halal"] },
      { id: 3, name: "Garlic Knots", price: 2.99, tags: ["vegetarian"] },
      { id: 4, name: "Calzone", price: 6.99, tags: ["vegetarian"] }
    ],
    deals: ["10% off with student ID"],
    reviews: []
  },
  // Add other restaurants with similar structure
];

// Add common data filtering functions
export const filterByDiet = (restaurants, dietType) => {
  return restaurants.filter(restaurant => 
    restaurant.foods.some(food => 
      food.tags && food.tags.includes(dietType.toLowerCase())
    )
  );
};

export const filterByPrice = (restaurants, priceRange) => {
  return restaurants.filter(restaurant => restaurant.priceRange === priceRange);
};

export const searchRestaurants = (restaurants, term) => {
  const searchTerm = term.toLowerCase();
  return restaurants.filter(restaurant => 
    restaurant.name.toLowerCase().includes(searchTerm) ||
    restaurant.foods.some(food => food.name.toLowerCase().includes(searchTerm))
  );
};