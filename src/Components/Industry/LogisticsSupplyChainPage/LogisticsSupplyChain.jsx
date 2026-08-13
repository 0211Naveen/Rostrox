import "./LogisticsSupplyChain.css";
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
    FaTruck,
    FaWarehouse,
    FaBoxes,
    FaShippingFast,
    FaRoute,
    FaPallet,
    FaShip,
    FaPlane,

} from "react-icons/fa";

import heroImg from "../../../assets/Supplay-chain/1.webp";
import caseStudyImg from "../../../assets/Supplay-chain/2.webp";
import userImg from "../../../assets/facitily.jpg";

import featureImg1 from "../../../assets/Supplay-chain/3.webp";
import featureImg2 from "../../../assets/Supplay-chain/4.webp";
import featureImg3 from "../../../assets/Supplay-chain/5.webp";
import featureImg4 from "../../../assets/Supplay-chain/6.webp";
import featureImg5 from "../../../assets/Supplay-chain/7.webp";
import featureImg6 from "../../../assets/Supplay-chain/9.webp";
import featureImg7 from "../../../assets/Supplay-chain/10.webp";
import featureImg8 from "../../../assets/Supplay-chain/11.webp";

const statsData = [
    {
        icon: <FaGlobeAmericas />,
        number: "40",
        title: "Countries",
    },
    {
        icon: <FaMapMarkerAlt />,
        number: "8,000+",
        title: "Warehouses & Hubs",
    },
    {
        icon: <FaUsers />,
        number: "750,000+",
        title: "Logistics Workers",
    },
];

const logisticsFeatures = [
    {
        tag: "Face Recognition Clock-ins",
        title: "Stop Time Theft Across Locations at Clock-in",
        description:
            "Employees clock in on shared mobiles or tablets with face recognition at entry, so attendance is tied to the right person at the right location instead of sign-in sheets, shared IDs.",
        image: featureImg1,
        faqs: [
            {
                question: "How is time theft prevented in warehouses?",
                answer:
                    "Face recognition with liveness detection ensures only the real worker can clock in at the geofenced warehouse location.",
            },
            {
                question: "Can staff mark attendance from outside the warehouse?",
                answer:
                    "Geofencing prevents clock-ins unless the person is physically inside the defined warehouse perimeter.",
            },
            {
                question: "Does this work for multiple warehouses in one area?",
                answer:
                    "Yes. Each warehouse, hub, or distribution center can be geofenced individually.",
            },
        ],
    },
    {
        tag: "Multi-location Dashboard",
        title: "Track Staff Attendance at Multiple Warehouses",
        description:
            "Attendance from every location flows into a single view so HR and operations can quickly see who is present, late, or absent at each location without chasing local reports.",
        image: featureImg2,
        faqs: [
            {
                question: "Can one warehouse have multiple geofenced zones?",
                answer:
                    "Yes. Any number of zones, sections, or floors can be mapped.",
            },
            {
                question: "What if staff work across zones?",
                answer:
                    "Multi-zone access can be configured for staff who need to move between areas.",
            },
            {
                question: "Does this improve operational efficiency?",
                answer:
                    "Yes. Hours automatically land in the correct zone, keeping dashboards and workforce management accurate.",
            },
        ],
    },
    {
        tag: "Job & Activity Tracking",
        title: "Job and Activity Time Captured at Source",
        description:
            "With Truein's logistic workforce management software, employees pick their assigned job or activity when they clock in, so hours are recorded against right area, job, or cost center instead of a single generic shift",
        image: featureImg3,
        faqs: [
            {
                question: "Do staff need re-registration when moved?",
                answer:
                    "No. Existing employee profiles can be transferred directly between approved hubs.",
            },
            {
                question: "Will reporting break after transfers?",
                answer:
                    "No. Attendance history remains centralized and available after hub transfers.",
            },
            {
                question: "Can we give temporary access to multiple warehouses?",
                answer:
                    "Yes. Temporary or multi-hub access can be configured based on operational needs.",
            },
        ],
    },
    {
        tag: "Customizable Policies",
        title: "Overtime and Breaks Rules",
        description:
            "Automate overtime, breaks, and grace periods with daily and weekly limits and approvals, so extra hours are controlled consistently while still allowing site-specific policies.",
        image: featureImg4,
        faqs: [
            {
                question: "Can we restrict attendance once the cap is reached?",
                answer:
                    "Yes. Headcount limits can be configured for individual 3PL agencies.",
            },
            {
                question: "Can agencies manage their own staff?",
                answer:
                    "Yes. Controlled agency access can be provided for managing assigned workers.",
            },
            {
                question: "Can we track 3PL contractor documents?",
                answer:
                    "Yes. Contractor documents and expiry information can be monitored centrally.",
            },
        ],
    },
    {
        tag: "Contractor-level limit",
        title: "Control Contractor Headcount and Prevent Overbilling",
        description:
            "Site-level limit feature controls the number of staff who can report to each site daily. Provides better control to manage the staff whose number keeps fluctuating every day.",
        image: featureImg5,
        faqs: [
            {
                question: "Can we update multiple staff schedules at once?",
                answer:
                    "Yes. Bulk shift scheduling allows multiple employee schedules to be updated together.",
            },
            {
                question: "What if someone forgets to clock out?",
                answer:
                    "Attendance rules can identify missing clock-outs for manager review and correction.",
            },
            {
                question: "Can we plan rotating rosters across hubs?",
                answer:
                    "Yes. Rotating shifts and hub-based rosters can be configured.",
            },
        ],
    },
    {
        tag: "Fast Onboarding",
        title: "Onboard New Workers and Transfer Them in Minutes",
        description:
            "Onboard new or temporary workers in minutes and reassign them between sites without re-enrollment, so profiles, access, and policies follow automatically.",
        image: featureImg6,
        faqs: [
            {
                question: "Can staff choose the right activity at clock-in?",
                answer:
                    "Yes. Employees can select configured activities while recording attendance.",
            },
            {
                question: "Can a single shift be split across tasks?",
                answer:
                    "Yes. Work hours can be distributed across multiple logistics activities.",
            },
            {
                question: "Will this help with client billing?",
                answer:
                    "Yes. Accurate activity-level hours provide better data for client billing and reporting.",
            },
        ],
    },
 
    {
        tag: "Shift Scheduling",
        title: "Plan and Adjust Shifts Across Locations Easily",
        description:
            "Create daily and weekly rosters, assign people to specific jobs or activities within each shift. Handle last-minute changes in one place instead of juggling spreadsheets and chat messages.",
        image: featureImg8,
        faqs: [
            {
                question: "Can we filter by 3PL or warehouse?",
                answer:
                    "Yes. Attendance information can be filtered by site, 3PL, team, or other configured groups.",
            },
            {
                question: "Is the data real-time?",
                answer:
                    "Attendance data is updated as employees clock in and out.",
            },
            {
                question: "Can we download summaries for client reviews?",
                answer:
                    "Yes. Attendance reports can be prepared for operational and client reviews.",
            },
        ],
    },
];

