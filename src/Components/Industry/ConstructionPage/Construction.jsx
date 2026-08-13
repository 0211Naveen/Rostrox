import "./Construction.css";
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
    FaDraftingCompass
} from "react-icons/fa";

import heroImg from "../../../assets/construction/1.png";
import userImg from "../../../assets/construction/2.png";
import caseStudyImg from "../../../assets/construction/2.png";

import featureImg1 from "../../../assets/construction/3.png";
import featureImg2 from "../../../assets/construction/4.png";
import featureImg3 from "../../../assets/construction/5.png";
import featureImg4 from "../../../assets/construction/6.png";
import featureImg5 from "../../../assets/construction/7.png";


const statsData = [
    {
        icon: <FaGlobeAmericas />,
        number: "15",
        title: "Countries",
    },
    {
        icon: <FaMapMarkerAlt />,
        number: "5,000+",
        title: "Construction Sites",
    },
    {
        icon: <FaUsers />,
        number: "250,000+",
        title: "Workers",
    },
];

const constructionFeatures = [
    {
        tag: "Instant Onboarding",
        title: "Onboard Contract Staff with a Single Selfie",
        description:
            "Skip the paperwork and long queues. Truein’s construction site attendance app enables contract workers to self-register instantly on-site with a single selfie.",
        image: featureImg1,
        faqs: [
            {
                question: "How is proxy punching prevented on site?",
                answer:
                    "Face recognition with liveness detection ensures only the real worker can clock in at the geofenced construction zone.",
            },
            {
                question: "Can workers mark attendance outside the site?",
                answer:
                    "Geofencing prevents clock-ins unless the worker is physically inside the defined construction site perimeter.",
            },
            {
                question: "Does this work for multiple zones within a site?",
                answer:
                    "Yes. Each construction zone, floor, or area can be geofenced individually for accurate tracking.",
            },
        ],
    },
    {
        tag: "Zone-Based Tracking",
        title: "Accurate Attendance Across Large Construction Areas",
        description:
            "Large construction sites can be divided into geofenced zones, floors, or blocks. Workers clock in only within their assigned zone, keeping reporting and hours accurate.",
        image: featureImg2,
        faqs: [
            {
                question: "Can one site have multiple geofenced zones?",
                answer:
                    "Yes. Any number of zones, floors, or areas can be mapped for precise tracking.",
            },
            {
                question: "What if workers move across zones?",
                answer:
                    "Multi-zone access can be configured for workers who need to move between areas.",
            },
            {
                question: "Does this improve project billing?",
                answer:
                    "Yes. Hours automatically land in the correct zone, keeping dashboards and client billing accurate.",
            },
        ],
    },
    {
        tag: "Workforce Mobility",
        title: "Transfer Workers Across Sites Instantly",
        description:
            "Workers can shift between construction sites without re-registration. Their attendance history, policies, and access update instantly when they move.",
        image: featureImg3,
        faqs: [
            {
                question: "Do workers need re-registration when moved?",
                answer:
                    "No. Existing worker profiles can be transferred directly between approved sites.",
            },
            {
                question: "Will reporting break after transfers?",
                answer:
                    "No. Attendance history remains centralized and available after site transfers.",
            },
            {
                question: "Can we give temporary access to multiple sites?",
                answer:
                    "Yes. Temporary or multi-site access can be configured based on project needs.",
            },
        ],
    },
    {
        tag: "Contractor & Subcontractor Management",
        title: "Manage Subcontractor Agencies With Headcount Caps",
        description:
            "Map subcontractor agencies to sites, set attendance or headcount limits, and track documents with expiries. Give agencies limited visibility for their workers.",
        image: featureImg4,
        faqs: [
            {
                question: "Can we restrict attendance once the cap is reached?",
                answer:
                    "Yes. Headcount limits can be configured for individual subcontractor agencies.",
            },
            {
                question: "Can agencies manage their own staff?",
                answer:
                    "Yes. Controlled agency access can be provided for managing assigned workers.",
            },
            {
                question: "Can we track subcontractor documents?",
                answer:
                    "Yes. Documents and expiry information can be monitored centrally.",
            },
        ],
    },
    {
        tag: "24×7 Shift Handling",
        title: "Clean Attendance for Round-the-Clock Operations",
        description:
            "Cross-day shifts are auto-handled, ensuring accurate attendance for teams working day and night shifts on construction projects.",
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
                question: "Can we plan rotating rosters across sites?",
                answer:
                    "Yes. Rotating shifts and site-based rosters can be configured.",
            },
        ],
    },

   
];

