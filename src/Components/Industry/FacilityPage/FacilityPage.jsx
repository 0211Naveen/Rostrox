import "./FacilityPage.css";
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
    FaMobileAlt
} from "react-icons/fa";

import heroImg from "../../../assets/Facilitry-management/1.webp";
import caseStudyImg from "../../../assets/Facilitry-management/2.webp";
import userImg from "../../../assets/facitily.jpg";


import featureImg1 from "../../../assets/Facilitry-management/3.webp";
import featureImg2 from "../../../assets/Facilitry-management/4.webp";
import featureImg3 from "../../../assets/Facilitry-management/5.webp";
import featureImg4 from "../../../assets/Facilitry-management/6.webp";
import featureImg5 from "../../../assets/Facilitry-management/7.webp";
import featureImg6 from "../../../assets/Facilitry-management/8.webp";
import featureImg7 from "../../../assets/Facilitry-management/9.webp";
import featureImg8 from "../../../assets/Facilitry-management/11.webp";



const statsData = [
    {
        icon: <FaGlobeAmericas />,
        number: "25",
        title: "Countries",
    },
    {
        icon: <FaMapMarkerAlt />,
        number: "10,000+",
        title: "Locations",
    },
    {
        icon: <FaUsers />,
        number: "500,000+",
        title: "Users",
    },
];

