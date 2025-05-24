import React from 'react';
import './CalendarView.css';

const calendarDays = [
  { day: 'Mon', date: 25 },
  { day: 'Tue', date: 26 },
  { day: 'Wed', date: 27, appointments: ['09:00', '11:00'] },
  { day: 'Thu', date: 28, appointments: ['13:00'] },
  { day: 'Fri', date: 29, appointments: ['15:00'] },
  { day: 'Sat', date: 30 },
  { day: 'Sun', date: 31 }
];

const appointmentCards = [
  {
    title: 'Dentist',
    timeRange: '08:00 - 11:00 AM',
    doctor: 'Dr. Smith',
    date: 'Oct 27',
    type: 'primary'
  },
  {
    title: 'Physiotherapy Appointment',
    timeRange: '11:30 AM - 01:00 PM',
    doctor: 'Dr. Lee',
    date: 'Oct 29',
    type: 'secondary'
  }
];

function CalendarView() {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h3>May 2025</h3>
        <div className="calendar-days">
          {calendarDays.map((day, idx) => (
            <div key={idx} className={`calendar-day ${day.appointments ? 'has-appointment' : ''}`}>
              <span className="day">{day.day}</span>
              <span className="date">{day.date}</span>
              {day.appointments &&
                day.appointments.map((time, i) => (
                  <span key={i} className="dot"></span>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="appointments-section">
        <h4>The Upcoming Schedule</h4>
        <div className="appointment-list">
          {appointmentCards.map((item, idx) => (
            <div key={idx} className={`appointment-card ${item.type}`}>
              <h5>{item.title}</h5>
              <p>{item.timeRange}</p>
              <span>{item.doctor}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
