// src/data/restaurants.js
export const restaurants = [
  {
    id: 1,
    name: "Joe's Pizza",
    rating: 4.9,
    logo: "/main_logo.png",
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
  {
    id: 2,
    name: "Sushi Time",
    rating: 4.8,
    logo: "/main_logo.png",
    location: {
      address: "456 Lexington Ave",
      distance: "0.4 miles from campus",
      coordinates: { lat: 40.766, lng: -73.967 }
    },
    priceRange: "$$",
    foods: [
      { id: 5, name: "California Roll", price: 7.99, tags: ["pescetarian"] },
      { id: 6, name: "Spicy Tuna Roll", price: 8.99, tags: ["pescetarian"] },
      { id: 7, name: "Salmon Sashimi", price: 9.99, tags: ["pescetarian"] },
      { id: 8, name: "Shrimp Tempura", price: 10.99, tags: ["pescetarian"] }
    ],
    deals: ["Free miso soup with $20 purchase"],
    reviews: []
  },
  {
    id: 3,
    name: "Veggie Delight",
    rating: 4.6,
    logo: "/main_logo.png",
    location: {
      address: "789 Park Ave",
      distance: "0.5 miles from campus",
      coordinates: { lat: 40.770, lng: -73.961 }
    },
    priceRange: "$$",
    foods: [
      { id: 9, name: "Quinoa Salad", price: 8.99, tags: ["vegan", "gluten-free"] },
      { id: 10, name: "Avocado Toast", price: 6.99, tags: ["vegan"] },
      { id: 11, name: "Veggie Wrap", price: 7.99, tags: ["vegan"] },
      { id: 12, name: "Smoothie", price: 5.99, tags: ["vegan", "gluten-free"] }
    ],
    deals: ["15% student discount on Mondays"],
    reviews: []
  },
  {
    id: 4,
    name: "Burger Joint",
    rating: 4.5,
    logo: "/main_logo.png",
    location: {
      address: "321 Third Ave",
      distance: "0.3 miles from campus",
      coordinates: { lat: 40.765, lng: -73.960 }
    },
    priceRange: "$$",
    foods: [
      { id: 13, name: "Classic Burger", price: 8.99, tags: [] },
      { id: 14, name: "Bacon Burger", price: 10.99, tags: [] },
      { id: 15, name: "Fries", price: 3.99, tags: ["vegetarian", "gluten-free"] },
      { id: 16, name: "Milkshake", price: 4.99, tags: ["vegetarian"] }
    ],
    deals: ["Free drink with burger purchase"],
    reviews: []
  }
];

// Filter functions for restaurant data
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