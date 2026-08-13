import "./CloudBasedTimeAttendance.css";
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
    FaCloud,
    FaServer,
    FaDatabase,
    FaCloudUploadAlt,
    FaCloudDownloadAlt,
    FaNetworkWired,
    FaShieldAlt,
    FaSyncAlt,
    FaRegClock,
    FaFileInvoiceDollar,
    FaUserClock,
    FaClipboardList,
} from "react-icons/fa";




import heroImg from "../../../assets/Cloud/1.webp";

import overviewImg from "../../../assets/Cloud/2.webp";



import featureImg1 from "../../../assets/Cloud/3.webp";
import featureImg2 from "../../../assets/Cloud/4.webp";
import featureImg3 from "../../../assets/Cloud/5.webp";
import featureImg4 from "../../../assets/Cloud/6.webp";
import featureImg5 from "../../../assets/Cloud/7.webp";
import featureImg6 from "../../../assets/Cloud/8.webp";

import Integrations from "../Integrations/Integrations";

const statsData = [
    {
        icon: <FaGlobeAmericas />,
        number: "60+",
        title: "Countries",
    },
    {
        icon: <FaMobileAlt />,
        number: "35,000+",
        title: "Mobile Devices",
    },
    {
        icon: <FaUsers />,
        number: "2,000,000+",
        title: "Active Users",
    },
];


// const benefitsData = [
//     {
//         icon: <FaCloud />,
//         title: "Centralized Multi-Site Time Tracking",
//         desc: "Track attendance and shifts on any device, with records centralized in the cloud and ready for large-scale deployment.",
//         className: "benefit-large",
//     },
//     {
//         icon: <FaServer />,
//         title: "Accurate, Payroll-Ready Reports",
//         desc: "Automatically calculate work hours, apply site-specific rules, and generate payroll-ready data with zero manual edits or delays.",
//         className: "benefit-large",
//     },
//     {
//         icon: <FaShieldAlt />,
//         title: "No Hardware or Complex Setup",
//         desc: "Staff can clock in or be onboarded instantly through mobile devices or shared kiosks, no bulky hardware, installation, or maintenance required.",
//         className: "benefit-small",
//     },
//     {
//         icon: <FaSyncAlt />,
//         title: "GPS Geofencing & Face Recognition",
//         desc: "Confirm clock-ins only happen within approved job sites using GPS geofencing and AI face recognition, even in offline mode.",
//         className: "benefit-small",
//     },
//     {
//         icon: <FaNetworkWired />,
//         title: "Self-Service for Workers",
//         desc: "Staff get instant access to their hours, overtime, and leave balances, cutting delays, avoiding confusion, and keeping records clear for everyone.",
//         className: "benefit-wide",
//     },
// ];


const benefitsData = [
    {
        icon: <FaUsers />,
        title: "Centralized Multi-Site Time Tracking",
        desc: "Track attendance and shifts on any device, with records centralized in the cloud and ready for large-scale deployment.",
        className: "benefit-large",
    },
    {
        icon: <FaFileInvoiceDollar />,
        title: "Accurate, Payroll-Ready Reports",
        desc: "Automatically calculate work hours, apply site-specific rules, and generate payroll-ready data with zero manual edits or delays.",
        className: "benefit-large",
    },
    {
        icon: <FaMobileAlt />,
        title: "No Hardware or Complex Setup",
        desc: "Staff can clock in or be onboarded instantly through mobile devices or shared kiosks, no bulky hardware, installation, or maintenance required.",
        className: "benefit-small",
    },
    {
        icon: <FaUserClock />,
        title: "GPS Geofencing & Face Recognition",
        desc: "Confirm clock-ins only happen within approved job sites using GPS geofencing and AI face recognition, even in offline mode.",
        className: "benefit-small",
    },
    {
        icon: <FaClipboardList />,
        title: "Self-Service for Workers",
        desc: "Staff get instant access to their hours, overtime, and leave balances, cutting delays, avoiding confusion, and keeping records clear for everyone.",
        className: "benefit-wide",
    },
];

