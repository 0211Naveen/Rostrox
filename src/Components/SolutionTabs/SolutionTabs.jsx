
import { useState, useEffect, useRef } from "react";
import {
    FaTasks,
    FaClock,
    FaCalendarAlt,
    FaUserClock,
    FaChartBar,
    FaUmbrellaBeach,
    FaCheck,
    FaStopwatch,
    FaChevronLeft,
    FaChevronRight
} from "react-icons/fa";
import "./SolutionTabs.css";

import Solutions from "../../assets/Solutions.webp"


import problem8 from "../../assets/Home/8.webp"
import problem9 from "../../assets/Home/9.webp"
import problem7 from "../../assets/Home/7.webp"
import problem10 from "../../assets/Home/10.webp"
import problem11 from "../../assets/Home/11.webp"
import problem12 from "../../assets/Home/12.webp"
import problem13 from "../../assets/Home/13.webp"

export default function SolutionTabs() {
    const tabs = [

        {
            title: "Time Capture",
            icon: <FaStopwatch />,
            features: [
                "Face recognition clock-ins",
                "Geofenced clock-ins",
                "Multiple clock-in options",
                "Activity punches",
                // "Offline support",
                "Works across jobs and sites"
            ],
            image: problem8
        },
        {
            title: "Job and Activity Tracking",
            icon: <FaTasks />,
            features: [
                "Tag time by job or activity",
                "Advanced Job Scheduling",
                "Track multiple tasks in one shift",
                "Add cost codes for billing",
                "See job-level hours and costs",
                "Supervisor review and correction",
                "Live Location Tracking"
            ],
            image: problem9
        },
        {
            title: "Overtime and Break Rules",
            icon: <FaClock />,
            features: [
                "Customizable Overtime rules",
                "Paid and unpaid Break policies",
                "Holiday and weekly off rules",
                "Apply policies by category, location, or shift",
                "70+ other custom policies"
            ],
            image: problem7
        },
        {
            title: "Timesheets Management",
            icon: <FaCalendarAlt />,
            features: [
                "Multi-sites management",
                "View timesheets in various formats",
                "Approval workflows",
                "Handle sub-contractor use cases"
            ],
            image: problem10
        },
        {
            title: "Shift Scheduling",
            icon: <FaUserClock />,
            features: [
                "Bulk shift creation",
                "Handle multi-day shifts",
                "Auto-assign Shifts and Weekly offs",
                "Notify and Allow Shift Acceptance"
            ],
            image: problem11
        },
        {
            title: "Reports & Integration",
            icon: <FaChartBar />,
            features: [
                "Final payroll calculation report",
                "Multiple downloadable formats",
                "Insights on trends",
                "Integrations with Payroll and other systems"
            ],
            image: problem12
        },
        {
            title: "Time off/Leave Management",
            icon: <FaUmbrellaBeach />,
            features: [
                "Automated leave allotments",
                "Hourly or Daily leaves",
                "Carry forward",
                "Sandwich policy",
                "Multi level approvals and more"
            ],
            image: problem13
        },

    ];

    const [activeTab, setActiveTab] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const tabsContainerRef = useRef(null);

    // Auto-slide effect
    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setActiveTab((prev) => (prev + 1) % tabs.length);
            }, 4000); // Change slide every 4 seconds
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, tabs.length]);

    // // Scroll active tab into view
    // useEffect(() => {
    //     if (tabsContainerRef.current) {
    //         const activeTabElement = tabsContainerRef.current.children[activeTab];
    //         if (activeTabElement) {
    //             activeTabElement.scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'nearest',
    //                 inline: 'center'
    //             });
    //         }
    //     }
    // }, [activeTab]);


    useEffect(() => {
        const container = tabsContainerRef.current;

        if (!container) return;

        const activeTabElement = container.children[activeTab];

        if (!activeTabElement) return;

        const scrollLeft =
            activeTabElement.offsetLeft -
            container.clientWidth / 2 +
            activeTabElement.clientWidth / 2;

        container.scrollTo({
            left: scrollLeft,
            behavior: "smooth"
        });

    }, [activeTab]);

    // Pause auto-play on hover
    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    const handleTabClick = (index) => {
        setActiveTab(index);
        setIsAutoPlaying(false);
        // Resume auto-play after 8 seconds of inactivity
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const handlePrev = () => {
        setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const handleNext = () => {
        setActiveTab((prev) => (prev + 1) % tabs.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    return (
        <section className="solution-section">
            <div className="container">
                <h2 className="solution-title">
                    Solutions for Your Workforce
                </h2>

                <div className="solution-top">
                    <h3>
                        <span className="title-icon"><FaUserClock /></span>
                        Rostrox Advanced: Time and Attendance Complete Solution
                    </h3>
                    <p>Use verified time to manage shifts, overtime, timesheets, payroll reports and leave in one place</p>
                </div>

                <div className="solution-mid">
                    <div className="solution-list">
                        <ul>
                            <li><FaCheck className="check-icon" /> Robust Face Recognition</li>
                            <li><FaCheck className="check-icon" /> Mobile Based</li>
                            <li><FaCheck className="check-icon" /> GPS Geofencing</li>
                            <li><FaCheck className="check-icon" /> Multiple Clock-in Options</li>
                            <li><FaCheck className="check-icon" /> Offline Clock-in</li>
                            <li><FaCheck className="check-icon" /> Activity Punch</li>
                        </ul>
                    </div>
                    <div className="solution-image">
                        <img src={Solutions} alt="Solutions" />
                    </div>
                </div>

                <div
                    className="solution-tabs-wrapper"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="solution-tabs-container">
                      


                        <div className="solution-tabs" ref={tabsContainerRef}>
                            {tabs.map((tab, index) => (
                                <div
                                    key={index}
                                    className={`solution-tab ${activeTab === index ? "active" : ""
                                        }`}
                                    onClick={() => handleTabClick(index)}
                                >
                                    <span>{tab.icon}</span>
                                    {tab.title}
                                </div>
                            ))}
                        </div>

                        
                    </div>

                    {/* Progress dots */}
                    <div className="progress-dots">
                        {tabs.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${activeTab === index ? "active" : ""}`}
                                onClick={() => handleTabClick(index)}
                            />
                        ))}
                    </div>

                    <div className="solution-content">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h3>{tabs[activeTab].title}</h3>
                                <p>{tabs[activeTab].description}</p>
                                <ul className="feature-list">
                                    {tabs[activeTab].features.map((item, i) => (
                                        <li className="feature-items" key={i}>✓ {item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <img
                                    src={tabs[activeTab].image}
                                    alt={tabs[activeTab].title}
                                    className="img-fluid solution-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}