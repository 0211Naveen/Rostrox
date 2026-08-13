import React from 'react'
import "./AttendanceTools.css"
import attendanceImg from "../../../assets/AttendanceTools.webp";

import {
    FaCheck,
    FaGlobeAmericas,
    FaMapMarkerAlt,
    FaUsers,
    FaPlay,
    FaQuoteLeft,
    FaChevronDown,
    FaChevronUp,
    FaUserCheck,
    FaUserShield,
    FaCheckCircle,
    FaIdCard,
    FaPlug,
    FaChartBar,
    FaDesktop,
    FaCalendarAlt,
    FaUserCog,
    FaMobileAlt
} from "react-icons/fa";

const AttendanceTools = () => {


    const attendanceFeatures = [
        // {
        //     icon: <FaUserCheck />,
        //     title: "Kiosk Mode (Touchless)",
        // },
        {
            icon: <FaMapMarkerAlt />,
            title: "Selfie Attendance with Geofencing",
        },
        {
            icon: <FaUserShield />,
            title: "Face Mask Screening",
        },
        {
            icon: <FaCheckCircle />,
            title: "Multiple In-Out",
        },
        // {
        //     icon: <FaMapMarkerAlt />,
        //     title: "GPS Location Capture",
        // },
        // {
        //     icon: <FaUsers />,
        //     title: "Offline Attendance",
        // },
        // {
        //     icon: <FaIdCard />,
        //     title: "Govt. ID Capture",
        // },
        {
            icon: <FaPlug />,
            title: "Integration with HRMS/Payroll",
        },
        {
            icon: <FaChartBar />,
            title: "Reports and Analytics",
        },
        {
            icon: <FaDesktop />,
            title: "Admin Dashboard (Web & Mobile)",
        },
        {
            icon: <FaUsers />,
            title: "Shift Scheduling",
        },
        {
            icon: <FaCalendarAlt />,
            title: "Time Off (Leave) Management",
        },
        {
            icon: <FaUserCog />,
            title: "Staff Directory",
        },
        {
            icon: <FaMobileAlt />,
            title: "Employee Self-Service (ESS)",
        },
    ];

  return (
    <div>
      
        <section className="attendance-tools-section">
                <div className="container attendance-tools-container">

                    <div className="attendance-tools-top">
                        <h2>
                            Take Charge of Your Attendance and
                            <br />
                            Timesheets with Confidence
                        </h2>

                        <button className="attendance-demo-btn">
                            Book a Demo
                        </button>
                    </div>

                    <div className="attendance-tools-main">

                        <div className="attendance-tools-list">
                            {attendanceFeatures.map((item, index) => (
                                <div
                                    className="attendance-tool-item"
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={(index % 4) * 50}
                                >
                                    <span className="attendance-tool-icon">
                                        {item.icon}
                                    </span>

                                    <span>{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <div
                            className="attendance-tools-image"
                            data-aos="fade-up"
                        >
                            <img
                                src={attendanceImg}
                                alt="Attendance and Timesheet Management"
                            />
                        </div>

                    </div>

                </div>
            </section>

    </div>
  )
}

export default AttendanceTools
