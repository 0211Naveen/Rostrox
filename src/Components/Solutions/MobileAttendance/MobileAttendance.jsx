import "./MobileAttendance.css";
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

} from "react-icons/fa";

import heroImg from "../../../assets/Mobile-Attendance/1.webp";
import overviewImg from "../../../assets/Mobile-Attendance/2.webp";




import featureImg1 from "../../../assets/Mobile-Attendance/3.webp";
import featureImg2 from "../../../assets/Mobile-Attendance/4.webp";
import featureImg3 from "../../../assets/Mobile-Attendance/5.webp";
import featureImg4 from "../../../assets/Mobile-Attendance/6.webp";



import Integrations from "../Integrations/Integrations";

const statsData = [
    {
        icon: <FaGlobeAmericas />,
        number: "45",
        title: "Countries",
    },
    {
        icon: <FaMobileAlt />,
        number: "25,000+",
        title: "Mobile Devices",
    },
    {
        icon: <FaUsers />,
        number: "1,500,000+",
        title: "Active Users",
    },
];


const benefitsData = [
    {
        icon: <FaIdCard />,
        title: "Made for Contract and Multi-Site Workforce",
        desc: "Purpose-built for contractors, temp staff, and site-based workforce with complex schedules.",
        className: "benefit-large",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Policy Control at Scale",
        desc: "Over 70 customizable rules to manage shifts, overtime, and other compliance automatically.",
        className: "benefit-large",
    },
    {
        icon: <FaMobileAlt />,
        title: "No Hardware,Instant Setup",
        desc: "Works on mobiles and tablets, making it portable and easy to deploy anywhere.",
        className: "benefit-small",
    },
    {
        icon: <FaUserCheck />,
        title: "Foolproof, Tamper-Proof Attendance",
        desc: "AI face recognition with GPS geoflocation ensures accurate clock-ins every time.",
        className: "benefit-small",
    },
    {
        icon: <FaCoins />,
        title: "Centralized Visibility",
        desc: "One dashboard for real-time tracking, payroll-ready reports, and actionable insights across all sites.",
        className: "benefit-wide",
    },
];



const mobileFeatures = [
    {
        tag: "Mobile Attendance App",
        title: "Clock in from Anywhere, Any Device",
        description:
            "Rosteox's mobile clocking system runs on any Android or iOS device. Staff can clock in using their own phone, through a shared kiosk at the site, or supervisors can mark attendance for workers directly from their phone. No bulky machines or wiring needed.",
        image: featureImg1,
        faqs: [
            {
                question: "How do staff clock in without hardware?",
                answer:
                    "They can use their own phone’s camera, a shared kiosk running the Rosteox app, or have a supervisor record attendance on their behalf.",
            },
            {
                question: "Is the setup complicated?",
                answer:
                    "No. Install the app, set your policies, and start tracking in minutes.",
            },
            {
                question: "Can the same device be used by multiple staff?",
                answer:
                    "Yes. Multiple staff can clock in through kiosk mode, and supervisors can mark attendance on the same device.",
            },
        ],
    },
    {
        tag: "GPS Geofenced Attendance Tracking",
        title: "Clock In/Out at Multiple Locations",
        description:
            "Perfect for teams working across sites. GPS geofencing ensures clock-ins only happen in approved zones. The centralized dashboard shows real-time data across all locations for accurate tracking.",
        image: featureImg2,
        faqs: [
            {
                question: "How accurate is the geofencing?",
                answer:
                    "Boundaries can be set as tight as 20 meters for precise location verification.",
            },
            {
                question: "Can one person clock in at different sites in a single day?",
                answer:
                    "Yes. Rosteox's mobile attendance system can log multiple site entries and exits for the same staff.",
            },
            {
                question: "Can I monitor all sites from one place?",
                answer:
                    "Yes, the dashboard consolidates attendance from every location instantly.",
            },
        ],
    },

    {
        tag: "Facial Recognition Attendance System",
        title: "Selfie Attendance with Facial Recognition",
        description:
            "AI-powered face recognition ensures accurate and fraud-proof clock-ins, even with masks, glasses, or changes in appearance.",
        image: featureImg3,
        faqs: [
            {
                question: "Does it work with safety gear or PPE?",
                answer:
                    "Yes. The selfie attendance app recognizes faces even with helmets, goggles, or masks.",
            },
            {
                question: "Can it identify the same person after major appearance changes?",
                answer:
                    "Yes, it adapts to beards, hairstyles, and aging effects.",
            },
            {
                question: "Is the process fast?",
                answer:
                    "Clock-in takes under 2 seconds in most conditions.",
            },
        ],
    },
    {
        tag: "Attendance Reports and Analytics",
        title: "Detailed Reports and Analytics",
        description:
            "Generate payroll-ready reports automatically, daily, weekly, or monthly, in the format of your choice. Eliminate manual reconciliation.",
        image: featureImg4,
        faqs: [
            {
                question: "Can I schedule reports to be sent automatically?",
                answer:
                    "Yes, reports can be auto-emailed to selected managers.",
            },
            {
                question: "Are reports customizable?",
                answer:
                    "Yes, you can include or exclude specific metrics as needed.",
            },
            {
                question: "Does it integrate with payroll software?",
                answer:
                    "Yes. The data of the mobile attendance system can be exported for easy payroll processing.",
            },
        ],
    },


];


