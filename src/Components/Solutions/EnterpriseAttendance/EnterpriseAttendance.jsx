import "./EnterpriseAttendance.css";
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
    FaShieldAlt,
    FaNetworkWired,
    FaServer,
    FaDatabase,
    FaCloud,
    FaLock,
    FaRegBuilding,
    FaGlobe,
    FaCog,
    FaUsersCog,
    FaChartLine,
    FaFileInvoice,
    FaBell,
    FaClipboardCheck,
} from "react-icons/fa";

import overviewImg from "../../../assets/Face-reconization/2.webp";

import heroImg from "../../../assets/facitily.jpg";
import videoImg from "../../../assets/facitily.jpg";
import caseStudyImg from "../../../assets/facitily.jpg";
import userImg from "../../../assets/facitily.jpg";

import featureImg1 from "../../../assets/facitily.jpg";
import featureImg2 from "../../../assets/facitily.jpg";
import featureImg3 from "../../../assets/facitily.jpg";
import featureImg4 from "../../../assets/facitily.jpg";
import featureImg5 from "../../../assets/facitily.jpg";
import featureImg6 from "../../../assets/facitily.jpg";
import featureImg7 from "../../../assets/facitily.jpg";
import featureImg8 from "../../../assets/facitily.jpg";

import Integrations from "../Integrations/Integrations";



import enterpriseProblemImg1 from "../../../assets/facitily.jpg";
import enterpriseProblemImg2 from "../../../assets/facitily.jpg";
import enterpriseProblemImg3 from "../../../assets/facitily.jpg";
import enterpriseProblemImg4 from "../../../assets/facitily.jpg";
import enterpriseProblemImg5 from "../../../assets/facitily.jpg";
import enterpriseProblemImg6 from "../../../assets/facitily.jpg";



const statsData = [
    {
        icon: <FaGlobeAmericas />,
        number: "75+",
        title: "Countries",
    },
    {
        icon: <FaUsers />,
        number: "50,000+",
        title: "Enterprise Users",
    },
    {
        icon: <FaBuilding />,
        number: "5,000+",
        title: "Enterprise Clients",
    },
];

const benefitsData = [
    {
        icon: <FaNetworkWired />,
        title: "Enterprise-Grade Scalability",
        desc: "Handle thousands of employees across hundreds of locations with ease. Scale as your organization grows.",
        className: "benefit-large",
    },
    {
        icon: <FaShieldAlt />,
        title: "Advanced Security & Compliance",
        desc: "Enterprise-level security with SOC 2 compliance, data encryption, and role-based access control.",
        className: "benefit-large",
    },
    {
        icon: <FaServer />,
        title: "Dedicated Infrastructure",
        desc: "Get dedicated servers and infrastructure for maximum performance and reliability.",
        className: "benefit-small",
    },
    {
        icon: <FaUsersCog />,
        title: "Custom Workforce Policies",
        desc: "Configure attendance, leave, and shift policies for different departments and locations.",
        className: "benefit-small",
    },
    {
        icon: <FaPlug />,
        title: "Seamless Enterprise Integration",
        desc: "Integrate with existing HRIS, payroll, and ERP systems through robust APIs and connectors.",
        className: "benefit-wide",
    },
];

