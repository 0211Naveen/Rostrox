import React from "react";
import "./AttendanceFeatures.css";

import { FaCheck } from "react-icons/fa";

import dashboardImg from "../../../assets/AttendanceFeatures.webp";

const leftFeatures = [
    "Kiosk Mode (Touchless)",
    "Selfie Attendance with Geofencing",
    "Face Mask Screening",
    "Multiple In-Out",
    "Integration with HRMS/Payroll",
    "GPS Location Capture",
    "Reports and Analytics",
    "Admin Dashboard (Web & Mobile)",
];

const rightFeatures = [
    "Offline Attendance",
    "Shift Scheduling",
    "Time off (Leave) Management",
    "Reports and Analytics",
    "Staff Directory",
    "Govt. ID capture",
    "ESS (Employee self-service)",
    "Contract Staff Use Case",
];

export default function AttendanceFeatures() {
    return (
        <section className="attendance-features-section">
            <div className="container attendance-features-container">

                {/* HEADING */}

                <div className="attendance-features-heading">
                    <h2>
                        Transparency and Control in your
                        <br />
                        Attendance and Timesheet Process
                    </h2>
                </div>


                {/* CONTENT */}

                <div className="attendance-features-content">

                    {/* LEFT SIDE */}

                    <div className="attendance-features-left">

                        <h3>
                            100+ powerful yet easy-to-use features to streamline
                            Staff Attendance
                        </h3>


                        <div className="attendance-features-grid">

                            <ul className="attendance-feature-list">
                                {leftFeatures.map((item, index) => (
                                    <li key={index}>
                                        <FaCheck />

                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>


                            <ul className="attendance-feature-list">
                                {rightFeatures.map((item, index) => (
                                    <li key={index}>
                                        <FaCheck />

                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </div>


                    {/* RIGHT IMAGE */}

                    <div className="attendance-features-image">
                        <img
                            src={dashboardImg}
                            alt="Attendance Admin Dashboard"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}