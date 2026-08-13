import "./MultiSiteWorkforce.css";
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
    FaNetworkWired,
    FaCity,
    FaLayerGroup,
    FaUserTie
} from "react-icons/fa";

import heroImg from "../../../assets/Multisite/1.webp";
import caseStudyImg from "../../../assets/Multisite/2.webp";
import userImg from "../../../assets/facitily.jpg";

import featureImg1 from "../../../assets/Multisite/3.webp";
import featureImg2 from "../../../assets/Multisite/4.webp";
import featureImg3 from "../../../assets/Multisite/5.webp";
import featureImg4 from "../../../assets/Multisite/6.webp";
import featureImg5 from "../../../assets/Multisite/7.webp";
import featureImg6 from "../../../assets/Multisite/8.webp";
import featureImg7 from "../../../assets/Multisite/9.webp";
import featureImg8 from "../../../assets/Multisite/10.webp";
import featureImg9 from "../../../assets/Multisite/11.webp";

const statsData = [
    {
        icon: <FaGlobeAmericas />,
        number: "30",
        title: "Countries",
    },
    {
        icon: <FaCity />,
        number: "10,000+",
        title: "Locations",
    },
    {
        icon: <FaUsers />,
        number: "1,000,000+",
        title: "Workers Managed",
    },
];

