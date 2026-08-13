import "./CleaningServices.css";
import React, { useState } from 'react';
import AttendanceTools from "../AttendanceTools/AttendanceTools";

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
    FaBroom,
    FaSprayCan,
    FaClipboardCheck
} from "react-icons/fa";

import heroImg from "../../../assets/Cleaning/1.webp";
import caseStudyImg from "../../../assets/Cleaning/2.webp";
import userImg from "../../../assets/facitily.jpg";

import featureImg1 from "../../../assets/Cleaning/3.webp";
import featureImg2 from "../../../assets/Cleaning/4.webp";
import featureImg3 from "../../../assets/Cleaning/5.webp";
import featureImg4 from "../../../assets/Cleaning/6.webp";
import featureImg5 from "../../../assets/Cleaning/7.webp";
import featureImg6 from "../../../assets/Cleaning/8.webp";
import featureImg7 from "../../../assets/Cleaning/9.webp";

const statsData = [
    {
        icon: <FaGlobeAmericas />,
        number: "12",
        title: "Countries",
    },
    {
        icon: <FaBuilding />,
        number: "3,000+",
        title: "Client Locations",
    },
    {
        icon: <FaUsers />,
        number: "180,000+",
        title: "Staff Members",
    },
];

const cleaningFeatures = [
    {
        tag: "Verified Clock-in",
        title: "Mobile/Tablet Face Recognition at Each Client Site",
        description:
            "Shared tablet kiosks with face recognition and liveness checks ensure only the assigned cleaner clocks in and at the right location. Rostrox's time tracking app for cleaning companies works on any shared tablet or personal phone. Once enrolled, a cleaning staff can be reassigned to any site instantly.",
        image: featureImg1,
        faqs: [
            {
                question: "How is proxy punching prevented at client sites?",
                answer:
                    "Face recognition with liveness detection ensures only the real staff member can clock in at the geofenced client location.",
            },
            {
                question: "Can staff mark attendance outside the client site?",
                answer:
                    "Geofencing prevents clock-ins unless the staff member is physically inside the defined client site perimeter.",
            },
            {
                question: "Does this work for multiple client locations?",
                answer:
                    "Yes. Each client location can be geofenced individually for accurate tracking across all cleaning sites.",
            },
        ],
    },
    {
        tag: "GPS Geofencing",
        title: "Stop Time Theft with GPS Geofencing",
        description:
            "Janitorial staff can only clock in when they're physically on-site.",
        image: featureImg2,
        faqs: [
            {
                question: "Can one client site have multiple geofenced zones?",
                answer:
                    "Yes. Any number of zones or areas can be mapped for precise tracking.",
            },
            {
                question: "What if staff move across zones?",
                answer:
                    "Multi-zone access can be configured for staff who need to work in different areas.",
            },
            {
                question: "Does this improve client billing?",
                answer:
                    "Yes. Hours automatically land in the correct zone, keeping dashboards and client billing accurate.",
            },
        ],
    },
    {
        tag: "Job and Activity Tracking",
        title: "Track Labor Costs Per Client Site",
        description:
            "Cleaning staff select the job at every clock-in. This way, time spent across multiple client sites in a day is automatically linked to the right client. Know exactly how many hours went into each account for accurate job costing and client billing.",
        image: featureImg3,
        faqs: [
            {
                question: "Do staff need re-registration when moved?",
                answer:
                    "No. Existing staff profiles can be transferred directly between approved client locations.",
            },
            {
                question: "Will reporting break after transfers?",
                answer:
                    "No. Attendance history remains centralized and available after site transfers.",
            },
            {
                question: "Can we give temporary access to multiple sites?",
                answer:
                    "Yes. Temporary or multi-site access can be configured based on client needs.",
            },
        ],
    },
    {
        tag: "Multi-Site Visibility",
        title: "Centralized Attendance Across Client Sites",
        description:
            "A single dashboard shows who has clocked in at each building or site, so under-staffed, over-staffed, or unattended locations are visible in real time.",
        image: featureImg4,
        faqs: [
            {
                question: "Can we restrict attendance once the cap is reached?",
                answer:
                    "Yes. Headcount limits can be configured for individual staffing agencies.",
            },
            {
                question: "Can agencies manage their own staff?",
                answer:
                    "Yes. Controlled agency access can be provided for managing assigned staff.",
            },
            {
                question: "Can we track agency documents?",
                answer:
                    "Yes. Documents and expiry information can be monitored centrally.",
            },
        ],
    },
    {
        tag: "Overtime & Break Rules",
        title: "Consistent Overtime and Break Rules Across Sites",
        description:
            "Standard overtime and break policies ensure extra hours and long breaks are controlled, preventing unnecessary payroll costs. Any missed punches are flagged automatically for manager review.",
        image: featureImg5,
        faqs: [
            {
                question: "Can we update multiple staff schedules at once?",
                answer:
                    "Yes. Bulk shift scheduling allows multiple staff schedules to be updated together.",
            },
            {
                question: "What if someone forgets to clock out?",
                answer:
                    "Attendance rules can identify missing clock-outs for manager review and correction.",
            },
            {
                question: "Can we plan rotating rosters across sites?",
                answer:
                    "Yes. Rotating shifts and site-based rosters can be configured.",
            },
        ],
    },
    {
        tag: "Multi-site Scheduling",
        title: "Plan and Manage Shifts and Last-minute Changes",
        description:
            "Rostrox's janitorial time tracking software lets you create and manage multiple schedules across sites for your commercial cleaning operation. Adjust for last-minute changes, ensuring each location has the required staff coverage.",
        image: featureImg6,
        faqs: [
            {
                question: "Can staff choose the right activity at clock-in?",
                answer:
                    "Yes. Staff can select configured activities while recording attendance.",
            },
            {
                question: "Can a single shift be split across tasks?",
                answer:
                    "Yes. Work hours can be distributed across multiple cleaning activities.",
            },
            {
                question: "Will this help with client billing?",
                answer:
                    "Yes. Accurate activity-level hours provide better data for client billing and reporting.",
            },
        ],
    },
    {
        tag:"Payroll-Ready Reports",
        title: "Payroll-Ready Timesheet Reports",
        description:
            "Rostrox is a time tracking software for cleaning companies that automatically compiles attendance into timesheet reports, ready to export at the end of every pay period. No manual compilation, no calculation errors. Integrates directly with QuickBooks, ADP, SAP, and Oracle HCM. Custom integration with other systems is also supported via API.",
        image: featureImg7,
        faqs: [
            {
                question: "Can managers see which punches were offline?",
                answer:
                    "Yes. Offline attendance records can be identified after synchronization.",
            },
            {
                question: "Is geofencing still enforced?",
                answer:
                    "Configured attendance and location policies continue to apply based on available device data.",
            },
            {
                question: "Does offline attendance work on both kiosk and mobile?",
                answer:
                    "Offline support can be provided across compatible attendance devices.",
            },
        ],
    },
  
];