const solutionsData = [
    {
        icon: <FaUserCheck />,
        title: "Contract Staff Attendance",
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
        title: "Attendance Analytics Dashboard",
    },
    {
        icon: <FaChartBar />,
        title: "Reports & Analytics",
    },
];

const MobileAttendance = () => {
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
            <section className="mobileattendance-hero">
                <div className="container mobileattendance-container">
                    <div className="row align-items-center mobileattendance-box">
                        <div className="col-lg-6 mobileattendance-left">
                            <div className="mobileattendance-tag">
                                Centralized and robust time tracking

                            </div>
                            <h1 className="mobileattendance-title">
                                Mobile Attendance App With Face Recognition for Multi-Site Staff                            </h1>
                            <ul className="mobileattendance-list">
                                <li>
                                    <FaCheck />
                                    <span>Built for Contract & Site-Based Teams</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Track Jobs, Shifts & Overtime </span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>No Hardware. No Gaps. Just Accuracy</span>
                                </li>

                            </ul>
                            <button className="mobileattendance-demo-btn">
                                Book a Demo
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="mobileattendance-hero-image">
                                <img src={heroImg} alt="Mobile Attendance System" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO SECTION ================= */}
            <section className="mobileattendance-video-section">
                <div className="container">
                    <h2 className="mobileattendance-video-title">
                        Trusted by Workforces Across Industries
                    </h2>
                    <div className="mobileattendance-video-box">
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
            <section className="mobileattendance-stats-section">
                <div className="container">
                    <div className="mobileattendance-stats">
                        {statsData.map((item, index) => (
                            <div className="mobileattendance-stat-item" key={index}>
                                <div className="mobileattendance-stat-icon">
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


            < SubNavbar />

            {/* ================= OVERVIEW SECTION ================= */}

            <section className="attendance-overview-section " id="overview">
                <div className="container attendance-overview-container">


                    {/* CONTENT */}

                    <div className="attendance-overview-content">

                        <span className="attendance-small-title">
                            Feature Overview
                        </span>

                        <h2>
                            Mobile Time and Attendance System with Facial Recognition
                        </h2>

                        <p>
                            Mark attendance in seconds with this face recognition attendance software. GPS geolocation,and over 70 policy options ensure accurate and compliant attendance across all sites.

                        </p>

                        <div className="attendance-overview-image">
                            <img
                                src={overviewImg}
                                alt="AI Powered Attendance"
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

                        <h2>What Makes Rostrox Stand Out?</h2>
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
            <section className="mobileattendance-features-section" id="features">
                <div className="container mobileattendance-features-container">
                    {mobileFeatures.map((feature, featureIndex) => (
                        <div
                            className={`mobileattendance-feature-row ${featureIndex % 2 !== 0 ? "mobileattendance-feature-reverse" : ""}`}
                            key={featureIndex}
                        >
                            {/* CONTENT */}
                            <div className="mobileattendance-feature-content">
                                <span className="mobileattendance-feature-tag">
                                    {feature.tag}
                                </span>
                                <h2>{feature.title}</h2>
                                <p className="mobileattendance-feature-description">
                                    {feature.description}
                                </p>
                                <div className="mobileattendance-faq-wrapper">
                                    <h4>Quick FAQs</h4>
                                    {feature.faqs.map((faq, faqIndex) => {
                                        const faqId = `${featureIndex}-${faqIndex}`;
                                        const isOpen = openFaq === faqId;
                                        return (
                                            <div className="mobileattendance-faq-item" key={faqIndex}>
                                                <button
                                                    className="mobileattendance-faq-question"
                                                    onClick={() => handleFaq(featureIndex, faqIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </button>
                                                <div className={`mobileattendance-faq-answer ${isOpen ? "show" : ""}`}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* IMAGE */}
                            <div className="mobileattendance-feature-image">
                                <img src={feature.image} alt={feature.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            < Integrations />

            <AttendanceTools />

            < Advantage />




            <section className="mobilesolutions-section">
                <div className="container">
                    <div className="mobilesolutions-wrapper">

                        <div className="mobilesolutions-left">
                            <h2>
                                Explore Our Other <br />
                                Rostrox Workforce <br />
                                Solutions
                            </h2>
                        </div>

                        <div className="mobilesolutions-grid">
                            {solutionsData.map((item, index) => (
                                <div className="mobilesolutions-card" key={index}>
                                    <div className="mobilesolutions-icon">
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

export default MobileAttendance;