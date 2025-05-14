import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import your page components
import Home from './pages/Home';
import Login from './pages/Login';
import MealPlanner from './pages/MealPlanning';
import RestaurantPage from './pages/RestaurantPage';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Hungry Hawks</h1>
          <nav>
            <Link to="/">Home </Link>
            <Link to="/search">Search </Link>
            <Link to="/meal-planning">Meal Planning </Link>
            <Link to="/login">Register/Login </Link>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/meal-planning" element={<MealPlanner />} />
            <Route path="/restaurant/:id" element={<RestaurantPage />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;