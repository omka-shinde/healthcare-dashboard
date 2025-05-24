import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.css';

const scheduleData = [
  {
    day: 'On Thursday',
    appointments: [
      { title: 'Cardiologist', time: '10:00 AM', icon: '❤️' },
      { title: 'Health Checkup Complete', time: '11:30 AM', icon: '✅' }
    ]
  },
  {
    day: 'On Saturday',
    appointments: [
      { title: 'Neurologist', time: '09:00 AM', icon: '🧠' },
      { title: 'Ophthalmologist', time: '02:00 PM', icon: '👁️' }
    ]
  }
];

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h2 className="schedule-title">Upcoming Schedule</h2>
      {scheduleData.map((daySchedule, index) => (
        <div key={index} className="schedule-day">
          <h4 className="schedule-day-title">{daySchedule.day}</h4>
          <div className="day-appointments">
            {daySchedule.appointments.map((a, i) => (
              <SimpleAppointmentCard
                key={i}
                title={a.title}
                time={a.time}
                icon={a.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;
