import React from 'react';
import './SimpleAppointmentCard.css';

function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="simple-appointment-card">
      <div className="appointment-icon">{icon}</div>
      <div className="appointment-info">
        <h4 className="appointment-title">{title}</h4>
        <p className="appointment-time">{time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
