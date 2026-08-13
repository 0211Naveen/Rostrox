import React from "react";
import {
  FaShieldAlt,
  FaChartBar,
  FaRobot,
  FaCheck,
} from "react-icons/fa";

import "./AISection.css";

export default function AISection() {
  const cards = [
    {
      icon: <FaShieldAlt />,
      title: "AI Time Guard",
      description:
        "Automated anomaly detection for workforce time data.",
      features: [
        "Flags unusual clock-in patterns",
        "Detects suspicious location behavior",
        "Highlights overtime risks",
        "Surfaces correction anomalies",
      ],
      button: "Explore AI Time Guard",
    },
    {
      icon: <FaChartBar />,
      title: "AI Analytics",
      description:
        "AI-driven workforce insights on demand",
      features: [
        "Get instant insights to your query",
        "Understand trends across sites",
        "Generate charts and reports",
        "Explore data without manual analysis",
      ],
      button: "Explore AI Analytics",
    },
    {
      icon: <FaRobot />,
      title: "AI Manager Assist",
      description:
        "Context-aware summaries and action alerts for managers.",
      features: [
        "Daily timesheet insights",
        "Risk highlights before payroll",
        "Smart exception summaries",
        "Actionable recommendations",
      ],
      button: "",
      comingSoon: true,
    },
  ];

  return (
    <section className="ai-section">

      <div className="container">

        <div className="text-center ai-heading">

          <h2>Meet Rostrox  AI</h2>

          <p>
            Rostrox  AI is the intelligence layer built into Rostrox .
            It continuously analyzes attendance data to detect
            anomalies, surface insights, and assist managers
            before payroll is processed.
          </p>

        </div>

        <div className="row g-4">

          {cards.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={index}>

              <div className="ai-card">

                <div className="ai-title">

                  <span className="ai-icon">
                    {card.icon}
                  </span>

                  <h4>{card.title}</h4>

                </div>

                <hr />

                <p className="ai-desc">
                  {card.description}
                </p>

                <ul>

                  {card.features.map((item, i) => (
                    <li key={i}>
                      <FaCheck className="check" />
                      {item}
                    </li>
                  ))}

                </ul>

                {card.comingSoon ? (
                  <div className="coming-soon">
                    Coming Soon...
                  </div>
                ) : (
                  <button className="ai-btn">
                    {card.button}
                  </button>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}