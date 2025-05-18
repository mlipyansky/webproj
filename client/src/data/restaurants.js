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
  {
    id: 16,
    name: "Corrado Bread and Pastry",
    rating: 4.7,
    address: "960 Lexington Ave, New York, NY 10065",
    description: "Bakery offering a selection of breads, pastries, and coffee.",
    priceRange: "$$",
    website: "https://www.yelp.com/biz/corrado-bread-and-pastry-new-york",
    menu: [
      { id: 1, name: "Almond Croissant", tags: [] },
      { id: 2, name: "Cappuccino", tags: [] },
      { id: 3, name: "Tomato Mozzarella Sandwich", tags: [] },
      { id: 4, name: "Blueberry Muffin", tags: [] }
    ],
    deals: "",
  },
  {
    id: 17,
    name: "Mariella Pizza",
    rating: 4.4,
    address: "965 Lexington Ave, New York, NY 10065",
    description: "Neighborhood pizzeria known for its classic New York-style slices.",
    priceRange: "$1-10",
    website: "https://www.ordermariellapizzamenu.com/?utm_source=gbp",
    menu: [
      { id: 1, name: "Sicilian Slice", tags: [] },
      { id: 2, name: "White Pizza", tags: [] },
      { id: 3, name: "Garlic Knots", tags: [] },
      { id: 4, name: "Buffalo Chicken Slice", tags: [] }
    ],
    deals: "",
  },
  {
    id: 18,
    name: "Dos Toros Taqueria",
    rating: 4.3,
    address: "1115 Lexington Ave, New York, NY 10075",
    description: "Fast-casual Mexican spot offering tacos, burritos, and bowls.",
    priceRange: "$10-20",
    website: "https://www.dostoros.com/",
    menu: [
      { id: 1, name: "Carnitas Tacos", tags: [] },
      { id: 2, name: "Pollo Asado Burrito", tags: [] },
      { id: 3, name: "Rice Bowl", tags: [] },
      { id: 4, name: "Chips & Salsa", tags: [] }
    ],
    deals: "",
  },
  {
    id: 19,
    name: "Peng's Noodle Folk",
    rating: 4.7,
    address: "1016 Lexington Ave, New York, NY 10128",
    description: "Chinese restaurant serving dumplings, noodles, and stir-fry.",
    priceRange: "$20-30",
    website: "https://www.pengsnoodlefolk.com/",
    menu: [
      { id: 1, name: "Dan Dan Noodles", tags: [] },
      { id: 2, name: "Pork Dumplings", tags: [] },
      { id: 3, name: "Hot & Sour Soup", tags: [] },
      { id: 4, name: "Lo Mein", tags: [] }
    ],
    deals: "",
  },
  {
    id: 20,
    name: "Ajisai Japanese Fusion",
    rating: 4.3,
    address: "795 Lexington Ave, New York, NY 10065",
    description: "Japanese restaurant offering sushi and fusion dishes.",
    priceRange: "$20-30",
    website: "https://www.ajisaionline.com/",
    menu: [
      { id: 1, name: "Sushi Combo", tags: [] },
      { id: 2, name: "Spicy Tuna Roll", tags: [] },
      { id: 3, name: "Yaki Udon", tags: [] },
      { id: 4, name: "Shrimp Tempura", tags: [] }
    ],
    deals: "",
  },
  {
    id: 21,
    name: "Kuu Ramen",
    rating: 4.7,
    address: "1275 1st Ave, New York, NY 10065",
    description: "Casual Japanese ramen shop serving tonkotsu, miso, and spicy ramen bowls with add-ons like egg and pork.",
    priceRange: "$20-30",
    website: "https://meijinramen.wixsite.com/kuu-ues",
    menu: [
      { id: 1, name: "Tonkotsu Ramen", tags: [] },
      { id: 2, name: "Spicy Miso Ramen", tags: [] },
      { id: 3, name: "Pork Gyoza", tags: [] },
      { id: 4, name: "Seaweed Salad", tags: [] }
    ],
    deals: "",
  },
  {
    id: 22,
    name: "Taco Bell",
    rating: 3.9,
    address: "1614 2nd Ave, New York, NY 10028",
    description: "National chain serving tacos, burritos, and other Mexican-style fast food at low prices.",
    priceRange: "$10-20",
    website: "https://www.tacobell.com/food?store=035896&utm_source=yext&utm_campaign=googlelistings&utm_medium=referral&utm_term=035896&utm_content=menu&y_source=1_MTI4MzQ1MjYtNzE1LWxvY2F0aW9uLm1lbnVfdXJs",
    menu: [
      { id: 1, name: "Crunchwrap Supreme", tags: [] },
      { id: 2, name: "Chicken Quesadilla", tags: [] },
      { id: 3, name: "Bean Burrito", tags: [] },
      { id: 4, name: "Soft Taco", tags: [] }
    ],
    deals: "",
  },
  {
    id: 23,
    name: "Panda Express",
    rating: 3.8,
    address: "1277 1st Ave, New York, NY 10065",
    description: "Fast-food chain for Chinese standards, including some health-conscious options.",
    priceRange: "$",
    website: "https://www.pandaexpress.com/locations/ny/new-york/2545",
    menu: [
      { id: 1, name: "Chow Mein", tags: [] },
      { id: 2, name: "Orange Chicken", tags: [] },
      { id: 3, name: "Beef with Broccoli", tags: [] },
      { id: 4, name: "Honey Walnut Shrimp", tags: [] }
    ],
    deals: "",
  },
  {
    id: 24,
    name: "Wonder Lenox Hill",
    rating: 3.5,
    address: "888 Lexington Ave, New York, NY 10065",
    description: "The best restaurants from across the country, all in one place.",
    priceRange: "$10-20",
    website: "https://www.wonder.com/food-delivery-locations/lenox-hill?utm_source=google&utm_campaign=202407_Google_PerformanceMax_HDR_NA_All&url=https://app.wonder.com/frcfb8tfWKb&utm_source=google&utm_campaign=202407_Google_PerformanceMax_HDR_NA_All&gad_source=1&gad_campaignid=21894305889&gbraid=0AAAAABq3v3tCqiXXh5vDFDVtjgM7cnt5V&gclid=CjwKCAjw56DBBhAkEiwAaFsG-sEzL1jKaeHLp7UH7UmSQ-eECdRSRpFyITC_xRKVoeIzphPTWUmlrhoCcPMQAvD_BwE",
    menu: [
      { id: 1, name: "Tejas Barbecue", tags: [] },
      { id: 2, name: "Royal Greens", tags: [] },
      { id: 3, name: "Di Fara Pizza", tags: [] },
      { id: 4, name: "Bobby Flay Steak", tags: [] }
    ],
    deals: "Constant promotions and discounts for Hunter Students, keep an eye out!",
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