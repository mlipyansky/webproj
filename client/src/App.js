import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import MealPlanning from './pages/MealPlanning';
import RestaurantDetail from './pages/RestaurantDetail';
import Login from './pages/Login';
import MapView from './pages/MapView';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/meal-planning" element={<MealPlanning />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/map" element={<MapView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;