const multiSiteFeatures = [
    {
        tag: "Accurate Attendance",
        title: "Face Verified On-Site Clock-ins",
        description:
            "AI-powered face verification ensures only the right person clocks in, and GPS geofencing prevents off-site punches, eliminating time theft and keeping timesheets accurate.",
        image: featureImg1,
        faqs: [
            {
                question: "How is proxy punching prevented across multiple sites?",
                answer:
                    "Face recognition with liveness detection ensures only the real worker can clock in at their assigned geofenced location.",
            },
            {
                question: "Can workers mark attendance from any location?",
                answer:
                    "Geofencing restricts clock-ins to the worker's assigned location(s) only.",
            },
            {
                question: "How are multiple locations managed?",
                answer:
                    "Each location can be geofenced and configured individually with its own policies and settings.",
            },
        ],
    },
    {
        tag: "Instant Setup",
        title: "Instant Deployment at Any Site",
        description:
            "Set up new or temporary sites quickly using mobile devices or a shared tablet. No custom hardware or complex installation is required.",
        image: featureImg2,
        faqs: [
            {
                question: "Can we view data from all locations at once?",
                answer:
                    "Yes. The centralized dashboard provides a complete view of attendance across all locations.",
            },
            {
                question: "Is the data updated in real-time?",
                answer:
                    "Attendance data is updated in real-time as workers clock in and out across locations.",
            },
            {
                question: "Can we filter data by location or region?",
                answer:
                    "Yes. Data can be filtered by location, region, team, or any other configured grouping.",
            },
        ],
    },
    {
        tag: "Contract Worker Management",
        title: "Manage Contractor Agencies",
        description:
            "Map manpower agencies to sites, set attendance or headcount limits, store contract documents with expiry dates, and give contractor supervisors restricted access to only their workers and sites.",
        image: featureImg3,
        faqs: [
            {
                question: "Do workers need re-registration when moved?",
                answer:
                    "No. Existing worker profiles can be transferred directly between approved locations.",
            },
            {
                question: "Will reporting break after transfers?",
                answer:
                    "No. Attendance history remains centralized and available after location transfers.",
            },
            {
                question: "Can we give temporary access to multiple locations?",
                answer:
                    "Yes. Temporary or multi-location access can be configured based on operational needs.",
            },
        ],
    },
    {
        tag:"Quick Onboarding",
        title: "Instant Onboarding for Rotating Crews",
        description:
            "Add workers in bulk or register them at the gate using kiosk mode. A quick selfie creates their profile instantly so new or temporary workers can start clocking in right away.",
        image: featureImg4,
        faqs: [
            {
                question: "Can we have different policies for different locations?",
                answer:
                    "Yes. Each location can have its own attendance policies, shift timings, and rules.",
            },
            {
                question: "How are shifts handled across time zones?",
                answer:
                    "Policies can be configured based on local time zones for each location.",
            },
            {
                question: "Can we clone policies across locations?",
                answer:
                    "Yes. Policies can be cloned and customized for different locations.",
            },
        ],
    },
    {
        tag: "Shift Planning",
        title: "Plan and Control Shifts With Attendance Rules",
        description:
            "Create schedules in bulk or individually, and apply rules for grace periods, late marks and early outs. Missed exits can be auto-closed with clock-out rules, keeping shift records clean.",
        image: featureImg5,
        faqs: [
            {
                question: "How are different time zones handled?",
                answer:
                    "Each location operates on its local time zone with auto-adjusted reporting.",
            },
            {
                question: "Can we update multiple schedules at once?",
                answer:
                    "Yes. Bulk scheduling allows updates across locations and time zones.",
            },
            {
                question: "What about global holiday calendars?",
                answer:
                    "Each location can have its own holiday calendar based on local requirements.",
            },
        ],
    },
    {
        tag: "Job Tracking",
        title: "Track Hours Across Jobs and Activities",
        description:
            "Capture the job or activity at clock-in, or let supervisors assign it later. Split a day across multiple tasks and keep job hours accurate for reporting, costing or client billing.",
        image: featureImg6,
        faqs: [
            {
                question: "Can workers choose activities at clock-in?",
                answer:
                    "Yes. Workers can select from configured activities while recording attendance.",
            },
            {
                question: "Can a shift be split across activities?",
                answer:
                    "Yes. Work hours can be distributed across multiple activities or projects.",
            },
            {
                question: "Does this help with client billing?",
                answer:
                    "Yes. Accurate activity-level hours provide better data for client billing and reporting.",
            },
        ],
    },
 
    {
        tag: "Multi-Site Access",
        title: "Fast Transfers Across Sites ",
        description:
            "Move staff between sites instantly without re-registration. Their attendance history, access and policies update automatically, keeping records clean and accurate.",
        image: featureImg7,
        faqs: [
            {
                question: "Can we generate location-wise reports?",
                answer:
                    "Yes. Reports can be generated for individual locations, regions, or the entire organization.",
            },
            {
                question: "How often is report data updated?",
                answer:
                    "Reports are updated in real-time with the latest attendance data.",
            },
            {
                question: "Can reports be exported for compliance?",
                answer:
                    "Yes. Reports can be exported in multiple formats for compliance and auditing.",
            },
        ],
    },
     {
        tag: "Customizable Rules",
        title: "Customizable Policies for Clean, Compliant Records",
        description:
            "Use 70+ configurable rules for breaks, overtime, late arrivals, leaves and more. These policies keep records accurate and significantly reduce month-end reconciliation work.",
        image: featureImg8,
        faqs: [
            {
                question: "Can we generate location-wise reports?",
                answer:
                    "Yes. Reports can be generated for individual locations, regions, or the entire organization.",
            },
            {
                question: "How often is report data updated?",
                answer:
                    "Reports are updated in real-time with the latest attendance data.",
            },
            {
                question: "Can reports be exported for compliance?",
                answer:
                    "Yes. Reports can be exported in multiple formats for compliance and auditing.",
            },
        ],
    },
     {
        tag: "Multi-Site Visibility",
        title: "Centralized View Across All Sites",
        description:
            "See who’s in, late or missing across every site from one dashboard. Filter by site or contractor to review shift coverage, spot exceptions and resolve gaps quickly.",
        image: featureImg9,
        faqs: [
            {
                question: "Can we generate location-wise reports?",
                answer:
                    "Yes. Reports can be generated for individual locations, regions, or the entire organization.",
            },
            {
                question: "How often is report data updated?",
                answer:
                    "Reports are updated in real-time with the latest attendance data.",
            },
            {
                question: "Can reports be exported for compliance?",
                answer:
                    "Yes. Reports can be exported in multiple formats for compliance and auditing.",
            },
        ],
    },
];

