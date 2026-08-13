import "./Manufacturing.css";
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
    FaIndustry,
    FaWarehouse,
    FaCogs
} from "react-icons/fa";

import heroImg from "../../../assets/Manufacturing/1.webp";
import caseStudyImg from "../../../assets/Manufacturing/2.webp";
import userImg from "../../../assets/facitily.jpg";

import featureImg1 from "../../../assets/Manufacturing/3.webp";
import featureImg2 from "../../../assets/Manufacturing/4.webp";
import featureImg3 from "../../../assets/Manufacturing/5.webp";
import featureImg4 from "../../../assets/Manufacturing/6.webp";
import featureImg5 from "../../../assets/Manufacturing/7.webp";
import featureImg6 from "../../../assets/Manufacturing/8.webp";

const statsData = [
    {
        icon: <FaGlobeAmericas />,
        number: "20",
        title: "Countries",
    },
    {
        icon: <FaIndustry />,
        number: "2,500+",
        title: "Manufacturing Plants",
    },
    {
        icon: <FaUsers />,
        number: "350,000+",
        title: "Workers",
    },
];

const manufacturingFeatures = [
    {
        tag: "AI Face Recognition",
        title: "Verified Attendance for Contract and Shift Workers",
        description:
            "Clock-ins are verified through AI-powered face recognition, preventing proxy or buddy punching. Works accurately across varying lighting and factory conditions.",
        image: featureImg1,
        faqs: [
            {
                question: "How is proxy punching prevented on the shop floor?",
                answer:
                    "Face recognition with liveness detection ensures only the real worker can clock in at the geofenced plant location.",
            },
            {
                question: "Can workers mark attendance outside the plant?",
                answer:
                    "Geofencing prevents clock-ins unless the worker is physically inside the defined plant perimeter.",
            },
            {
                question: "Does this work for multiple production lines?",
                answer:
                    "Yes. Each production line or zone can be geofenced individually for accurate tracking.",
            },
        ],
    },
    {
        tag: "Multi-site Shift Scheduling",
        title: "Simplify Complex Shift Scheduling Across Facilities",
        description:
            "Plan and manage day, night, or rotating shifts across facilities from one dashboard. Upload or duplicate schedules in bulk, apply category-based rules, and ensure accurate records for every site and shift",
        image: featureImg2,
        faqs: [
            {
                question: "Can one plant have multiple geofenced zones?",
                answer:
                    "Yes. Any number of zones or production areas can be mapped for precise tracking.",
            },
            {
                question: "What if workers move across zones?",
                answer:
                    "Multi-zone access can be configured for workers who need to move between production areas.",
            },
            {
                question: "Does this improve production costing?",
                answer:
                    "Yes. Hours automatically land in the correct zone, keeping dashboards and production cost reporting accurate.",
            },
        ],
    },
    {
        tag: "Overtime & Break Policies",
        title: "Auto-Calculate Break and Overtime",
        description:
            "Define company-specific overtime and break rules. Rostrox's manufacturing time tracking software enforces limits, tracks actual working hours, and restricts unauthorized extra hours.",
        image: featureImg3,
        faqs: [
            {
                question: "Do workers need re-registration when moved?",
                answer:
                    "No. Existing worker profiles can be transferred directly between approved plant locations.",
            },
            {
                question: "Will reporting break after transfers?",
                answer:
                    "No. Attendance history remains centralized and available after plant transfers.",
            },
            {
                question: "Can we give temporary access to multiple plants?",
                answer:
                    "Yes. Temporary or multi-plant access can be configured based on production needs.",
            },
        ],
    },
    {
        tag: "Contract Workforce Tracking",
        title: "Full Visibility on Contract and Seasonal Staff",
        description:
            "Track every contractor agency, worker, and attendance record from a single dashboard. Manage high staff turnover  efficiently without paperwork.",
        image: featureImg4,
        faqs: [
            {
                question: "Can we restrict attendance once the cap is reached?",
                answer:
                    "Yes. Headcount limits can be configured for individual vendor agencies.",
            },
            {
                question: "Can agencies manage their own staff?",
                answer:
                    "Yes. Controlled agency access can be provided for managing assigned workers.",
            },
            {
                question: "Can we track vendor documents?",
                answer:
                    "Yes. Documents and expiry information can be monitored centrally.",
            },
        ],
    },
    {
        tag: "Centralized Dashboard",
        title: "Unified View Across All Plants and Sites",
        description:
            "Monitor attendance, shift adherence, and compliance across units from one place. Simplifies reporting and gives real-time visibility to HR and management.",
        image: featureImg5,
        faqs: [
            {
                question: "Can we update multiple worker schedules at once?",
                answer:
                    "Yes. Bulk shift scheduling allows multiple worker schedules to be updated together.",
            },
            {
                question: "What if someone forgets to clock out?",
                answer:
                    "Attendance rules can identify missing clock-outs for manager review and correction.",
            },
            {
                question: "Can we plan rotating rosters across plants?",
                answer:
                    "Yes. Rotating shifts and plant-based rosters can be configured.",
            },
        ],
    },
 
    {
        tag: "Mobile and Tablet-Based Solution",
        title: "Flexible Clock-Ins for Every Site Setup",
        description:
            "Use shared tablets at entry gates or allow staff to clock in from personal mobiles. The manufacturing time and attendance system ensures flexibility for factories of every size and location.",
        image: featureImg6,
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

const Manufacturing = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const handleFaq = (featureIndex, faqIndex) => {
        const faqId = `${featureIndex}-${faqIndex}`;
        setOpenFaq(openFaq === faqId ? null : faqId);
    };

    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section className="manufacturing-hero">
                <div className="container manufacturing-container">
                    <div className="row align-items-center manufacturing-box">
                        <div className="col-lg-6 manufacturing-left">
                            <div className="manufacturing-tag">
                                Time and attendance tracking system
                            </div>
                            <h1 className="manufacturing-title">
Time and Attendance Software for Manufacturing Industry with Face Recognition                            </h1>
                            <ul className="manufacturing-list">
                                <li>
                                    <FaCheck />
                                    <span>Fast and accurate clock-ins</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Centralized visibility across all plants</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Prevents buddy punching</span>
                                </li>
                                  <li>
                                    <FaCheck />
                                    <span>Simplifies shift scheduling across sites</span>
                                </li>

                            </ul>
                            <button className="manufacturing-demo-btn">
                                Book a Demo
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="manufacturing-hero-image">
                                <img src={heroImg} alt="Manufacturing Attendance" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO SECTION ================= */}
            <section className="manufacturing-video-section">
                <div className="container">
                    <h2 className="manufacturing-video-title">
                        Trusted by Workforces Across Manufacturing Plants
                    </h2>
                    <div className="manufacturing-video-box">
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
            <section className="manufacturing-stats-section">
                <div className="container">
                    <div className="manufacturing-stats">
                        {statsData.map((item, index) => (
                            <div className="manufacturing-stat-item" key={index}>
                                <div className="manufacturing-stat-icon">
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
            <section className="manufacturing-case-section">
                <div className="container">
                    <div className="manufacturing-case-heading">
                        <h2>
                            How Rostrox Helps Manufacturing Companies
                        </h2>
                        <p>
                            Eliminating time theft and boosting workforce visibility at Manufacturing Plants
                        </p>
                    </div>
                    <div className="row align-items-center manufacturing-case-row">
                        <div className="col-lg-7">
                            <div className="manufacturing-case-content">
                                <div className="manufacturing-numbers">
                                    <div>
                                        <h3>800+</h3>
                                        <p>Plants</p>
                                    </div>
                                    <div>
                                        <h3>25,000+</h3>
                                        <p>Workers</p>
                                    </div>
                                </div>
                                <p className="manufacturing-description">
                                    Leading manufacturing companies operate across hundreds of production plants, often with multiple zones within a single facility. With teams working across various production lines and shifts, attendance tracking became complex, causing attendance leakages and production delays. Rostrox helped them bring accurate, centralized, and location-accurate attendance across their manufacturing plants.
                                </p>
                                <a href="#" className="manufacturing-case-link">
                                    Read Full Case Study
                                </a>
                                <div className="manufacturing-quote">
                                    <FaQuoteLeft className="quote-icon" />
                                    <p>
                                        Leading manufacturing companies operate across hundreds of production plants, often with multiple zones within a single facility. With teams working across various production lines and shifts, attendance tracking became complex, causing attendance leakages and production delays. Rostrox helped them bring accurate, centralized, and location-accurate attendance across their manufacturing plants.
                                    </p>
                                </div>
                                <div className="manufacturing-user">
                                    <img src={userImg} alt="Plant Manager" />
                                    <div>
                                        <h4>Rahul Sharma</h4>
                                        <p>Plant Director, Manufacturing Company</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="manufacturing-case-image">
                                <img src={caseStudyImg} alt="Case Study" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FEATURES SECTION ================= */}
            <section className="manufacturing-features-section">
                <div className="container manufacturing-features-container">
                    {manufacturingFeatures.map((feature, featureIndex) => (
                        <div
                            className={`manufacturing-feature-row ${featureIndex % 2 !== 0 ? "manufacturing-feature-reverse" : ""}`}
                            key={featureIndex}
                        >
                            {/* CONTENT */}
                            <div className="manufacturing-feature-content">
                                <span className="manufacturing-feature-tag">
                                    {feature.tag}
                                </span>
                                <h2>{feature.title}</h2>
                                <p className="manufacturing-feature-description">
                                    {feature.description}
                                </p>
                                <div className="manufacturing-faq-wrapper">
                                    <h4>Quick FAQs</h4>
                                    {feature.faqs.map((faq, faqIndex) => {
                                        const faqId = `${featureIndex}-${faqIndex}`;
                                        const isOpen = openFaq === faqId;
                                        return (
                                            <div className="manufacturing-faq-item" key={faqIndex}>
                                                <button
                                                    className="manufacturing-faq-question"
                                                    onClick={() => handleFaq(featureIndex, faqIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </button>
                                                <div className={`manufacturing-faq-answer ${isOpen ? "show" : ""}`}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* IMAGE */}
                            <div className="manufacturing-feature-image">
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

export default Manufacturing;