import "./TimeAttendanceSystem.css";
import React, { useState } from 'react';
import AttendanceTools from "../../Industry/AttendanceTools/AttendanceTools";
import SubNavbar from "../SubNavbar/SubNavbar";
import Advantage from "../../Home/Advantage";


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
    FaMobileAlt,
    FaHardHat,
    FaTools,
    FaBuilding,
    FaDraftingCompass,
    FaQrcode,
    FaBluetooth,
    FaWifi,
    FaBatteryFull,
    FaCoins,
    FaClock,
    FaBriefcase,
    FaClock as FaClockIcon,
    FaSyncAlt,
    FaFileInvoice,
    FaHome,
    FaUserFriends,
    FaStore,
    FaTruck,
    FaIndustry,
    FaHospital,
    FaUniversity,
    FaWarehouse,
    FaRegClock,
    FaCalculator,
    FaFileAlt,
    FaBell,
    FaRulerCombined,
    FaCoffee ,
    FaExchangeAlt 
} from "react-icons/fa";

import heroImg from "../../../assets/Time-Attendance/1.webp";
import overviewImg from "../../../assets/Time-Attendance/2.webp";

import featureImg1 from "../../../assets/Time-Attendance/3.webp";
import featureImg2 from "../../../assets/Time-Attendance/4.webp";
import featureImg3 from "../../../assets/Time-Attendance/5.webp";
import featureImg4 from "../../../assets/Time-Attendance/6.webp";
import featureImg5 from "../../../assets/Time-Attendance/7.webp";



import Integrations from "../Integrations/Integrations";

const statsData = [
    {
        icon: <FaGlobeAmericas />,
        number: "50+",
        title: "Countries",
    },
    {
        icon: <FaMobileAlt />,
        number: "20,000+",
        title: "Mobile Devices",
    },
    {
        icon: <FaUsers />,
        number: "1,800,000+",
        title: "Active Users",
    },
];


// const benefitsData = [
//     {
//         icon: <FaRegClock />,
//         title: "Job and Shift Scheduling",
//         desc: "Assign jobs and shifts, day, night, or general in bulk or individually. Whether you're planning or managing last-minute changes, scheduling stays effortless and organized.",
//         className: "benefit-large",
//     },
//     {
//         icon: <FaCalculator />,
//         title: "Automated Timesheet",
//         desc: "Employees clock in with facial recognition, and the time and attendance tracking software handles the rest. From accurate hours to error-free reports, everything flows straight into timesheets.",
//         className: "benefit-large",
//     },
//     {
//         icon: <FaFileAlt />,
//         title: "Break Time Calculator",
//         desc: "Automatically exclude break hours from total work time for each employee. It ensures fair tracking and keeps payroll precise without extra effort.",
//         className: "benefit-small",
//     },
//     {
//         icon: <FaBell />,
//         title: "Multiple In/Out Tracking",
//         desc: "Track every clock-in and out, no matter how many times or where it happens. The system syncs everything in real-time and provides a clear, consolidated view.",
//         className: "benefit-small",
//     },
//     {
//         icon: <FaRulerCombined />,
//         title: "Smart Policy Enforcement",
//         desc: "Apply attendance rules for shifts, breaks, and overtime automatically, built for contract and temp workforce compliance without constant admin effort.",
//         className: "benefit-wide",
//     },
// ];

const benefitsData = [
    {
        icon: <FaCalendarAlt />,
        title: "Job and Shift Scheduling",
        desc: "Assign jobs and shifts, day, night, or general in bulk or individually. Whether you're planning or managing last-minute changes, scheduling stays effortless and organized.",
        className: "benefit-large",
    },
    {
        icon: <FaClock />,
        title: "Automated Timesheet",
        desc: "Employees clock in with facial recognition, and the time and attendance tracking software handles the rest. From accurate hours to error-free reports, everything flows straight into timesheets.",
        className: "benefit-large",
    },
    {
        icon: <FaCoffee />,
        title: "Break Time Calculator",
        desc: "Automatically exclude break hours from total work time for each employee. It ensures fair tracking and keeps payroll precise without extra effort.",
        className: "benefit-small",
    },
    {
        icon: <FaExchangeAlt />,
        title: "Multiple In/Out Tracking",
        desc: "Track every clock-in and out, no matter how many times or where it happens. The system syncs everything in real-time and provides a clear, consolidated view.",
        className: "benefit-small",
    },
    {
        icon: <FaUserShield />,
        title: "Smart Policy Enforcement",
        desc: "Apply attendance rules for shifts, breaks, and overtime automatically, built for contract and temp workforce compliance without constant admin effort.",
        className: "benefit-wide",
    },
];