const CleaningServices = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const handleFaq = (featureIndex, faqIndex) => {
        const faqId = `${featureIndex}-${faqIndex}`;
        setOpenFaq(openFaq === faqId ? null : faqId);
    };

    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section className="cleaning-hero">
                <div className="container cleaning-container">
                    <div className="row align-items-center cleaning-box">
                        <div className="col-lg-6 cleaning-left">
                            <div className="cleaning-tag">
                                Janitorial Time Tracking Software

                            </div>
                            <h1 className="cleaning-title">
                                Time Tracking Software for Cleaning Companies
                            </h1>
                            <ul className="cleaning-list">
                                <li>
                                    <FaCheck />
                                    <span>Prevent buddy punching with face-based clock-in</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Run payroll faster with exportable timesheets</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Onboard new staff instantly with a selfie</span>
                                </li>

                            </ul>
                            <button className="cleaning-demo-btn">
                                Book a Demo
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="cleaning-hero-image">
                                <img src={heroImg} alt="Cleaning Services Attendance" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO SECTION ================= */}
            <section className="cleaning-video-section">
                <div className="container">
                    <h2 className="cleaning-video-title">
                        Trusted by Workforces Across Cleaning Sites
                    </h2>
                    <div className="cleaning-video-box">
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
            <section className="cleaning-stats-section">
                <div className="container">
                    <div className="cleaning-stats">
                        {statsData.map((item, index) => (
                            <div className="cleaning-stat-item" key={index}>
                                <div className="cleaning-stat-icon">
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

            {/* ================= CASE STUDY ================= */}
            <section className="cleaning-case-section">
                <div className="container">
                    <div className="cleaning-case-heading">
                        <h2>
                            How Rostrox Helps Cleaning Service Companies
                        </h2>
                        <p>
                            Eliminating time theft and boosting workforce visibility at Cleaning Service Operations
                        </p>
                    </div>
                    <div className="row align-items-center cleaning-case-row">
                        <div className="col-lg-7">
                            <div className="cleaning-case-content">
                                <div className="cleaning-numbers">
                                    <div>
                                        <h3>500+</h3>
                                        <p>Client Sites</p>
                                    </div>
                                    <div>
                                        <h3>15,000+</h3>
                                        <p>Staff Members</p>
                                    </div>
                                </div>
                                <p className="cleaning-description">
                                    Leading cleaning service companies operate across hundreds of client locations, often with multiple zones within a single site. With teams working across various areas and shifts, attendance tracking became complex, causing attendance leakages and client disputes. Rostrox helped them bring accurate, centralized, and location-accurate attendance across their cleaning service operations.
                                </p>
                                <a href="#" className="cleaning-case-link">
                                    Read Full Case Study
                                </a>
                                <div className="cleaning-quote">
                                    <FaQuoteLeft className="quote-icon" />
                                    <p>
                                        Leading cleaning service companies operate across hundreds of client locations, often with multiple zones within a single site. With teams working across various areas and shifts, attendance tracking became complex, causing attendance leakages and client disputes. Rostrox helped them bring accurate, centralized, and location-accurate attendance across their cleaning service operations.
                                    </p>
                                </div>
                                <div className="cleaning-user">
                                    <img src={userImg} alt="Operations Manager" />
                                    <div>
                                        <h4>Rahul Sharma</h4>
                                        <p>Operations Director, Cleaning Services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="cleaning-case-image">
                                <img src={caseStudyImg} alt="Case Study" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FEATURES SECTION ================= */}
            <section className="cleaning-features-section">
                <div className="container cleaning-features-container">
                    {cleaningFeatures.map((feature, featureIndex) => (
                        <div
                            className={`cleaning-feature-row ${featureIndex % 2 !== 0 ? "cleaning-feature-reverse" : ""}`}
                            key={featureIndex}
                        >
                            {/* CONTENT */}
                            <div className="cleaning-feature-content">
                                <span className="cleaning-feature-tag">
                                    {feature.tag}
                                </span>
                                <h2>{feature.title}</h2>
                                <p className="cleaning-feature-description">
                                    {feature.description}
                                </p>
                                <div className="cleaning-faq-wrapper">
                                    <h4>Quick FAQs</h4>
                                    {feature.faqs.map((faq, faqIndex) => {
                                        const faqId = `${featureIndex}-${faqIndex}`;
                                        const isOpen = openFaq === faqId;
                                        return (
                                            <div className="cleaning-faq-item" key={faqIndex}>
                                                <button
                                                    className="cleaning-faq-question"
                                                    onClick={() => handleFaq(featureIndex, faqIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </button>
                                                <div className={`cleaning-faq-answer ${isOpen ? "show" : ""}`}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* IMAGE */}
                            <div className="cleaning-feature-image">
                                <img src={feature.image} alt={feature.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <AttendanceTools />
        </>
    );
};

export default CleaningServices;