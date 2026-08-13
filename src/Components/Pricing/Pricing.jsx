import React from "react";
import "./Pricing.css";
import { FaCheck, FaPlus } from "react-icons/fa";

const timeCapture = [
  "AI Time Guard - Automated anomaly detection",
  "AI Face Recognition",
  "GPS Geofencing for location-based punches",
  "Mobile, Tablet & Auto Clock-in Options",
  "Offline Time Capture",
  "Job-based Time Tracking",
  "Spoof & Proxy Punch Detection",
  "Time Correction & Approval Workflows",
  "Basic Timesheets, Policies & Reports",
  "Multi-site Dashboard & Controls",
];

const advanced = [
  "Everything in Capture +",
  "Shift & Job Scheduling",
  "Activity Planning & Tracking",
  "Overtime, Breaktime & Advanced Policies",
  "Advanced Reports & Insights",
  "Contractor / Agency Management",
];

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container">

        <h2 className="pricing-title">
          Transparent Pricing. Built for Multi-site Workforce.
        </h2>

        <div className="pricing-wrapper">

          <div className="pricing-card">
            <h3>Time Capture</h3>

            <p className="subtitle">
              AI-powered, foolproof time tracking for workforce
            </p>

            <div className="price">
              ₹290 <span>/user/year</span>
            </div>

            <small>+₹69000/year (base price)</small>

            <button>Book a Demo</button>

            <hr />

            <ul>
              {timeCapture.map((item, index) => (
                <li key={index}>
                  <FaCheck />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="pricing-card">
            <h3>Advanced</h3>

            <p className="subtitle">
              Complete workforce time management.
            </p>

            <div className="price">
              ₹390 <span>/user/year</span>
            </div>

            <small>+₹69000/year (base price)</small>

            <button>Book a Demo</button>

            <hr />

            <ul>
              {advanced.map((item, index) => (
                <li key={index}>
                  <FaCheck />
                  {item}
                </li>
              ))}

              <li>
                <FaPlus />
                Leave Management (Add-on) ₹60/user/year
              </li>
            </ul>
          </div>

        </div>

        <div className="enterprise-card">

          <div>
            <h3>More than 5000 staff?</h3>
            <button>Talk to Sales</button>
          </div>

          <div>
            <h4>Enterprise Plan</h4>

            <p>
              Includes everything in Advanced plus enterprise
              account management, custom contracts, billing,
              integrations and priority support.
            </p>
          </div>

        </div>

        <div className="comparison-box">
          <span>Feature list and Plan Comparison</span>
          <span>➜</span>
        </div>

      </div>
    </section>
  );
}