const mobileFeatures = [
    {
        tag: "Time & Attendance",
        title: "Accurate Time, Every Time",
        description:
            "Automatically track working hours across jobs, shifts, sites, and workforce with no missed punches or manual errors, just precise, real-time records.",
        image: featureImg1,
        faqs: [
            {
                question: "What does the system track?",
                answer:
                    "Tracks check-in/out times, breaks, overtime, leave, and absence.",
            },
            {
                question: "Is it suitable for shift workers?",
                answer:
                    "Yes. Supports multiple shift patterns and rotations.",
            },
            {
                question: "Can it handle different time zones?",
                answer:
                    "Yes. Supports multiple time zones across global locations.",
            },
        ],
    },
    {
        tag: "Shift Management",
        title: "Built for Rotations & Flex Hours",
        description:
            "Easily assign, rotate, or auto-apply shift rules, even for multi-site teams or contract workers.",
        image: featureImg2,
        faqs: [
            {
                question: "What check-in methods are available?",
                answer:
                    "QR codes, NFC, Bluetooth, GPS, face recognition, and manual.",
            },
            {
                question: "Can I use multiple methods?",
                answer:
                    "Yes. Different locations can use different check-in methods.",
            },
            {
                question: "Which method is most secure?",
                answer:
                    "Face recognition with liveness detection offers highest security.",
            },
        ],
    },
    {
        tag: "Multi-Location Friendly",
        title: "One Dashboard, All Your Sites",
        description:
            "Monitor attendance across sites and field locations from a single view, no switching tabs.",
        image: featureImg3,
        faqs: [
            {
                question: "Can employees apply for leave on mobile?",
                answer:
                    "Yes. The mobile app allows easy leave applications and tracking.",
            },
            {
                question: "What types of leave are supported?",
                answer:
                    "Annual leave, sick leave, casual leave, and custom leave types.",
            },
            {
                question: "Can I set leave limits?",
                answer:
                    "Yes. Configurable leave balances and limits per employee.",
            },
        ],
    },
    {
        tag: "Rule-Based Policies",
        title: "Set Once, Enforce Always",
        description:
            "Define break times, overtime limits, and late penalties, and let the time and attendance software handle the rest.",
        image: featureImg4,
        faqs: [
            {
                question: "How is overtime calculated?",
                answer:
                    "Based on configured rules - daily, weekly, or monthly overtime.",
            },
            {
                question: "Can overtime rates vary?",
                answer:
                    "Yes. Different rates for weekdays, weekends, and holidays.",
            },
            {
                question: "Can employees see overtime?",
                answer:
                    "Yes. Employees can view their overtime in real-time.",
            },
        ],
    },
    {
        tag: "Reports & Insights",
        title: "Your Attendance, Made Visual",
        description:
            "Access attendance trends, absentee reports, and export-ready data in seconds.",
        image: featureImg5,
        faqs: [
            {
                question: "Can I create recurring shifts?",
                answer:
                    "Yes. Supports recurring shift patterns and rotations.",
            },
            {
                question: "Can employees swap shifts?",
                answer:
                    "Yes. Employees can request shift swaps with manager approval.",
            },
            {
                question: "Do I get shift reminders?",
                answer:
                    "Yes. Push notifications for upcoming shifts and changes.",
            },
        ],
    },


];


const solutionsData = [
    {
        icon: <FaRegClock />,
        title: "Time & Attendance System",
    },
    {
        icon: <FaMobileAlt />,
        title: "Mobile Attendance App",
    },
    {
        icon: <FaUserCog />,
        title: "Workforce Management",
    },
    {
        icon: <FaCalendarAlt />,
        title: "Shift Scheduling",
    },
    {
        icon: <FaDesktop />,
        title: "Analytics Dashboard",
    },
    {
        icon: <FaChartBar />,
        title: "Reports & Analytics",
    },
];


const industryData = [
    {
        icon: <FaBriefcase />,
        title: "Corporate Offices",
    },
    {
        icon: <FaBuilding />,
        title: "Construction Sites",
    },
    {
        icon: <FaIndustry />,
        title: "Manufacturing",
    },
    {
        icon: <FaWarehouse />,
        title: "Warehouses",
    },
    {
        icon: <FaStore />,
        title: "Retail Stores",
    },
    {
        icon: <FaHospital />,
        title: "Healthcare",
    },
    {
        icon: <FaUniversity />,
        title: "Education",
    },
    {
        icon: <FaTruck />,
        title: "Logistics",
    },
];

