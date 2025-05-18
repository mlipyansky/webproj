export const restaurants = [
  {
    id: 1,
    name: "Blank Street Coffee",
    rating: 4.2,
    address: "1284 3rd Ave, New York, NY 10021",
    description: "Coffee shop with sustainable beans, pastries, and breakfast items.",
    priceRange: "$1-10",
    website: "https://www.blankstreet.com/",
    menu: [
      { id: 1, name: "Cold Brew", tags: [] },
      { id: 2, name: "Almond Croissant", tags: [] },
      { id: 3, name: "Iced Matcha Tea", tags: [] },
      { id: 4, name: "Blueberry Muffin", tags: [] }
    ],
    deals: "",
  },
  {
    id: 2,
    name: "Gong Cha x Poke",
    rating: 4.4,
    address: "925 Lexington Ave, New York, NY 10065",
    description: "Bubble tea and poke bowl combo spot with customizable options.",
    priceRange: "$",
    website: "https://gongchausa.com/",
    menu: [
      { id: 1, name: "Classic Milk Tea", tags: [] },
      { id: 2, name: "Spicy Tuna Poke Bowl", tags: [] },
      { id: 3, name: "Taro Slush", tags: [] },
      { id: 4, name: "Salmon Avocado Bowl", tags: [] }
    ],
    deals: "10% off with Hunter Student ID",
  },
  {
    id: 3,
    name: "Dunkin' Donuts",
    rating: 3.6,
    address: "882 Lexington Ave, New York, NY 10065",
    description: "Popular chain offering coffee and donuts.",
    priceRange: "$1-10",
    website: "https://locations.dunkindonuts.com/en/ny/new-york/882-lexington-ave/351935",
    menu: [
      { id: 1, name: "Glazed Donut", tags: [] },
      { id: 2, name: "Bacon Egg & Cheese", tags: [] },
      { id: 3, name: "Iced Coffee", tags: [] },
      { id: 4, name: "Hash Browns", tags: [] }
    ],
    deals: "10% off with Hunter Student ID",
  },
  {
    id: 4,
    name: "PJ Bernstein",
    rating: 4.4,
    address: "1215 3rd Ave, New York, NY 10021",
    description: "Classic Jewish deli with soups, sandwiches, and traditional comfort food.",
    priceRange: "$20-30",
    website: "https://pjbernstein.com/",
    menu: [
      { id: 1, name: "Matzo Ball Soup", tags: [] },
      { id: 2, name: "Reuben Sandwich", tags: [] },
      { id: 3, name: "Pastrami on Rye", tags: [] },
      { id: 4, name: "Potato Knish", tags: [] }
    ],
    deals: "",
  },
  {
    id: 5,
    name: "Korean Express",
    rating: 4.2,
    address: "807 Lexington Ave, New York, NY 10065",
    description: "Offers a variety of Korean dishes like chicken teriyaki over rice, kimbop, and bibimbap at affordable prices.",
    priceRange: "$10-20",
    website: "https://www.koreantakeout.com/",
    menu: [
      { id: 1, name: "Bibimbap", tags: [] },
      { id: 2, name: "Beef Teriyaki Bowl", tags: [] },
      { id: 3, name: "Spicy Tofu", tags: [] },
      { id: 4, name: "Kimbop Roll", tags: [] }
    ],
    deals: "",
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