const facilityFeatures = [
    {
        tag: "Verified & Site-Accurate Attendance",
        title: "Stop Proxy Punching With Face Verification And Geofencing",
        description:
            "AI powered Face recognition with geofencing ensures only the assigned person marks attendance at the correct client site.",
        image: featureImg1,

        faqs: [
            {
                question: "How is proxy punching blocked?",
                answer:
                    "Face recognition with liveness ensures only the real person can clock in at the geofenced site.",
            },
            {
                question: "Can staff mark attendance outside the premises?",
                answer:
                    "Geofencing prevents clock-ins unless the person is physically inside the defined location.",
            },
            {
                question:
                    "Does this work for multiple client locations in one building?",
                answer:
                    "Yes. Each client floor or zone can be geofenced individually.",
            },
        ],
    },

    {
        tag: "Zone-Based Tracking",
        title: "Accurate Attendance Inside Large Facilities",
        description:
            "Large facilities can be divided into geofenced wings, floors or blocks. Staff clock in only within their assigned zone, which keeps reporting, task hours and billing accurate.",
        image: featureImg2,

        faqs: [
            {
                question: "Can one facility have multiple geofenced zones?",
                answer:
                    "Yes. Any number of wings, floors or blocks can be mapped.",
            },
            {
                question: "What if staff work across zones?",
                answer:
                    "Multi-location access can be configured for facility staff attendance tracking.",
            },
            {
                question: "Does this improve billing accuracy?",
                answer:
                    "Yes. Hours automatically land in the correct zone, keeping dashboards and client billing accurate.",
            },
        ],
    },

    {
        tag: "Workforce Mobility",
        title: "Transfer Staff Across Sites In Seconds",
        description:
            "Workers can shift between client sites without re-registration. Their attendance history, applicable policies and kiosk or mobile access update instantly when they move.",
        image: featureImg3,

        faqs: [
            {
                question: "Do staff need re-registration when moved?",
                answer:
                    "No. Their profile and access move with them automatically.",
            },
            {
                question: "Will reporting break after transfers?",
                answer:
                    "No. Attendance history remains centralized and available after site transfers.",
            },
            {
                question:
                    "Can we give a worker temporary access to multiple sites?",
                answer:
                    "Yes. Temporary or multi-site access can be configured based on operational needs.",
            },
        ],
    },

    {
        tag: "Contractor Management",
        title: "Manage Contractor Agencies With Headcount Caps",
        description:
            "Map manpower agencies to sites, set attendance or headcount limits and track documents with expiries. Give agencies limited visibility only for their workers to keep operations controlled.",
        image: featureImg4,

        faqs: [
            {
                question:
                    "Can we restrict attendance once the cap is reached?",
                answer:
                    "Yes. Headcount limits can be configured for individual contractor agencies.",
            },
            {
                question:
                    "Can agencies upload and manage their own staff?",
                answer:
                    "Yes. Controlled agency access can be provided for managing assigned workers.",
            },
            {
                question: "Can we track contractor documents?",
                answer:
                    "Yes. Contractor documents and expiry information can be monitored centrally.",
            },
        ],
    },

    {
        tag: "24×7 Shift Handling",
        title: "Clean Attendance For 24×7 Operations",
        description:
            "Cross-day shifts are auto-handled, ensuring accurate attendance for teams working round the clock.",
        image: featureImg5,

        faqs: [
            {
                question:
                    "Can we update multiple staff schedules at once?",
                answer:
                    "Use the bulk scheduler to assign or change shifts for large workforce in one go.",
            },
            {
                question: "What if someone forgets to clock out?",
                answer:
                    "Auto clock-out rules update the record automatically.",
            },
            {
                question:
                    "Can we plan rotating rosters across multiple sites?",
                answer:
                    "Yes. Use the scheduler to plan by day/week/month, with filters by site/group",
            },
        ],
    },

    {
        tag: "Job & Activity Reporting",
        title: "Job & Activity Tagging For Services",
        description:
            "Tag hours to services like housekeeping, security, or maintenance at clock-in or let supervisors assign it later, keeping job hours accurate for billing and reporting.",
        image: featureImg6,

        faqs: [
            {
                question:
                    "Can staff choose the right service at clock-in?",
                answer:
                    "Yes. They see only eligible jobs/activities based on your rules.",
            },
            {
                question:
                    "Can a single shift be split across tasks?",
                answer:
                    "Yes.You can split hours across multiple jobs/activities.",
            },
            {
                question: "Will this help with client billing?",
                answer:
                    "Yes. Hours are grouped by service and site, keeping billing and reports consistent.",
            },
        ],
    },

    // {
    //     tag: "Offline Attendance",
    //     title: "Reliable Clock-Ins Even Without Network",
    //     description:
    //         "Staff can clock in even in basements, parking lots or service rooms with no connectivity. Clock-ins are stored securely and auto-synced when the device reconnects.",
    //     image: featureImg7,

    //     faqs: [
    //         {
    //             question:
    //                 "Can managers see which punches were offline?",
    //             answer:
    //                 "Yes. Synced records are clearly labeled as “captured offline” for quick review.",
    //         },
    //         {
    //             question: "Is geofencing still enforced?",
    //             answer:
    //                 "Location is captured at clock-in, out-of-location punches are flagged per policy.",
    //         },
    //         {
    //             question:
    //                 "Does offline attendance work on both kiosk and mobile?",
    //             answer:
    //                 "Yes. Both User App and Kiosk App support offline punches.",
    //         },
    //     ],
    // },

    {
        tag: "Multi-Site Visibility",
        title: "Centralized View Across All Client Locations",
        description:
            "See who's present, late or missing across every client site from one dashboard. Filter by site, contractor or team to track daily performance and attendance.",
        image: featureImg8,

        faqs: [
            {
                question: "Can we filter by contractor or site?",
                answer:
                    "Yes. Use contractor and site filters for a quick breakdown.",
            },
            {
                question: "Is the data real-time?",
                answer:
                    "Yes. Attendance updates in real time, so dashboards always show the latest status.",
            },
            {
                question:
                    "Can we download summaries for client reviews?",
                answer:
                    "Yes. You can export site-wise or contractor-wise summaries for client reporting or reviews.",
            },
        ],
    },
];