const LogisticsSupplyChain = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const handleFaq = (featureIndex, faqIndex) => {
        const faqId = `${featureIndex}-${faqIndex}`;
        setOpenFaq(openFaq === faqId ? null : faqId);
    };

    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section className="logistics-hero">
                <div className="container logistics-container">
                    <div className="row align-items-center logistics-box">
                        <div className="col-lg-6 logistics-left">
                            <div className="logistics-tag">
                                Supply Chain Workforce

                            </div>
                            <h1 className="logistics-title">
                                Time and Attendance Software for Logistics and Warehouse Teams                            </h1>
                            <ul className="logistics-list">
                                <li>
                                    <FaCheck />
                                    <span>Multi-site attendance</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Optimized staff utilization</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Reduced revenue leakage</span>
                                </li>
                               
                            </ul>
                            <button className="logistics-demo-btn">
                                Book a Demo
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="logistics-hero-image">
                                <img src={heroImg} alt="Logistics Attendance" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO SECTION ================= */}
            <section className="logistics-video-section">
                <div className="container">
                    <h2 className="logistics-video-title">
                        Trusted by Logistics & Supply Chain Workforces
                    </h2>
                    <div className="logistics-video-box">
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
            <section className="logistics-stats-section">
                <div className="container">
                    <div className="logistics-stats">
                        {statsData.map((item, index) => (
                            <div className="logistics-stat-item" key={index}>
                                <div className="logistics-stat-icon">
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
            <section className="logistics-case-section">
                <div className="container">
                    <div className="logistics-case-heading">
                        <h2>
                            How Rostrox Helps Logistics & Supply Chain Companies
                        </h2>
                        <p>
                            Bringing Location-Accurate Attendance to Global Logistics Operations
                        </p>
                    </div>
                    <div className="row align-items-center logistics-case-row">
                        <div className="col-lg-7">
                            <div className="logistics-case-content">
                                <div className="logistics-numbers">
                                    <div>
                                        <h3>2,000+</h3>
                                        <p>Warehouses</p>
                                    </div>
                                    <div>
                                        <h3>100,000+</h3>
                                        <p>Workers</p>
                                    </div>
                                </div>
                                <p className="logistics-description">
                                    Leading logistics companies operate across thousands of warehouses and distribution centers worldwide. With teams working across multiple shifts and locations, attendance tracking became complex, causing time theft and operational inefficiencies. Rostrox helped them bring accurate, centralized, and location-accurate attendance across their logistics network.
                                </p>
                                <a href="#" className="logistics-case-link">
                                    Read Full Case Study
                                </a>
                                <div className="logistics-quote">
                                    <FaQuoteLeft className="quote-icon" />
                                    <p>
                                        Rostrox is robust, reliable, and works as promised. We have
                                        implemented Rostrox across our global logistics network.
                                        It's the best and most cost-effective solution for workforce management.
                                    </p>
                                </div>
                                <div className="logistics-user">
                                    <img src={userImg} alt="Logistics Executive" />
                                    <div>
                                        <h4>Michael Chen</h4>
                                        <p>VP Operations, DHL Supply Chain</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="logistics-case-image">
                                <img src={caseStudyImg} alt="Case Study" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FEATURES SECTION ================= */}
            <section className="logistics-features-section">
                <div className="container logistics-features-container">
                    {logisticsFeatures.map((feature, featureIndex) => (
                        <div
                            className={`logistics-feature-row ${featureIndex % 2 !== 0 ? "logistics-feature-reverse" : ""}`}
                            key={featureIndex}
                        >
                            {/* CONTENT */}
                            <div className="logistics-feature-content">
                                <span className="logistics-feature-tag">
                                    {feature.tag}
                                </span>
                                <h2>{feature.title}</h2>
                                <p className="logistics-feature-description">
                                    {feature.description}
                                </p>
                                <div className="logistics-faq-wrapper">
                                    <h4>Quick FAQs</h4>
                                    {feature.faqs.map((faq, faqIndex) => {
                                        const faqId = `${featureIndex}-${faqIndex}`;
                                        const isOpen = openFaq === faqId;
                                        return (
                                            <div className="logistics-faq-item" key={faqIndex}>
                                                <button
                                                    className="logistics-faq-question"
                                                    onClick={() => handleFaq(featureIndex, faqIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </button>
                                                <div className={`logistics-faq-answer ${isOpen ? "show" : ""}`}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* IMAGE */}
                            <div className="logistics-feature-image">
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

export default LogisticsSupplyChain;