import React from 'react';
import './TestSummary.css';

const tests = [
  { name: "Lungs", date: "2025-05-21", status: "Needs Attention", color: "red" },
  { name: "Teeth", date: "2025-05-18", status: "Good", color: "green" },
  { name: "Bone", date: "2025-05-15", status: "Good", color: "green" }
];

function TestSummary() {
  return (
    <div className="test-summary">
      <h2 className="summary-title">Test Results</h2>
      <div className="test-cards">
        {tests.map((test, index) => (
          <div className="test-card" key={index}>
            <div className="test-header">
              <h3 className="test-name">{test.name}</h3>
              <span className="test-status" style={{ color: test.color }}>
                {test.status}
              </span>
            </div>
            <p className="test-date">Date: {test.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestSummary;
