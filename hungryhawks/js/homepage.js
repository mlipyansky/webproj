let displayed = 4;

function renderRestaurants(count) {
  const container = document.getElementById('restaurant-container');
  container.innerHTML = '';

  for (let i = 0; i < count && i < restaurants.length; i++) {
    const r = restaurants[i];
    const block = document.createElement('div');
    block.className = 'restaurant-block';

    const foodItems = r.foods.map(food =>
      `<div class="food-item">
        <img src="${food.image}" alt="${food.name}" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>`).join('');

    block.innerHTML = `
      <div class="restaurant-header">
        <img src="${r.logo}" class="restaurant-logo" alt="${r.name}" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 1rem;" />
        <div><strong>${r.name}</strong><br>⭐ ${r.rating}/5</div>
      </div>
      <div class="food-grid">${foodItems}</div>
    `;

    container.appendChild(block);
  }
}

function showMore() {
  displayed += 4;
  renderRestaurants(displayed);
  if (displayed >= restaurants.length) {
    document.getElementById('show-more-btn').style.display = 'none';
  }
}

document.getElementById('show-more-btn').addEventListener('click', showMore);
window.onload = function() {
  renderRestaurants(displayed);
  initMap();
};

function initMap() {
  const hunterCollege = { lat: 40.7687, lng: -73.9646 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: hunterCollege
  });

  new google.maps.Marker({
    position: hunterCollege,
    map: map,
    title: "Hunter College"
  });
}
