import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

function TopBar() {
  return (
    <div className="top_bar">
      <div className="search_bar">
        <input type="text" placeholder="Search books..." />
      </div>
      <h1 >Book Review Platform</h1>
      <div className="nav_icons">
        <Link to="/my-reviews">My Reviews</Link>
        <Link to="/profile"><img src="./views/profile.jpg" alt="Profile" /></Link>
      </div>
    </div>
  );
}

export default TopBar;
