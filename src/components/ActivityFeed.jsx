import React from 'react';
import './ActivityFeed.css';

function ActivityFeed() {
  const activityBars = [
    { day: 'Mon', height: '60%' },
    { day: 'Tue', height: '100%' },
    { day: 'Wed', height: '40%' },
    { day: 'Thu', height: '70%' },
    { day: 'Fri', height: '90%' },
    { day: 'Sat', height: '50%' },
    { day: 'Sun', height: '30%' },
  ];

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3>Activity</h3>
        <span className="subtext">Expected results vs actual</span>
      </div>
      <div className="activity-chart">
        {activityBars.map((bar, index) => (
          <div className="bar-container" key={index}>
            <div className="bar-wrapper">
              <div
                className="bar"
                style={{ height: bar.height }}
              ></div>
            </div>
            <span className="day-label">{bar.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
