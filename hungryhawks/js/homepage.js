let displayed = 4;

function renderRestaurants(count) {
  const container = document.getElementById('restaurant-container');
  container.innerHTML = '';

  for (let i = 0; i < count && i < restaurants.length; i++) {
    const r = restaurants[i];
    const block = document.createElement('div');
    block.className = 'restaurant-block';

    const foodItems = r.foods.map(food =>
      `<div class="food-item">${food.name}</div>`).join('');

    block.innerHTML = `
      <div class="restaurant-header">
        <img src="${r.logo}" class="restaurant-logo" alt="${r.name}" onerror="this.src='assets/images/default-logo.png';" />
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

window.onload = function() {
  renderRestaurants(displayed);
  initMap();
};

document.getElementById('show-more-btn').addEventListener('click', showMore);