const FacilityPage = () => {

    const [openFaq, setOpenFaq] = useState(null);

    const handleFaq = (featureIndex, faqIndex) => {
        const faqId = `${featureIndex}-${faqIndex}`;

        setOpenFaq(openFaq === faqId ? null : faqId);
    };

    return (
        <>
            {/* ================= HERO SECTION ================= */}

            <section className="facility-hero">
                <div className="container facility-container">
                    <div className="row align-items-center facility-box">
                        <div className="col-lg-6 facility-left">
                            <div className="facility-tag">
                                Time And Attendance Tracking System
                            </div>

                            <h1 className="facility-title">
                                Face-based Attendance Software for Facility Management Companies
                            </h1>

                            <ul className="facility-list">
                                <li>
                                    <FaCheck />
                                    <span>Face-verified, accurate clock-ins</span>
                                </li>

                                <li>
                                    <FaCheck />
                                    <span>Geofenced clock-ins by floor</span>
                                </li>

                                <li>
                                    <FaCheck />
                                    <span>Real-time visibility across client sites</span>
                                </li>

                                <li>
                                    <FaCheck />
                                    <span>Split hours by jobs and activities</span>
                                </li>
                            </ul>

                            <button className="facility-demo-btn">
                                Book a Demo
                            </button>
                        </div>

                        <div className="col-lg-6">
                            <div className="facility-hero-image">
                                <img src={heroImg} alt="Facility Attendance" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO SECTION ================= */}

            <section className="facility-video-section">
                <div className="container">
                    <h2 className="facility-video-title">
                        Trusted by Workforces Across Industries
                    </h2>

                    <div className="facility-video-box">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/bknUn7yMwNI?si=wbyTCSxFU5jOOk3p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </section>

            {/* ================= STATS SECTION ================= */}

            <section className="facility-stats-section">
                <div className="container">
                    <div className="facility-stats">
                        {statsData.map((item, index) => (
                            <div className="facility-stat-item" key={index}>
                                <div className="facility-stat-icon">
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

            <section className="facility-case-section">
                <div className="container">
                    <div className="facility-case-heading">
                        <h2>
                            How Rostrox Helps the Facility Management Companies
                        </h2>

                        <p>
                            Bringing Location-Accurate Attendance to Compass Group’s
                            Multi-Client Sites
                        </p>
                    </div>

                    <div className="row align-items-center facility-case-row">
                        <div className="col-lg-7">
                            <div className="facility-case-content">
                                <div className="facility-numbers">
                                    <div>
                                        <h3>1200+</h3>
                                        <p>Sites</p>
                                    </div>

                                    <div>
                                        <h3>40,000+</h3>
                                        <p>Users</p>
                                    </div>
                                </div>

                                <p className="facility-description">
                                    Compass Group operates across thousands of client locations,
                                    often within the same building. With teams operating across
                                    multiple sites and shifts, attendance tracking became complex,
                                    causing attendance leakages and client concerns. Rostrox helped
                                    them bring accurate, centralized, and location-accurate
                                    attendance across their client sites.
                                </p>

                                <a href="#" className="facility-case-link">
                                    Read Full Case Study
                                </a>

                                <div className="facility-quote">
                                    <FaQuoteLeft className="quote-icon" />

                                    <p>
                                        Rostrox is robust, reliable, and works as promised. I have
                                        implemented Rostrox in my previous and current companies.
                                        It's the best and most cost-effective solution
                                    </p>
                                </div>

                                <div className="facility-user">
                                    {/* <img src={userImg} alt="Piyush Dutt" /> */}

                                    <div>
                                        <h4>Piyush Dutt</h4>
                                        <p>CHRO, Compass Group</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="facility-case-image">
                                <img src={caseStudyImg} alt="Case Study" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="facility-features-section">
                <div className="container facility-features-container">
                    {facilityFeatures.map((feature, featureIndex) => (
                        <div
                            className={`facility-feature-row ${featureIndex % 2 !== 0 ? "facility-feature-reverse" : ""
                                }`}
                            key={featureIndex}
                        >
                            {/* CONTENT */}

                            <div className="facility-feature-content">
                                <span className="facility-feature-tag">
                                    {feature.tag}
                                </span>

                                <h2>{feature.title}</h2>

                                <p className="facility-feature-description">
                                    {feature.description}
                                </p>

                                <div className="facility-faq-wrapper">
                                    <h4>Quick FAQs</h4>

                                    {feature.faqs.map((faq, faqIndex) => {
                                        const faqId = `${featureIndex}-${faqIndex}`;
                                        const isOpen = openFaq === faqId;

                                        return (
                                            <div className="facility-faq-item" key={faqIndex}>
                                                <button
                                                    className="facility-faq-question"
                                                    onClick={() =>
                                                        handleFaq(featureIndex, faqIndex)
                                                    }
                                                >
                                                    <span>{faq.question}</span>

                                                    {isOpen ? (
                                                        <FaChevronUp />
                                                    ) : (
                                                        <FaChevronDown />
                                                    )}
                                                </button>

                                                <div
                                                    className={`facility-faq-answer ${isOpen ? "show" : ""
                                                        }`}
                                                >
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* IMAGE */}

                            <div className="facility-feature-image">
                                <img src={feature.image} alt={feature.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            < AttendanceTools />




        </>
    );
};

export default FacilityPage;