const enterpriseFeatures = [
    {
        tag: "Enterprise Workforce Management",
        title: "Complete Workforce Management for Enterprises",
        description:
            "Manage your entire enterprise workforce across departments, locations, and business units. Get full visibility and control over attendance, shifts, leave, and compliance.",
        image: featureImg1,
        faqs: [
            {
                question: "Can I manage multiple business units?",
                answer:
                    "Yes. Manage multiple business units, departments, and locations from a single platform.",
            },
            {
                question: "Is it scalable for large enterprises?",
                answer:
                    "Yes. Built for enterprises with thousands of employees across global locations.",
            },
            {
                question: "Can I customize workflows?",
                answer:
                    "Yes. Full customization of workflows, approvals, and policies.",
            },
        ],
    },
    {
        tag: "Global Compliance",
        title: "Stay Compliant Across All Locations",
        description:
            "Configure policies to comply with local labor laws in each country. Track compliance and generate audit-ready reports for regulatory requirements.",
        image: featureImg2,
        faqs: [
            {
                question: "Does it support multiple countries?",
                answer:
                    "Yes. Supports compliance with labor laws in multiple countries.",
            },
            {
                question: "Can I generate compliance reports?",
                answer:
                    "Yes. Generate reports for audits and regulatory submissions.",
            },
            {
                question: "Are policies configurable per location?",
                answer:
                    "Yes. Each location can have its own set of policies.",
            },
        ],
    },
    {
        tag: "Enterprise Security",
        title: "Bank-Grade Security for Enterprise Data",
        description:
            "Protect your workforce data with enterprise-grade security including encryption, SSO, 2FA, and role-based access controls.",
        image: featureImg3,
        faqs: [
            {
                question: "Is data encrypted?",
                answer:
                    "Yes. All data is encrypted at rest and in transit.",
            },
            {
                question: "Does it support SSO?",
                answer:
                    "Yes. Supports SAML and OAuth for single sign-on integration.",
            },
            {
                question: "What about role-based access?",
                answer:
                    "Granular role-based access control for all user types.",
            },
        ],
    },
    {
        tag: "Advanced Analytics",
        title: "Enterprise Analytics & Business Intelligence",
        description:
            "Get deep insights into workforce trends, productivity, and costs. Customize dashboards and reports for executive-level visibility.",
        image: featureImg4,
        faqs: [
            {
                question: "What analytics are available?",
                answer:
                    "Attendance trends, workforce productivity, cost analysis, and custom KPI tracking.",
            },
            {
                question: "Can I customize dashboards?",
                answer:
                    "Yes. Custom dashboards for different stakeholders and teams.",
            },
            {
                question: "Is real-time data available?",
                answer:
                    "Yes. Real-time analytics and reporting for all workforce data.",
            },
        ],
    },
    {
        tag: "Enterprise Integration",
        title: "Seamless Integration with Enterprise Systems",
        description:
            "Integrate with your existing HRIS, payroll, ERP, and other enterprise systems. Automated data sync ensures consistency across platforms.",
        image: featureImg5,
        faqs: [
            {
                question: "What systems can I integrate with?",
                answer:
                    "Popular HRIS, payroll, ERP, and custom enterprise systems.",
            },
            {
                question: "Is integration automated?",
                answer:
                    "Yes. Automated sync with enterprise systems via APIs.",
            },
            {
                question: "Do I need custom development?",
                answer:
                    "No. Pre-built connectors and APIs for most enterprise systems.",
            },
        ],
    },
    {
        tag: "Mobile Workforce",
        title: "Mobile Access for Distributed Workforce",
        description:
            "Empower your enterprise workforce with mobile access. Check in/out, view schedules, request leave, and more from any device.",
        image: featureImg6,
        faqs: [
            {
                question: "Is there a mobile app?",
                answer:
                    "Yes. Full-featured mobile app for iOS and Android.",
            },
            {
                question: "Can workers check in offline?",
                answer:
                    "Yes. Offline check-in with automatic sync when connected.",
            },
            {
                question: "What features are available on mobile?",
                answer:
                    "Attendance, leave, schedules, approvals, and reporting.",
            },
        ],
    },
    {
        tag: "Custom Workflows",
        title: "Configure Custom Enterprise Workflows",
        description:
            "Set up custom approval workflows, notifications, and automation rules. Streamline HR processes and reduce manual work.",
        image: featureImg7,
        faqs: [
            {
                question: "Can I create custom workflows?",
                answer:
                    "Yes. Configure approval workflows, notifications, and automation.",
            },
            {
                question: "What workflows are supported?",
                answer:
                    "Leave approvals, shift changes, overtime requests, and custom workflows.",
            },
            {
                question: "Can I automate notifications?",
                answer:
                    "Yes. Automated notifications for approvals, reminders, and alerts.",
            },
        ],
    },
    {
        tag: "Enterprise Support",
        title: "Dedicated Enterprise Support",
        description:
            "Get priority support with dedicated account managers, 24/7 availability, and SLAs. Ensure smooth operations for your enterprise workforce.",
        image: featureImg8,
        faqs: [
            {
                question: "What support is available?",
                answer:
                    "Dedicated account managers, 24/7 support, and priority SLAs.",
            },
            {
                question: "Is onboarding assistance provided?",
                answer:
                    "Yes. Comprehensive onboarding and training for enterprise clients.",
            },
            {
                question: "What about data migration?",
                answer:
                    "Full data migration support from existing systems.",
            },
        ],
    },
];

