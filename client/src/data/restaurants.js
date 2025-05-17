export const restaurants = [
  {
    id: 1,
    name: "Blank Street Coffee",
    rating: 4.2,
    address: "1284 3rd Ave, New York, NY 10021",
    description: "Coffee shop with sustainable beans, pastries, and breakfast items.",
    priceRange: "$1–10",
    website: "https://www.blankstreet.com/",
    menu: [
      { id: 1, name: "Cold Brew", tags: [] },
      { id: 2, name: "Almond Croissant", tags: [] },
      { id: 3, name: "Iced Matcha Tea", tags: [] },
      { id: 4, name: "Blueberry Muffin", tags: [] }
    ],
    deals: [],
  },
];

// Filter functions for restaurant data
export const filterByDiet = (restaurants, dietType) => {
  return restaurants.filter(restaurant => 
    restaurant.menu.some(item => 
      item.tags && item.tags.includes(dietType.toLowerCase())
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
    restaurant.description.toLowerCase().includes(searchTerm) ||
    restaurant.menu.some(item => item.name.toLowerCase().includes(searchTerm))
  );
};