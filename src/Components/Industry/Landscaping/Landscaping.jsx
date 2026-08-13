import "./Landscaping.css";
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
    FaTree,
    FaSeedling,
    FaWater,
    FaCut
} from "react-icons/fa";

import heroImg from "../../../assets/Landscaping/1.webp";


import featureImg1 from "../../../assets/Landscaping/2.webp";
import featureImg2 from "../../../assets/Landscaping/3.webp";
import featureImg3 from "../../../assets/Landscaping/4.webp";
import featureImg4 from "../../../assets/Landscaping/5.webp";
import featureImg5 from "../../../assets/Landscaping/6.webp";


const statsData = [
    {
        icon: <FaGlobeAmericas />,
        number: "10",
        title: "Countries",
    },
    {
        icon: <FaTree />,
        number: "2,000+",
        title: "Landscaping Projects",
    },
    {
        icon: <FaUsers />,
        number: "120,000+",
        title: "Workers",
    },
];

const landscapingFeatures = [
    {
        tag: "Face-Based Clock-In",
        title: "Fast Onboarding, No More Buddy Punching with Face Verification",
        description:
            "Onboard your entire crew in minutes. Add staff in bulk and have them register their face instantly via kiosk or mobile app. Every clock-in is face-verified to help prevent buddy punching and proxy attendance.",
        image: featureImg1,
        faqs: [
            {
                question: "How is proxy punching prevented on landscaping sites?",
                answer:
                    "Face recognition with liveness detection ensures only the real worker can clock in at the geofenced project location.",
            },
            {
                question: "Can workers mark attendance outside the site?",
                answer:
                    "Geofencing prevents clock-ins unless the worker is physically inside the defined landscaping site perimeter.",
            },
            {
                question: "Does this work for multiple project zones?",
                answer:
                    "Yes. Each project area or zone can be geofenced individually for accurate tracking.",
            },
        ],
    },
    {
        tag: "Zone-Based ",
        title: "Accurate Attendance Across Landscaping Areas",
        description:
            "Large landscaping projects can be divided into geofenced zones like planting areas, lawn sections, hardscaping zones, or irrigation zones. Workers clock in only within their assigned zone, keeping reporting and hours accurate.",
        image: featureImg2,
        faqs: [
            {
                question: "Can one project have multiple geofenced zones?",
                answer:
                    "Yes. Any number of zones or areas can be mapped for precise tracking.",
            },
            {
                question: "What if workers move across zones?",
                answer:
                    "Multi-zone access can be configured for workers who need to move between different landscaping areas.",
            },
            {
                question: "Does this improve project billing?",
                answer:
                    "Yes. Hours automatically land in the correct zone, keeping dashboards and client billing accurate.",
            },
        ],
    },
    {
        tag: "No Custom Hardware Required",
        title: "Clock In With Mobile or Shared Kiosk",
        description:
            "No complicated setup. Landscaping employees can clock in from their smartphone or a shared kiosk placed at the job site.",
        image: featureImg3,
        faqs: [
            {
                question: "Do workers need re-registration when moved?",
                answer:
                    "No. Existing worker profiles can be transferred directly between approved project sites.",
            },
            {
                question: "Will reporting break after transfers?",
                answer:
                    "No. Attendance history remains centralized and available after project transfers.",
            },
            {
                question: "Can we give temporary access to multiple sites?",
                answer:
                    "Yes. Temporary or multi-site access can be configured based on project needs.",
            },
        ],
    },
    {
        tag: "GPS Geofencing",
        title: "Clock-In from Approved Job Sites Only",
        description:
            "Prevent time theft with Truein’s geofenced clock in. Only allow punches from approved job sites. Landscaping workforce members can only punch in when they are physically present at the job site.",
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
        tag: "Multi-Site Visibility",
        title: "Real-Time Crew Visibility Across All Job Sites",
        description:
            "See who has arrived, who is late, and which crews are on-site across all your landscaping job locations from one dashboard.",
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
                question: "Can we plan rotating rosters across projects?",
                answer:
                    "Yes. Rotating shifts and project-based rosters can be configured.",
            },
        ],
    },
   
];

const Landscaping = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const handleFaq = (featureIndex, faqIndex) => {
        const faqId = `${featureIndex}-${faqIndex}`;
        setOpenFaq(openFaq === faqId ? null : faqId);
    };

    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section className="landscaping-hero">
                <div className="container landscaping-container">
                    <div className="row align-items-center landscaping-box">
                        <div className="col-lg-6 landscaping-left">
                            <div className="landscaping-tag">
                                Time and attendance tracking system

                            </div>
                            <h1 className="landscaping-title">
                                Time Tracking Software for Landscaping Crew that Cuts Time Theft                            </h1>
                            <ul className="landscaping-list">
                                <li>
                                    <FaCheck />
                                    <span>Cut Payroll Losses from Buddy Punching</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>End Manual Timesheets, Run Payroll Faster</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Track Crew Across Every Job Site</span>
                                </li>

                            </ul>
                            <button className="landscaping-demo-btn">
                                Book a Demo
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="landscaping-hero-image">
                                <img src={heroImg} alt="Landscaping Attendance" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO SECTION ================= */}
            <section className="landscaping-video-section">
                <div className="container">
                    <h2 className="landscaping-video-title">
                        Trusted by Workforces Across Landscaping Projects
                    </h2>
                    <div className="landscaping-video-box">
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
            <section className="landscaping-stats-section">
                <div className="container">
                    <div className="landscaping-stats">
                        {statsData.map((item, index) => (
                            <div className="landscaping-stat-item" key={index}>
                                <div className="landscaping-stat-icon">
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

          

            {/* ================= FEATURES SECTION ================= */}
            <section className="landscaping-features-section">
                <div className="container landscaping-features-container">
                    {landscapingFeatures.map((feature, featureIndex) => (
                        <div
                            className={`landscaping-feature-row ${featureIndex % 2 !== 0 ? "landscaping-feature-reverse" : ""}`}
                            key={featureIndex}
                        >
                            {/* CONTENT */}
                            <div className="landscaping-feature-content">
                                <span className="landscaping-feature-tag">
                                    {feature.tag}
                                </span>
                                <h2>{feature.title}</h2>
                                <p className="landscaping-feature-description">
                                    {feature.description}
                                </p>
                                <div className="landscaping-faq-wrapper">
                                    <h4>Quick FAQs</h4>
                                    {feature.faqs.map((faq, faqIndex) => {
                                        const faqId = `${featureIndex}-${faqIndex}`;
                                        const isOpen = openFaq === faqId;
                                        return (
                                            <div className="landscaping-faq-item" key={faqIndex}>
                                                <button
                                                    className="landscaping-faq-question"
                                                    onClick={() => handleFaq(featureIndex, faqIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </button>
                                                <div className={`landscaping-faq-answer ${isOpen ? "show" : ""}`}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* IMAGE */}
                            <div className="landscaping-feature-image">
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

export default Landscaping;