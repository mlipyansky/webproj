// src/components/Map.js
import React, { useEffect, useRef } from 'react';
import { restaurants } from '../data/restaurants';
import '../styles/Map.css';

function Map() {
  const mapRef = useRef(null);
  const googleMapRef = useRef(null);

  useEffect(() => {
    // Load Google Maps API script
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      // Hunter College coordinates
      const hunterCollege = { lat: 40.7687, lng: -73.9646 };
      
      googleMapRef.current = new window.google.maps.Map(mapRef.current, {
        center: hunterCollege,
        zoom: 15,
      });

      // Add marker for Hunter College
      new window.google.maps.Marker({
        position: hunterCollege,
        map: googleMapRef.current,
        title: "Hunter College",
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        }
      });

      // Add markers for each restaurant
      restaurants.forEach(restaurant => {
        if (restaurant.location && restaurant.location.coordinates) {
          const marker = new window.google.maps.Marker({
            position: restaurant.location.coordinates,
            map: googleMapRef.current,
            title: restaurant.name
          });

          // Add click event for showing restaurant info
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div class="map-info-window">
                <h3>${restaurant.name}</h3>
                <p>⭐ ${restaurant.rating}/5</p>
                ${restaurant.location.address ? `<p>${restaurant.location.address}</p>` : ''}
                <a href="/restaurant/${restaurant.id}">View Details</a>
              </div>
            `
          });

          marker.addListener('click', () => {
            infoWindow.open(googleMapRef.current, marker);
          });
        }
      });
    });

    return () => {
      // Clean up by removing the script
      const googleMapScriptTag = document.querySelector(`script[src^="https://maps.googleapis.com/maps/api/js"]`);
      if (googleMapScriptTag) {
        googleMapScriptTag.remove();
      }
    };
  }, []);

  return (
    <div className="map-container">
      <h2>Find Restaurants Near Campus</h2>
      <div ref={mapRef} className="google-map"></div>
    </div>
  );
}

export default Map;