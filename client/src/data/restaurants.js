// src/data/restaurants.js
export const restaurants = [
    {
      id: 1,
      name: "Joe's Pizza",
      rating: 4.9,
      logo: "https://via.placeholder.com/60",
      foods: [
        { name: "Cheese Pizza", tags: ["vegetarian"] },
        { name: "Buffalo Wings", tags: ["halal"] },
        { name: "Garlic Knots", tags: ["vegetarian"] },
        { name: "Calzone", tags: ["vegetarian"] }
      ],
      reviews: []
    },
    {
      id: 2,
      name: "Sushi Time",
      rating: 4.8,
      logo: "https://via.placeholder.com/60",
      foods: [
        { name: "California Roll", tags: ["pescetarian"] },
        { name: "Spicy Tuna Roll", tags: ["pescetarian"] },
        { name: "Salmon Sashimi", tags: ["pescetarian"] },
        { name: "Shrimp Tempura", tags: ["pescetarian"] }
      ],
      reviews: []
    },
    {
      id: 3,
      name: "Veggie Delight",
      rating: 4.6,
      logo: "https://via.placeholder.com/60",
      foods: [
        { name: "Quinoa Salad", tags: ["vegan", "gluten-free"] },
        { name: "Avocado Toast", tags: ["vegan"] },
        { name: "Veggie Wrap", tags: ["vegan"] },
        { name: "Smoothie", tags: ["vegan", "gluten-free"] }
      ],
      reviews: []
    },
    {
      id: 4,
      name: "Burger Joint",
      rating: 4.5,
      logo: "https://via.placeholder.com/60",
      foods: [
        { name: "Classic Burger", tags: [] },
        { name: "Bacon Burger", tags: [] },
        { name: "Fries", tags: ["vegetarian", "gluten-free"] },
        { name: "Milkshake", tags: ["vegetarian"] }
      ],
      reviews: []
    }
  ];