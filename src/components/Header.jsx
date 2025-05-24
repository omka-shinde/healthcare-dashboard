import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Healthcare<span className="dot">.</span></h1>

      <div className="search-bar">
        <span role="img" aria-label="search">🔍</span>
        <input type="text" placeholder="Search" />
      </div>

      <div className="header-icons">
        <span className="icon" role="img" aria-label="notifications">🔔</span>
        <span className="avatar">👤 Omkar</span>
        <button className="add-button">＋</button>
      </div>
    </header>
  );
}

export default Header;
