import React from 'react';
import './AnatomySection.css';
import { anatomyIndicators } from '../data/healthStatus';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <div className="anatomy-card">
        <div className="section-header">
          <h3>Health Overview</h3>
        </div>
        <div className="anatomy-image-container">
          <img
            src="https://cdn.pixabay.com/photo/2024/09/26/09/58/anatomy-9075807_1280.jpg"
            alt="Human Anatomy"
            className="anatomy-image"
          />
          {anatomyIndicators.map((indicator, index) => (
            <div
              key={index}
              className="health-indicator"
              style={{
                top: indicator.position.top,
                left: indicator.position.left,
                borderColor: indicator.color,
                color: indicator.color,
              }}
            >
              {indicator.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnatomySection;