const MultiSiteWorkforce = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const handleFaq = (featureIndex, faqIndex) => {
        const faqId = `${featureIndex}-${faqIndex}`;
        setOpenFaq(openFaq === faqId ? null : faqId);
    };

    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section className="multisite-hero">
                <div className="container multisite-container">
                    <div className="row align-items-center multisite-box">
                        <div className="col-lg-6 multisite-left">
                            <div className="multisite-tag">
                                Centralized and Foolproof

                            </div>
                            <h1 className="multisite-title">
                                Accurate Time Tracking for Hourly, Contract, and Site-Based Workers

                            </h1>
                            <ul className="multisite-list">
                                <li>
                                    <FaCheck />
                                    <span>Accurate face-based clock-ins</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Location-verified clock-ins</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Prevent time fraud</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Real-time multi-site visibility</span>
                                </li>

                            </ul>
                            <button className="multisite-demo-btn">
                                Book a Demo
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="multisite-hero-image">
                                <img src={heroImg} alt="Multi-Site Workforce Attendance" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO SECTION ================= */}
            <section className="multisite-video-section">
                <div className="container">
                    <h2 className="multisite-video-title">
                        Trusted by Workforces Across Multiple Locations
                    </h2>
                    <div className="multisite-video-box">
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
            <section className="multisite-stats-section">
                <div className="container">
                    <div className="multisite-stats">
                        {statsData.map((item, index) => (
                            <div className="multisite-stat-item" key={index}>
                                <div className="multisite-stat-icon">
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
            <section className="multisite-case-section">
                <div className="container">
                    <div className="multisite-case-heading">
                        <h2>
                            How Rostrox Helps Multi-Site Organizations
                        </h2>
                        <p>
                            Eliminating time theft and boosting workforce visibility across all locations
                        </p>
                    </div>
                    <div className="row align-items-center multisite-case-row">
                        <div className="col-lg-7">
                            <div className="multisite-case-content">
                                <div className="multisite-numbers">
                                    <div>
                                        <h3>1,000+</h3>
                                        <p>Locations</p>
                                    </div>
                                    <div>
                                        <h3>100,000+</h3>
                                        <p>Workers</p>
                                    </div>
                                </div>
                                <p className="multisite-description">
                                    Leading organizations operate across hundreds of locations, often with unique requirements for each site. With teams working across various regions, time zones, and shifts, attendance tracking became complex, causing attendance leakages and operational inefficiencies. Rostrox helped them bring accurate, centralized, and location-accurate attendance across all their sites.
                                </p>
                                <a href="#" className="multisite-case-link">
                                    Read Full Case Study
                                </a>
                                <div className="multisite-quote">
                                    <FaQuoteLeft className="quote-icon" />
                                    <p>
                                        Leading organizations operate across hundreds of locations, often with unique requirements for each site. With teams working across various regions, time zones, and shifts, attendance tracking became complex, causing attendance leakages and operational inefficiencies. Rostrox helped them bring accurate, centralized, and location-accurate attendance across all their sites.
                                    </p>
                                </div>
                                <div className="multisite-user">
                                    <img src={userImg} alt="Operations Manager" />
                                    <div>
                                        <h4>Rahul Sharma</h4>
                                        <p>Operations Director, Multi-Site Organization</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="multisite-case-image">
                                <img src={caseStudyImg} alt="Case Study" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FEATURES SECTION ================= */}
            <section className="multisite-features-section">
                <div className="container multisite-features-container">
                    {multiSiteFeatures.map((feature, featureIndex) => (
                        <div
                            className={`multisite-feature-row ${featureIndex % 2 !== 0 ? "multisite-feature-reverse" : ""}`}
                            key={featureIndex}
                        >
                            {/* CONTENT */}
                            <div className="multisite-feature-content">
                                <span className="multisite-feature-tag">
                                    {feature.tag}
                                </span>
                                <h2>{feature.title}</h2>
                                <p className="multisite-feature-description">
                                    {feature.description}
                                </p>
                                <div className="multisite-faq-wrapper">
                                    <h4>Quick FAQs</h4>
                                    {feature.faqs.map((faq, faqIndex) => {
                                        const faqId = `${featureIndex}-${faqIndex}`;
                                        const isOpen = openFaq === faqId;
                                        return (
                                            <div className="multisite-faq-item" key={faqIndex}>
                                                <button
                                                    className="multisite-faq-question"
                                                    onClick={() => handleFaq(featureIndex, faqIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </button>
                                                <div className={`multisite-faq-answer ${isOpen ? "show" : ""}`}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* IMAGE */}
                            <div className="multisite-feature-image">
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

export default MultiSiteWorkforce;