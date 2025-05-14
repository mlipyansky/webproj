// src/pages/MapView.js
import React from 'react';
import Map from '../components/Map';
import '../styles/MapView.css';

function MapView() {
  return (
    <div className="map-view-container">
      <h1>Find Restaurants Near Campus</h1>
      <p className="map-intro">
        Explore all the dining options around Hunter College on this interactive map.
        Click on any marker to see restaurant details and access their menu.
      </p>
      
      <Map />
    </div>
  );
}

export default MapView;