const cloudFeatures = [
    {
        tag: "Cloud-Based Attendance Tracking",
        title: "Keep Attendance Data Accurate and Up to Date",
        description:
            "Syncs every clock-in from the app to the cloud in real time. Spot irregularities, approve time-off, view attendance history, and create detailed reports from anywhere.",
        image: featureImg1,
        faqs: [
            {
                question: "Can I track attendance history for each staff member?",
                answer:
                    "Yes. You can access full records, including location and time stamps.",
            },
            {
                question: "Is it possible to approve leave directly from the system?",
                answer:
                    "Yes. Managers can review and approve requests instantly.",
            },
            {
                question: "Is there a mobile app?",
                answer:
                    "Can I detect late arrivals or early exits?",
            },
        ],
    },
    {
        tag: "Employee Self-Service",
        title: "Give Staff Access to Their Own Records",
        description:
            "Let staff check their check-in/out times, overtime, leave balances, and hours worked anytime. This reduces admin queries and improves transparency.",
        image: featureImg2,
        faqs: [
            {
                question: "Can staff view their past attendance?",
                answer:
                    "Yes. Full history is visible in their profile.",
            },
            {
                question: "Does it update over time automatically?",
                answer:
                    "Yes. Overtime is calculated based on your set rules.",
            },
            {
                question: "Is it mobile-friendly?",
                answer:
                    "Yes. Works smoothly on smartphones and tablets.",
            },
        ],
    },
    {
        tag: "Secure Cloud Storage",
        title: "Protect Data with Enterprise-Grade Security",
        description:
            "Data is encrypted, stored in a resilient cloud infrastructure, and protected by strict password policies. Ensures uptime and prevents unauthorized access.",
        image: featureImg3,
        faqs: [
            {
                question: "Is attendance data encrypted?",
                answer:
                    "Yes. All data is encrypted both when stored and when transferred, keeping records safe from unauthorized access.",
            },
            {
                question: "Who can access the data?",
                answer:
                    "Only authorized users with the right credentials, based on role and permissions.",
            },
            {
                question: "Who can access the data?",
                answer:
                    "In secure cloud servers that comply with regional data protection standards.",
            },
        ],
    },
    {
        tag: "Scalable for Growth",
        title: "Expand Without Extra Hardware",
        description:
            "Easily scale to handle more staff or sites without buying additional devices. Perfect for fast-growing organizations.",
        image: featureImg4,
        faqs: [
            {
                question: "Do I need new devices for new locations?",
                answer:
                    "No. Just add new sites in the dashboard, and staff can start clocking in right away.",
            },
            {
                question: "Is it set up quickly?",
                answer:
                    "Yes. New staff can be onboarded in minutes through mobile or kiosk mode.",
            },
            {
                question: "Does it slow down with more users?",
                answer:
                    "No. The cloud-based face attendance system is built to handle thousands of users at once without affecting speed or accuracy.",
            },
        ],
    },
    {
        tag: "Scalable for Growth",
        title: "Automate Payroll with Error-Free Data",
        description:
            "The cloud attendance system integrates with any HR/payroll software to auto-track work hours and create payroll-ready reports. Eliminates miscalculations and delays.",
        image: featureImg5,
        faqs: [
            {
                question: "Which payroll tools does it integrate with?",
                answer:
                    "Most major HR/payroll systems are supported.",
            },
            {
                question: "Can it handle multiple pay rates?",
                answer:
                    "Yes. Rules can be set per role or site.",
            },
            {
                question: "Does it apply overtime policies automatically?",
                answer:
                    "Yes. Based on your pre-set rules.",
            },
        ],
    },
    // {
    //     tag: "Offline Attendance",
    //     title: "Track Attendance Even Without Internet",
    //     description:
    //         "Works offline with GPS and face recognition. All data syncs to the cloud automatically when the connection is back.",
    //     image: featureImg6,
    //     faqs: [
    //         {
    //             question: "Can GPS and face recognition work offline?",
    //             answer:
    //                 "Yes. Both work without internet access.",
    //         },
    //         {
    //             question: "How is data stored offline?",
    //             answer:
    //                 "It’s stored locally and uploaded once online.",
    //         },
    //         {
    //             question: "Does offline mode prevent time theft?",
    //             answer:
    //                 "Yes. Location and identity are still verified.",
    //         },
    //     ],
    // },


];


