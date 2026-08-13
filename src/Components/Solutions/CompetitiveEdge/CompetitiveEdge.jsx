import React from "react";
import "./CompetitiveEdge.css";

import { FaCheck } from "react-icons/fa";

import logo from "../../../assets/Rostrox.png";

const edgeFeatures = [
    "First ever solution designed specifically for Contract and Multi-Site Workforce",
    "Centralized and Foolproof solution",
    "Anywhere and Instant: Face and Mobile based. No Custom hardware.",
    "Extensive policy framework: Customizable Solutions to comply with labor law and regulations",
    "Feature-rich yet lean product",
];

export default function CompetitiveEdge() {
    return (
        <section className="competitive-edge-section">
            <div className="container competitive-edge-container">
                <div className="competitive-edge-layout">

                    {/* LEFT CONTENT */}

                    <div className="competitive-edge-content">
                        <h2>
                            Defining a Competitive Edge
                        </h2>

                        <p>
                            Prevent Revenue Leaks and Save HR Hours with a seamless
                            time and attendance solution.
                        </p>
                    </div>


                    {/* RIGHT CARD */}

                    <div className="competitive-edge-card">
                        <div className="competitive-edge-logo">
                            <img src={logo} alt="Truein" />
                        </div>

                        <div className="competitive-edge-list">
                            {edgeFeatures.map((item, index) => (
                                <div
                                    className="competitive-edge-item"
                                    key={index}
                                >
                                    <div className="competitive-edge-check">
                                        <FaCheck />
                                    </div>

                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>

                        <button className="competitive-edge-btn">
                            Schedule a Demo
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}