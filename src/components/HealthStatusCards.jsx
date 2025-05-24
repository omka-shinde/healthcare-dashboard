import React from 'react';
import './HealthStatusCards.css';

const mockCards = [
  { title: "Lungs", date: "2025-05-21", status: "Needs Attention", color: "red" },
  { title: "Teeth", date: "2025-05-18", status: "Good", color: "green" },
  { title: "Bone", date: "2025-05-15", status: "Good", color: "green" }
];

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      {mockCards.map((card, index) => (
        <div key={index} className="health-card">
          <div className="card-header">
            <h4>{card.title}</h4>
            <span
              className="status-dot"
              style={{ backgroundColor: card.color }}
            ></span>
          </div>
          <p className="card-date">Checked on: {card.date}</p>
          <p className="card-status" style={{ color: card.color }}>
            {card.status}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