const Construction = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const handleFaq = (featureIndex, faqIndex) => {
        const faqId = `${featureIndex}-${faqIndex}`;
        setOpenFaq(openFaq === faqId ? null : faqId);
    };

    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section className="construction-hero">
                <div className="container construction-container">
                    <div className="row align-items-center construction-box">
                        <div className="col-lg-6 construction-left">
                            <div className="construction-tag">
                                Time and attendance tracking system
                            </div>
                            <h1 className="construction-title">
                                Construction Time and Attendance Software with Face Recognition
                            </h1>
                            <ul className="construction-list">
                                <li>
                                    <FaCheck />
                                    <span>Payroll-ready Reports</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Multi-Sites & Centralized</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>70+ Customizable Policies</span>
                                </li>

                            </ul>
                            <button className="construction-demo-btn">
                                Book a Demo
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="construction-hero-image">
                                <img src={heroImg} alt="Construction Attendance" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO SECTION ================= */}
            <section className="construction-video-section">
                <div className="container">
                    <h2 className="construction-video-title">
                        Trusted by Workforces Across Construction Sites
                    </h2>
                    <div className="construction-video-box">
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
            <section className="construction-stats-section">
                <div className="container">
                    <div className="construction-stats">
                        {statsData.map((item, index) => (
                            <div className="construction-stat-item" key={index}>
                                <div className="construction-stat-icon">
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
            <section className="construction-case-section">
                <div className="container">
                    <div className="construction-case-heading">
                        <h2>
                            How Rostrox Helps Construction Companies
                        </h2>
                        <p>
                            Eliminating time theft and boosting workforce visibility at SJ Contracts
                        </p>
                    </div>
                    <div className="row align-items-center construction-case-row">
                        <div className="col-lg-7">
                            <div className="construction-case-content">
                                <div className="construction-numbers">
                                    <div>
                                        <h3>800+</h3>
                                        <p>Sites</p>
                                    </div>
                                    <div>
                                        <h3>25,000+</h3>
                                        <p>Workers</p>
                                    </div>
                                </div>
                                <p className="construction-description">
                                    Leading construction companies operate across hundreds of project sites, often with multiple zones within a single location. With teams working across various areas and shifts, attendance tracking became complex, causing attendance leakages and project delays. Rostrox helped them bring accurate, centralized, and location-accurate attendance across their construction sites.
                                </p>
                                <a href="#" className="construction-case-link">
                                    Read Full Case Study
                                </a>
                                <div className="construction-quote">
                                    <FaQuoteLeft className="quote-icon" />
                                    <p>
                                        Leading construction companies operate across hundreds of project sites, often with multiple zones within a single location. With teams working across various areas and shifts, attendance tracking became complex, causing attendance leakages and project delays. Rostrox helped them bring accurate, centralized, and location-accurate attendance across their construction sites.
                                    </p>
                                </div>
                                <div className="construction-user">
                                    <img src={userImg} alt="Project Manager" />
                                    <div>
                                        <h4>Rahul Sharma</h4>
                                        <p>Project Director, L&T Construction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="construction-case-image">
                                <img src={caseStudyImg} alt="Case Study" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FEATURES SECTION ================= */}
            <section className="construction-features-section">
                <div className="container construction-features-container">
                    {constructionFeatures.map((feature, featureIndex) => (
                        <div
                            className={`construction-feature-row ${featureIndex % 2 !== 0 ? "construction-feature-reverse" : ""}`}
                            key={featureIndex}
                        >
                            {/* CONTENT */}
                            <div className="construction-feature-content">
                                <span className="construction-feature-tag">
                                    {feature.tag}
                                </span>
                                <h2>{feature.title}</h2>
                                <p className="construction-feature-description">
                                    {feature.description}
                                </p>
                                <div className="construction-faq-wrapper">
                                    <h4>Quick FAQs</h4>
                                    {feature.faqs.map((faq, faqIndex) => {
                                        const faqId = `${featureIndex}-${faqIndex}`;
                                        const isOpen = openFaq === faqId;
                                        return (
                                            <div className="construction-faq-item" key={faqIndex}>
                                                <button
                                                    className="construction-faq-question"
                                                    onClick={() => handleFaq(featureIndex, faqIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </button>
                                                <div className={`construction-faq-answer ${isOpen ? "show" : ""}`}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* IMAGE */}
                            <div className="construction-feature-image">
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

export default Construction;