const TimeAttendanceSystem = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const handleFaq = (featureIndex, faqIndex) => {
        const faqId = `${featureIndex}-${faqIndex}`;
        setOpenFaq(openFaq === faqId ? null : faqId);
    };


    const [activeTab, setActiveTab] = useState("Overview");

    const handleTabClick = (tab) => {
        setActiveTab(tab);

        const sectionId = tab.toLowerCase();

        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };



    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section className="timeattendance-hero">
                <div className="container timeattendance-container">
                    <div className="row align-items-center timeattendance-box">
                        <div className="col-lg-6 timeattendance-left">
                            <div className="timeattendance-tag">
                                Workforce Attendance Tracker

                            </div>
                            <h1 className="timeattendance-title">
                                Time & Attendance System For Modern Workforces
                            </h1>
                            <ul className="timeattendance-list">
                                <li>
                                    <FaCheck />
                                    <span>Track Hours, Overtime & Leave – All in One Platform</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Automated Payroll Integration & Reporting</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Reduce Errors, Save Time, Improve Productivity</span>
                                </li>

                            </ul>
                            <button className="timeattendance-demo-btn">
                                Book a Demo
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="timeattendance-hero-image">
                                <img src={heroImg} alt="Time & Attendance System" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO SECTION ================= */}
            <section className="timeattendance-video-section">
                <div className="container">
                    <h2 className="timeattendance-video-title">
                        Trusted by Workforces Across Industries
                    </h2>
                    <div className="timeattendance-video-box">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/bknUn7yMwNI?si=wbyTCSxFU5jOOk3p"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ================= STATS SECTION ================= */}
            <section className="timeattendance-stats-section">
                <div className="container">
                    <div className="timeattendance-stats">
                        {statsData.map((item, index) => (
                            <div className="timeattendance-stat-item" key={index}>
                                <div className="timeattendance-stat-icon">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3>{item.number}</h3>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <SubNavbar />

            {/* ================= OVERVIEW SECTION ================= */}

            <section className="attendance-overview-section " id="overview">
                <div className="container attendance-overview-container">


                    {/* CONTENT */}

                    <div className="attendance-overview-content">

                        <span className="attendance-small-title">
                            Feature Overview
                        </span>

                        <h2>
                            Transform How You Track Time
                        </h2>

                        <p>
                            Manage your workforce time with Truein's AI-powered time and attendance system with face recognition. Eliminate manual errors and enjoy real-time, accurate tracking across multiple locations with ease.

                        </p>

                        <div className="attendance-overview-image">
                            <img
                                src={overviewImg}
                                alt="Time & Attendance System"
                            />
                        </div>

                    </div>

                </div>
            </section>


            {/* ================= BENEFITS SECTION ================= */}

            <section
                className="facerecognition-benefits-section"
                id="benefits"
            >
                <div className="container facerecognition-benefits-container">

                    <div className="facerecognition-benefits-heading">
                        <span>Benefits</span>

                        <h2>Why Choose Our Time & Attendance System?</h2>
                    </div>

                    <div className="facerecognition-benefits-grid">

                        {benefitsData.map((item, index) => (
                            <div
                                className={`facerecognition-benefit-card ${item.className}`}
                                key={index}
                            >
                                <div className="facerecognition-benefit-icon">
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.desc}</p>
                            </div>
                        ))}

                    </div>

                </div>
            </section>



            {/* ================= FEATURES SECTION ================= */}
            <section className="timeattendance-features-section" id="features">
                <div className="container timeattendance-features-container">
                    {mobileFeatures.map((feature, featureIndex) => (
                        <div
                            className={`timeattendance-feature-row ${featureIndex % 2 !== 0 ? "timeattendance-feature-reverse" : ""}`}
                            key={featureIndex}
                        >
                            {/* CONTENT */}
                            <div className="timeattendance-feature-content">
                                <span className="timeattendance-feature-tag">
                                    {feature.tag}
                                </span>
                                <h2>{feature.title}</h2>
                                <p className="timeattendance-feature-description">
                                    {feature.description}
                                </p>
                                <div className="timeattendance-faq-wrapper">
                                    <h4>Quick FAQs</h4>
                                    {feature.faqs.map((faq, faqIndex) => {
                                        const faqId = `${featureIndex}-${faqIndex}`;
                                        const isOpen = openFaq === faqId;
                                        return (
                                            <div className="timeattendance-faq-item" key={faqIndex}>
                                                <button
                                                    className="timeattendance-faq-question"
                                                    onClick={() => handleFaq(featureIndex, faqIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </button>
                                                <div className={`timeattendance-faq-answer ${isOpen ? "show" : ""}`}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* IMAGE */}
                            <div className="timeattendance-feature-image">
                                <img src={feature.image} alt={feature.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>



            <Integrations />

            <AttendanceTools />

            <Advantage />




            <section className="timeattendance-solutions-section">
                <div className="container">
                    <div className="timeattendance-solutions-wrapper">

                        <div className="timeattendance-solutions-left">
                            <h2>
                                Explore Our Other <br />
                                Rosteox Workforce <br />
                                Solutions
                            </h2>
                        </div>

                        <div className="timeattendance-solutions-grid">
                            {solutionsData.map((item, index) => (
                                <div className="timeattendance-solutions-card" key={index}>
                                    <div className="timeattendance-solutions-icon">
                                        {item.icon}
                                    </div>

                                    <span>{item.title}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default TimeAttendanceSystem;