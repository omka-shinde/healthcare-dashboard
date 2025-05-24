import React from 'react';
import './Sidebar.css';

const navLinks = [
  "Dashboard", "History", "Calendar", "Appointments",
  "Statistics", "Tests", "Chat", "Support", "Setting"
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">General</h2>
      <ul className="sidebar-links">
        {navLinks.map((link, index) => (
          <li key={index} className="sidebar-link">
            <span className="link-icon">📌</span>
            <span className="link-text">{link}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