const solutionsData = [
    {
        icon: <FaCloud />,
        title: "Cloud-Based Attendance",
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

const CloudBasedTimeAttendance = () => {
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
            <section className="cloudbased-hero">
                <div className="container cloudbased-container">
                    <div className="row align-items-center cloudbased-box">
                        <div className="col-lg-6 cloudbased-left">
                            <div className="cloudbased-tag">
                                Attendance management


                            </div>
                            <h1 className="cloudbased-title">
                                Cloud-Based Time And Attendance System for All Sites And Devices
                            </h1>
                            <ul className="cloudbased-list">
                                <li>
                                    <FaCheck />
                                    <span>Instant, accurate clock-ins</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>70+ configurable policies for shifts, breaks, and overtime</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Centralized dashboard with insights across all sites</span>
                                </li>

                            </ul>
                            <button className="cloudbased-demo-btn">
                                Book a Demo
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="cloudbased-hero-image">
                                <img src={heroImg} alt="Cloud-Based Time & Attendance System" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO SECTION ================= */}
            <section className="cloudbased-video-section">
                <div className="container">
                    <h2 className="cloudbased-video-title">
                        Trusted by Workforces Across Industries
                    </h2>
                    <div className="cloudbased-video-box">
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
            <section className="cloudbased-stats-section">
                <div className="container">
                    <div className="cloudbased-stats">
                        {statsData.map((item, index) => (
                            <div className="cloudbased-stat-item" key={index}>
                                <div className="cloudbased-stat-icon">
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
                            Cloud-Based Centralized Control For All Sites

                        </h2>

                        <p>
                            Rostrox's cloud-based time and attendance software brings clock-ins, time tracking, and attendance into one secure cloud platform built for contract and multi-site workforce. Manage shifts, policies, and payroll-ready reports from anywhere. No hardware, no scattered data
                        </p>

                        <div className="attendance-overview-image">
                            <img
                                src={overviewImg}
                                alt="Cloud-Based Attendance Management"
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
            <section className="cloudbased-features-section" id="features">
                <div className="container cloudbased-features-container">
                    {cloudFeatures.map((feature, featureIndex) => (
                        <div
                            className={`cloudbased-feature-row ${featureIndex % 2 !== 0 ? "cloudbased-feature-reverse" : ""}`}
                            key={featureIndex}
                        >
                            {/* CONTENT */}
                            <div className="cloudbased-feature-content">
                                <span className="cloudbased-feature-tag">
                                    {feature.tag}
                                </span>
                                <h2>{feature.title}</h2>
                                <p className="cloudbased-feature-description">
                                    {feature.description}
                                </p>
                                <div className="cloudbased-faq-wrapper">
                                    <h4>Quick FAQs</h4>
                                    {feature.faqs.map((faq, faqIndex) => {
                                        const faqId = `${featureIndex}-${faqIndex}`;
                                        const isOpen = openFaq === faqId;
                                        return (
                                            <div className="cloudbased-faq-item" key={faqIndex}>
                                                <button
                                                    className="cloudbased-faq-question"
                                                    onClick={() => handleFaq(featureIndex, faqIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </button>
                                                <div className={`cloudbased-faq-answer ${isOpen ? "show" : ""}`}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* IMAGE */}
                            <div className="cloudbased-feature-image">
                                <img src={feature.image} alt={feature.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <Integrations />

            <AttendanceTools />

            <Advantage />




            <section className="cloudbased-solutions-section">
                <div className="container">
                    <div className="cloudbased-solutions-wrapper">

                        <div className="cloudbased-solutions-left">
                            <h2>
                                Explore Our Other <br />
                                Rostrox Workforce <br />
                                Solutions
                            </h2>
                        </div>

                        <div className="cloudbased-solutions-grid">
                            {solutionsData.map((item, index) => (
                                <div className="cloudbased-solutions-card" key={index}>
                                    <div className="cloudbased-solutions-icon">
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

export default CloudBasedTimeAttendance;