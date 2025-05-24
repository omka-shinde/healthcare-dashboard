import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import './DashboardMainContent.css';

function DashboardMainContent() {
  return (
    <div className="dashboard-container">
      <div className="left-panel">
        <div className="dashboard-header">
          <h2>Dashboard</h2>
        </div>
        <div className="anatomy-health-wrapper">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <ActivityFeed />
      </div>

      <div className="right-panel">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
}

export default DashboardMainContent;
