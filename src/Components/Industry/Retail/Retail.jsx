import "./Retail.css";
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
    FaStore,
    FaShoppingBag,
    FaCashRegister
} from "react-icons/fa";




import heroImg from "../../../assets/Retail/1.webp";
import caseStudyImg from "../../../assets/Retail/2.webp";
import userImg from "../../../assets/facitily.jpg";

import featureImg1 from "../../../assets/Retail/3.webp";
import featureImg2 from "../../../assets/Retail/4.webp";
import featureImg3 from "../../../assets/Retail/5.webp";
import featureImg4 from "../../../assets/Retail/6.webp";
import featureImg5 from "../../../assets/Retail/7.webp";
import featureImg6 from "../../../assets/Retail/8.webp";
import featureImg7 from "../../../assets/Retail/9.webp";
import featureImg8 from "../../../assets/Retail/10.webp";
import featureImg9 from "../../../assets/Retail/11.webp";

const statsData = [
    {
        icon: <FaGlobeAmericas />,
        number: "25",
        title: "Countries",
    },
    {
        icon: <FaStore />,
        number: "10,000+",
        title: "Retail Stores",
    },
    {
        icon: <FaUsers />,
        number: "500,000+",
        title: "Employees",
    },
];

const retailFeatures = [
    {
        tag: "Mobile & Tablet Based",
        title: "Stop Time Theft at Store Entry",
        description:
            "Store staff clock in on shared tablets or mobiles using face recognition at the entrance, so attendance is tied to the right person at the correct outlet.",
        image: featureImg1,
        faqs: [
            {
                question: "How is proxy punching prevented in retail?",
                answer:
                    "Face recognition with liveness detection ensures only the real employee can clock in at the geofenced store location.",
            },
            {
                question: "Can employees mark attendance outside the store?",
                answer:
                    "Geofencing prevents clock-ins unless the employee is physically inside the defined store perimeter.",
            },
            {
                question: "Does this work for multiple store locations?",
                answer:
                    "Yes. Each store location can be geofenced individually for accurate tracking across all retail outlets.",
            },
        ],
    },
    {
        tag: "Staff Rotation & Transfers",
        title: "Manage Frequent Staff Movement Across Stores",
        description:
            "Store staff are enrolled once and can be assigned to multiple outlets, so you can shift them between stores during seasonal peaks or sudden rush while their hours are recorded separately for each location.",
        image: featureImg2,
        faqs: [
            {
                question: "Can one store have multiple geofenced zones?",
                answer:
                    "Yes. Any number of zones or departments can be mapped for precise tracking.",
            },
            {
                question: "What if employees move across zones?",
                answer:
                    "Multi-zone access can be configured for employees who need to work in different store areas.",
            },
            {
                question: "Does this improve labor cost management?",
                answer:
                    "Yes. Hours automatically land in the correct zone, keeping dashboards and labor cost reporting accurate.",
            },
        ],
    },
    {
        tag: "Multi-Store Visibility",
        title: "See Which Stores Are Understaffed in Real Time",
        description:
            "HQ and regional teams get a single dashboard for all outlets, showing who has clocked in at each store so understaffed or unattended locations are spotted before they affect customers.",
        image: featureImg3,
        faqs: [
            {
                question: "Do employees need re-registration when moved?",
                answer:
                    "No. Existing employee profiles can be transferred directly between approved store locations.",
            },
            {
                question: "Will reporting break after transfers?",
                answer:
                    "No. Attendance history remains centralized and available after store transfers.",
            },
            {
                question: "Can we give temporary access to multiple stores?",
                answer:
                    "Yes. Temporary or multi-store access can be configured based on business needs.",
            },
        ],
    },
    {
        tag: "Shift & Workforce Planner",
        title: "Handle Peak Hours and Last-minute Shift Changes",
        description:
            "Create store-wise rosters for regular, peak-hour, and weekend shifts, then adjust quickly when staff swap or demand spikes without losing visibility of who was planned where.",
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
                    "Yes. Controlled agency access can be provided for managing assigned employees.",
            },
            {
                question: "Can we track agency documents?",
                answer:
                    "Yes. Documents and expiry information can be monitored centrally.",
            },
        ],
    },
    {
        tag: "Overtime & Comp-off",
        title: "Control Extra Hours During Sales and Peak Seasons",
        description:
            "Define clear overtime and comp-off rules so extra hours during weekend rush or sale events are approved, tracked, and paid or compensated correctly across stores.",
        image: featureImg5,
        faqs: [
            {
                question: "Can we update multiple employee schedules at once?",
                answer:
                    "Yes. Bulk shift scheduling allows multiple employee schedules to be updated together.",
            },
            {
                question: "What if someone forgets to clock out?",
                answer:
                    "Attendance rules can identify missing clock-outs for manager review and correction.",
            },
            {
                question: "Can we plan rotating rosters across stores?",
                answer:
                    "Yes. Rotating shifts and store-based rosters can be configured.",
            },
        ],
    },
    {
        tag: "Attendance Policies & Compliance",
        title: "Enforce Late-ins, Early-outs, and Weekly Off Rules Across Stores",
        description:
            "Set chain-wide or store-specific rules for late arrivals, early departures, weekly offs, and shift limits so issues are flagged before they become compliance or payroll problems.",
        image: featureImg6,
        faqs: [
            {
                question: "Can employees choose the right activity at clock-in?",
                answer:
                    "Yes. Employees can select configured activities while recording attendance.",
            },
            {
                question: "Can a single shift be split across tasks?",
                answer:
                    "Yes. Work hours can be distributed across multiple activities.",
            },
            {
                question: "Will this help with labor optimization?",
                answer:
                    "Yes. Accurate activity-level hours provide better data for labor cost optimization and reporting.",
            },
        ],
    },
    {
        tag: "Store Manager Controls",
        title: "Reduce Manual Fixes and Follow-ups at Store Level",
        description:
            "Store managers get a single place to approve regularization, overtime, and attendance corrections, so most issues are resolved in-store instead of over emails and spreadsheets.",
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
    {
        tag: "Job and Activity Tagging",
        title: "Track Hours Across Store Jobs and Activities",
        description:
            "Store staff select the job or activity at clock-in, such as billing, floor support, or stock work, so their hours are linked to the right work inside each store.",
        image: featureImg8,
        faqs: [
            {
                question: "Can we filter by store or department?",
                answer:
                    "Yes. Attendance information can be filtered by store, department, team, or other configured groups.",
            },
            {
                question: "Is the data real-time?",
                answer:
                    "Attendance data is updated as employees clock in and out.",
            },
            {
                question: "Can we download summaries for management reviews?",
                answer:
                    "Yes. Attendance reports can be prepared for operational and management reviews.",
            },
        ],
    },
     {
        tag: "Integration & Sync",
        title: "Seamless Integration with Payroll and HRMS",
        description:
            "Rostrox offers integration with existing systems so staff master, leave, and payroll-ready attendance from all stores flow into your HR, payroll, or ERP tools without duplicate entry.",
        image: featureImg9,
        faqs: [
            {
                question: "Can we filter by store or department?",
                answer:
                    "Yes. Attendance information can be filtered by store, department, team, or other configured groups.",
            },
            {
                question: "Is the data real-time?",
                answer:
                    "Attendance data is updated as employees clock in and out.",
            },
            {
                question: "Can we download summaries for management reviews?",
                answer:
                    "Yes. Attendance reports can be prepared for operational and management reviews.",
            },
        ],
    },
];