const solutionsData = [
    {
        icon: <FaUserCheck />,
        title: "Enterprise Attendance",
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



const enterpriseProblemData = [
    {
        title: "Multiple Locations",
        heading: "Manage Workforce Across All Locations",
        description:
            "Centralize attendance management for all your locations, departments, and business units. Get real-time visibility into workforce operations globally.",
        image: enterpriseProblemImg1,
        points: [
            {
                icon: <FaGlobe />,
                text: "Global workforce visibility",
            },
            {
                icon: <FaBuilding />,
                text: "Multi-location management",
            },
            {
                icon: <FaUsers />,
                text: "Cross-department reporting",
            },
        ],
    },
    {
        title: "Compliance & Regulations",
        heading: "Ensure Compliance Across All Regions",
        description:
            "Configure policies to comply with local labor laws in every country. Track compliance and generate audit-ready reports for regulatory submissions.",
        image: enterpriseProblemImg2,
        points: [
            {
                icon: <FaShieldAlt />,
                text: "Local labor law compliance",
            },
            {
                icon: <FaFileInvoice />,
                text: "Audit-ready reporting",
            },
            {
                icon: <FaCheckCircle />,
                text: "Policy configuration per region",
            },
        ],
    },
    {
        title: "Data Security",
        heading: "Enterprise-Grade Data Security",
        description:
            "Protect sensitive workforce data with encryption, access controls, SSO integration, and comprehensive security measures.",
        image: enterpriseProblemImg3,
        points: [
            {
                icon: <FaLock />,
                text: "End-to-end data encryption",
            },
            {
                icon: <FaUserShield />,
                text: "Role-based access control",
            },
            {
                icon: <FaServer />,
                text: "Secure infrastructure",
            },
        ],
    },
    {
        title: "System Integration",
        heading: "Seamless Enterprise Integration",
        description:
            "Connect with your existing HRIS, payroll, ERP, and other enterprise systems. Automate data flow and eliminate manual data entry.",
        image: enterpriseProblemImg4,
        points: [
            {
                icon: <FaPlug />,
                text: "Ready-to-use connectors",
            },
            {
                icon: <FaCloud />,
                text: "Cloud-based integration",
            },
            {
                icon: <FaDatabase />,
                text: "Automated data sync",
            },
        ],
    },
    {
        title: "Scalability & Performance",
        heading: "Scalable for Enterprise Growth",
        description:
            "Built to scale with your enterprise. Handle thousands of employees across hundreds of locations without compromising performance.",
        image: enterpriseProblemImg5,
        points: [
            {
                icon: <FaNetworkWired />,
                text: "Scalable architecture",
            },
            {
                icon: <FaUsers />,
                text: "Support for large workforces",
            },
            {
                icon: <FaChartLine />,
                text: "High-performance platform",
            },
        ],
    },
    {
        title: "Customization & Flexibility",
        heading: "Customize for Your Enterprise",
        description:
            "Configure attendance policies, leave rules, shift patterns, and approval workflows to match your enterprise requirements.",
        image: enterpriseProblemImg6,
        points: [
            {
                icon: <FaCog />,
                text: "Custom policy configuration",
            },
            {
                icon: <FaClipboardCheck />,
                text: "Flexible approval workflows",
            },
            {
                icon: <FaCalendarAlt />,
                text: "Configurable shift patterns",
            },
        ],
    },
];

const EnterpriseAttendance = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const [activeEnterpriseProblem, setActiveEnterpriseProblem] = useState(0);

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
            <section className="enterprise-hero">
                <div className="container enterprise-container">
                    <div className="row align-items-center enterprise-box">
                        <div className="col-lg-6 enterprise-left">
                            <div className="enterprise-tag">
                                Time and attendance software


                            </div>
                            <h1 className="enterprise-title">
AI-Powered Enterprise Time and Attendance Software
                            </h1>
                            <ul className="enterprise-list">
                                <li>
                                    <FaCheck />
                                    <span>Centralized dashboard for multiple sites  </span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>No hardware needed, easy to scale</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>70+ compliance-ready policies</span>
                                </li>

                            </ul>
                            <button className="enterprise-demo-btn">
                                Book a Demo
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="enterprise-hero-image">
                                <img src={heroImg} alt="Enterprise Attendance System" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO SECTION ================= */}
            <section className="enterprise-video-section">
                <div className="container">
                    <h2 className="enterprise-video-title">
                        Trusted by Leading Enterprises Worldwide
                    </h2>
                    <div className="enterprise-video-box">
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
            <section className="enterprise-stats-section">
                <div className="container">
                    <div className="enterprise-stats">
                        {statsData.map((item, index) => (
                            <div className="enterprise-stat-item" key={index}>
                                <div className="enterprise-stat-icon">
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
            <section className="enterprise-overview-section" id="overview">
                <div className="container enterprise-overview-container">
                    <div className="enterprise-overview-content">
                        <span className="enterprise-small-title">
                            Feature Overview
                        </span>
                        <h2>
                            Enterprise-Grade Attendance & Workforce Management
                        </h2>
                        <p>
                            Manage your enterprise workforce with a comprehensive solution built for scale.
                            Handle thousands of employees across global locations with advanced security,
                            compliance, and integration capabilities.
                        </p>
                        <div className="enterprise-overview-image">
                            <img
                                src={overviewImg}
                                alt="Enterprise Attendance Management"
                            />
                        </div>
                    </div>
                </div>
            </section>




            {/* ================= PROBLEM & SOLUTION SECTION ================= */}

            <section className="enterprise-problem-section">
                <div className="container enterprise-problem-container">

                    <div className="enterprise-problem-heading">
                        <span>Problem & Solution</span>

                        <h2>
                            Enterprise Workforce Management Challenges Solved
                        </h2>
                    </div>


                    <div className="enterprise-problem-grid">

                        {/* LEFT TABS */}

                        <div className="enterprise-problem-tabs">

                            {enterpriseProblemData.map((item, index) => (
                                <button
                                    key={index}
                                    className={`enterprise-problem-tab ${activeEnterpriseProblem === index ? "active" : ""
                                        }`}
                                    onClick={() => setActiveEnterpriseProblem(index)}
                                >
                                    <span className="enterprise-problem-tab-icon">
                                        {activeEnterpriseProblem === index ? (
                                            <FaCheckCircle />
                                        ) : (
                                            <FaClipboardCheck />
                                        )}
                                    </span>

                                    <span>{item.title}</span>
                                </button>
                            ))}

                        </div>


                        {/* RIGHT CONTENT */}

                        <div className="enterprise-problem-content">

                            <h3>
                                {enterpriseProblemData[activeEnterpriseProblem].heading}
                            </h3>

                            <p className="enterprise-problem-description">
                                {enterpriseProblemData[activeEnterpriseProblem].description}
                            </p>


                            <div className="enterprise-problem-points">

                                {enterpriseProblemData[
                                    activeEnterpriseProblem
                                ].points.map((point, index) => (
                                    <div
                                        className="enterprise-problem-point"
                                        key={index}
                                    >
                                        <span>{point.icon}</span>

                                        <p>{point.text}</p>
                                    </div>
                                ))}

                            </div>


                            <div
                                className="enterprise-problem-image"
                                key={activeEnterpriseProblem}
                            >
                                <img
                                    src={
                                        enterpriseProblemData[
                                            activeEnterpriseProblem
                                        ].image
                                    }
                                    alt={
                                        enterpriseProblemData[
                                            activeEnterpriseProblem
                                        ].heading
                                    }
                                />
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= BENEFITS SECTION ================= */}
            <section className="enterprise-benefits-section" id="benefits">
                <div className="container enterprise-benefits-container">
                    <div className="enterprise-benefits-heading">
                        <span>Benefits</span>
                        <h2>Why Leading Enterprises Choose Truein</h2>
                    </div>
                    <div className="enterprise-benefits-grid">
                        {benefitsData.map((item, index) => (
                            <div
                                className={`enterprise-benefit-card ${item.className}`}
                                key={index}
                            >
                                <div className="enterprise-benefit-icon">
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
            <section className="enterprise-features-section" id="features">
                <div className="container enterprise-features-container">
                    {enterpriseFeatures.map((feature, featureIndex) => (
                        <div
                            className={`enterprise-feature-row ${featureIndex % 2 !== 0 ? "enterprise-feature-reverse" : ""}`}
                            key={featureIndex}
                        >
                            {/* CONTENT */}
                            <div className="enterprise-feature-content">
                                <span className="enterprise-feature-tag">
                                    {feature.tag}
                                </span>
                                <h2>{feature.title}</h2>
                                <p className="enterprise-feature-description">
                                    {feature.description}
                                </p>
                                <div className="enterprise-faq-wrapper">
                                    <h4>Quick FAQs</h4>
                                    {feature.faqs.map((faq, faqIndex) => {
                                        const faqId = `${featureIndex}-${faqIndex}`;
                                        const isOpen = openFaq === faqId;
                                        return (
                                            <div className="enterprise-faq-item" key={faqIndex}>
                                                <button
                                                    className="enterprise-faq-question"
                                                    onClick={() => handleFaq(featureIndex, faqIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </button>
                                                <div className={`enterprise-faq-answer ${isOpen ? "show" : ""}`}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* IMAGE */}
                            <div className="enterprise-feature-image">
                                <img src={feature.image} alt={feature.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Integrations />

            <AttendanceTools />


            < Advantage />


            <section className="enterprise-solutions-section">
                <div className="container">
                    <div className="enterprise-solutions-wrapper">
                        <div className="enterprise-solutions-left">
                            <h2>
                                Explore Our Other <br />
                                Truein Workforce <br />
                                Solutions
                            </h2>
                        </div>
                        <div className="enterprise-solutions-grid">
                            {solutionsData.map((item, index) => (
                                <div className="enterprise-solutions-card" key={index}>
                                    <div className="enterprise-solutions-icon">
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

export default EnterpriseAttendance;