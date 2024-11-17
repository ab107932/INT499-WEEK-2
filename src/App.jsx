import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import StreamList from './pages/StreamList';  
import Movies from './pages/Movies';         
import Cart from './pages/Cart';             
import About from './pages/About'; 
import './App.css'; // Ensure you import the CSS for active link styles


function NavBar() {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/" activeClassName="active-link">StreamList</NavLink></li>
        <li><NavLink to="/movies" activeClassName="active-link">Movies</NavLink></li>
        <li><NavLink to="/cart" activeClassName="active-link">Cart</NavLink></li>
        <li><NavLink to="/about" activeClassName="active-link">About</NavLink></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