const Retail = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const handleFaq = (featureIndex, faqIndex) => {
        const faqId = `${featureIndex}-${faqIndex}`;
        setOpenFaq(openFaq === faqId ? null : faqId);
    };

    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section className="retail-hero">
                <div className="container retail-container">
                    <div className="row align-items-center retail-box">
                        <div className="col-lg-6 retail-left">
                            <div className="retail-tag">
                                Retail Workforce Visibility

                            </div>
                            <h1 className="retail-title">
                                Face-Based Time & Attendance for Multi-Store Retail Teams                            </h1>
                            <ul className="retail-list">
                                <li>
                                    <FaCheck />
                                    <span>Accurate clock-ins</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>No proxy punches</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Centralized control</span>
                                </li>

                            </ul>
                            <button className="retail-demo-btn">
                                Book a Demo
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="retail-hero-image">
                                <img src={heroImg} alt="Retail Attendance" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO SECTION ================= */}
            <section className="retail-video-section">
                <div className="container">
                    <h2 className="retail-video-title">
                        Trusted by Workforces Across Retail Stores
                    </h2>
                    <div className="retail-video-box">
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
            <section className="retail-stats-section">
                <div className="container">
                    <div className="retail-stats">
                        {statsData.map((item, index) => (
                            <div className="retail-stat-item" key={index}>
                                <div className="retail-stat-icon">
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
            <section className="retail-case-section">
                <div className="container">
                    <div className="retail-case-heading">
                        <h2>
                            How Rostrox Helps Retail Companies
                        </h2>
                        <p>
                            Eliminating time theft and boosting workforce visibility at Retail Stores
                        </p>
                    </div>
                    <div className="row align-items-center retail-case-row">
                        <div className="col-lg-7">
                            <div className="retail-case-content">
                                <div className="retail-numbers">
                                    <div>
                                        <h3>800+</h3>
                                        <p>Stores</p>
                                    </div>
                                    <div>
                                        <h3>25,000+</h3>
                                        <p>Employees</p>
                                    </div>
                                </div>
                                <p className="retail-description">
                                    Leading retail companies operate across hundreds of store locations, often with multiple departments within a single store. With teams working across various areas and shifts, attendance tracking became complex, causing attendance leakages and operational delays. Rostrox helped them bring accurate, centralized, and location-accurate attendance across their retail stores.
                                </p>
                                <a href="#" className="retail-case-link">
                                    Read Full Case Study
                                </a>
                                <div className="retail-quote">
                                    <FaQuoteLeft className="quote-icon" />
                                    <p>
                                        Leading retail companies operate across hundreds of store locations, often with multiple departments within a single store. With teams working across various areas and shifts, attendance tracking became complex, causing attendance leakages and operational delays. Rostrox helped them bring accurate, centralized, and location-accurate attendance across their retail stores.
                                    </p>
                                </div>
                                <div className="retail-user">
                                    <img src={userImg} alt="Store Manager" />
                                    <div>
                                        <h4>Rahul Sharma</h4>
                                        <p>Operations Director, Retail Chain</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="retail-case-image">
                                <img src={caseStudyImg} alt="Case Study" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FEATURES SECTION ================= */}
            <section className="retail-features-section">
                <div className="container retail-features-container">
                    {retailFeatures.map((feature, featureIndex) => (
                        <div
                            className={`retail-feature-row ${featureIndex % 2 !== 0 ? "retail-feature-reverse" : ""}`}
                            key={featureIndex}
                        >
                            {/* CONTENT */}
                            <div className="retail-feature-content">
                                <span className="retail-feature-tag">
                                    {feature.tag}
                                </span>
                                <h2>{feature.title}</h2>
                                <p className="retail-feature-description">
                                    {feature.description}
                                </p>
                                <div className="retail-faq-wrapper">
                                    <h4>Quick FAQs</h4>
                                    {feature.faqs.map((faq, faqIndex) => {
                                        const faqId = `${featureIndex}-${faqIndex}`;
                                        const isOpen = openFaq === faqId;
                                        return (
                                            <div className="retail-faq-item" key={faqIndex}>
                                                <button
                                                    className="retail-faq-question"
                                                    onClick={() => handleFaq(featureIndex, faqIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </button>
                                                <div className={`retail-faq-answer ${isOpen ? "show" : ""}`}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* IMAGE */}
                            <div className="retail-feature-image">
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

export default Retail;