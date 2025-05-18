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
  {
    id: 6,
    name: "Smashburger",
    rating: 4.2,
    address: "804 Lexington Ave, New York, NY 10065",
    description: "Fast-casual chain known for smashed burgers, fries, and shakes.",
    priceRange: "$10-20",
    website: "https://smashburger.com/locations/us/ny/new-york/804-lexington-ave",
    menu: [
      { id: 1, name: "Classic Smash Burger", tags: [] },
      { id: 2, name: "Avocado Bacon Club", tags: [] },
      { id: 3, name: "Smash Fries", tags: [] },
      { id: 4, name: "Vanilla Shake", tags: [] }
    ],
    deals: "",
  },
  {
    id: 7,
    name: "Little Italy Pizza",
    rating: 4.1,
    address: "359 E 68th St, New York, NY 10065",
    description: "Serves classic New York-style pizza slices and pies at budget-friendly prices.",
    priceRange: "$1-10",
    website: "https://www.littleitalypizza68thst.com/?utm_source=gbp",
    menu: [
      { id: 1, name: "Cheese Slice", tags: [] },
      { id: 2, name: "Pepperoni Slice", tags: [] },
      { id: 3, name: "Grandma Pie", tags: [] },
      { id: 4, name: "Garlic Knots", tags: [] }
    ],
    deals: "",
  },
  {
    id: 8,
    name: "Terry and Yaki",
    rating: 4.7,
    address: "159 E 68th St, New York, NY 10065",
    description: "Halal Asian cuisine food truck offering rice bowls, salads, and vegan options.",
    priceRange: "$10-20",
    website: "https://nyfta.org/terry-and-yaki",
    menu: [
      { id: 1, name: "Chicken Teriyaki Bowl", tags: [] },
      { id: 2, name: "Tofu Salad", tags: [] },
      { id: 3, name: "Spicy Beef Bowl", tags: [] },
      { id: 4, name: "Vegan Dumplings", tags: [] }
    ],
    deals: "",
  },
  {
    id: 9,
    name: "Hunter Delicatessen",
    rating: 3.9,
    address: "966 Lexington Ave #1, New York, NY 10021",
    description: "Popular spot among Hunter students offering affordable sandwiches with generous portions.",
    priceRange: "$10-20",
    website: "http://www.hunterdeli.net/",
    menu: [
      { id: 1, name: "Turkey Club", tags: [] },
      { id: 2, name: "Egg Salad Sandwich", tags: [] },
      { id: 3, name: "Bacon Cheeseburger", tags: [] },
      { id: 4, name: "Fries", tags: [] }
    ],
    deals: "10% off with Hunter Student ID",
  },
  {
    id: 10,
    name: "Gourmet Bagel",
    rating: 4.1,
    address: "874 Lexington Ave, New York, NY 10065",
    description: "Offers a variety of bagels, spreads, and breakfast items.",
    priceRange: "$10-20",
    website: "https://gourmetbagelny.com/",
    menu: [
      { id: 1, name: "Everything Bagel", tags: [] },
      { id: 2, name: "Lox Spread", tags: [] },
      { id: 3, name: "Egg & Cheese", tags: [] },
      { id: 4, name: "Iced Coffee", tags: [] }
    ],
    deals: "10% off with Hunter Student ID",
  },
  {
    id: 11,
    name: "Schnipper's Quality Soups",
    rating: 4.5,
    address: "849 Lexington Ave, New York, NY 10065",
    description: "Known for a variety of tasty and quality soups.",
    priceRange: "$10-20",
    website: "https://www.schnippersqualitysoups.com/",
    menu: [
      { id: 1, name: "Chicken Vegetable Soup", tags: [] },
      { id: 2, name: "New England Style Shrimp Chowder", tags: [] },
      { id: 3, name: "Terrific Tuna Melt", tags: [] },
      { id: 4, name: "Mama's Mediterranean Salad", tags: [] }
    ],
    deals: "",
  },
  {
    id: 12,
    name: "Le Pain Quotidien",
    rating: 4.0,
    address: "861 Lexington Ave, New York, NY 10065",
    description: "Bakery and cafe serving organic breads, pastries, and light fare.",
    priceRange: "$10-20",
    website: "https://www.lepainquotidien.com/us/en/locations/148:%2065th%20&%20Lexington/861-Lexington-Ave",
    menu: [
      { id: 1, name: "Avocado Toast", tags: [] },
      { id: 2, name: "Belgian Waffle", tags: [] },
      { id: 3, name: "Croissant", tags: [] },
      { id: 4, name: "Sunnyside Breakfast Bowl", tags: [] }
    ],
    deals: "",
  },
  {
    id: 13,
    name: "Chipotle",
    rating: 3.7,
    address: "1153 3rd Ave, New York, NY 10065",
    description: "Fast-casual Mexican chain known for burritos, bowls, and tacos.",
    priceRange: "$10-20",
    website: "https://locations.chipotle.com/ny/new-york/1153-third-avenue?utm_source=google&utm_medium=yext&utm_campaign=yext_listings",
    menu: [
      { id: 1, name: "Chicken Burrito", tags: [] },
      { id: 2, name: "Steak Bowl", tags: [] },
      { id: 3, name: "Barbacoa Tacos", tags: [] },
      { id: 4, name: "Chips & Guac", tags: [] }
    ],
    deals: "",
  },
  {
    id: 14,
    name: "Pizza Napoli",
    rating: 4.6,
    address: "876 Lexington Ave, New York, NY 10065",
    description: "Casual restaurant offering New York-style pizzas with a focus on fresh ingredients.",
    priceRange: "$1-10",
    website: "https://www.orderpizzanapoli.com/",
    menu: [
      { id: 1, name: "Margherita Pizza", tags: [] },
      { id: 2, name: "Penne Vodka", tags: [] },
      { id: 3, name: "Chicken Parmigiana", tags: [] },
      { id: 4, name: "Garlic Bread", tags: [] }
    ],
    deals: "",
  },
  {
    id: 15,
    name: "Eat Here Now",
    rating: 4.2,
    address: "839 Lexington Ave, New York, NY 10065",
    description: "All-day diner delivering a lengthy lineup of casual staples in a bright, booth-lined space.",
    priceRange: "$10-20",
    website: "http://www.eatherenownewyork.com/",
    menu: [
      { id: 1, name: "Eggs and Omelettes", tags: [] },
      { id: 2, name: "Gyro Souvlaki Sandwich Platter", tags: [] },
      { id: 3, name: "BLT", tags: [] },
      { id: 4, name: "Veggie Burger", tags: [] }
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