import "./JobTimeTrackingSoftware.css";
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
    FaClipboardList,
    FaProjectDiagram,
    FaTasks,
    FaLayerGroup,
    FaHourglassHalf,
    FaStopwatch,
    FaMoneyBillWave,
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



import jobProblemImg1 from "../../../assets/facitily.jpg";
import jobProblemImg2 from "../../../assets/facitily.jpg";
import jobProblemImg3 from "../../../assets/facitily.jpg";
import jobProblemImg4 from "../../../assets/facitily.jpg";
import jobProblemImg5 from "../../../assets/facitily.jpg";
import jobProblemImg6 from "../../../assets/facitily.jpg";



const statsData = [
    {
        icon: <FaGlobeAmericas />,
        number: "50+",
        title: "Countries",
    },
    {
        icon: <FaUsers />,
        number: "30,000+",
        title: "Active Users",
    },
    {
        icon: <FaProjectDiagram />,
        number: "10,000+",
        title: "Projects Tracked",
    },
];

const benefitsData = [
    {
        icon: <FaStopwatch />,
        title: "Real-Time Job Tracking",
        desc: "Track time spent on specific jobs, tasks, and projects in real-time. Monitor progress and productivity instantly.",
        className: "benefit-large",
    },
    {
        icon: <FaClipboardList />,
        title: "Project-Based Time Tracking",
        desc: "Assign time to specific projects and tasks. Get detailed insights into project costs and resource allocation.",
        className: "benefit-large",
    },
    {
        icon: <FaTasks />,
        title: "Task & Activity Management",
        desc: "Create and manage tasks, assign to team members, and track time against each activity.",
        className: "benefit-small",
    },
    {
        icon: <FaMoneyBillWave />,
        title: "Accurate Client Billing",
        desc: "Generate accurate client invoices based on tracked job time. Ensure fair billing and improve client trust.",
        className: "benefit-small",
    },
    {
        icon: <FaChartLine />,
        title: "Job Cost & Analytics",
        desc: "Track job costs, analyze productivity, and optimize resource allocation with detailed analytics.",
        className: "benefit-wide",
    },
];

const jobFeatures = [
    {
        tag: "Job Time Tracking",
        title: "Track Time for Every Job",
        description:
            "Track time spent on individual jobs, projects, and tasks. Get accurate data for billing, payroll, and productivity analysis.",
        image: featureImg1,
        faqs: [
            {
                question: "Can I track time for multiple jobs?",
                answer:
                    "Yes. Track time for multiple jobs and switch between them easily.",
            },
            {
                question: "Is the time tracking accurate?",
                answer:
                    "Yes. Time is tracked with precision down to the minute.",
            },
            {
                question: "Can I track time offline?",
                answer:
                    "Yes. Offline tracking with auto-sync when connected.",
            },
        ],
    },
    {
        tag: "Project Management",
        title: "Manage Projects Efficiently",
        description:
            "Create and manage projects, assign team members, set deadlines, and track progress. Get complete project visibility.",
        image: featureImg2,
        faqs: [
            {
                question: "Can I assign team members to projects?",
                answer:
                    "Yes. Assign team members and track their time per project.",
            },
            {
                question: "Can I track project budgets?",
                answer:
                    "Yes. Track project costs and budget utilization in real-time.",
            },
            {
                question: "Are project reports available?",
                answer:
                    "Yes. Detailed project reports with time and cost analysis.",
            },
        ],
    },
    {
        tag: "Task Management",
        title: "Track Time by Task",
        description:
            "Break down projects into tasks and track time against each task. Get granular insights into task-level productivity.",
        image: featureImg3,
        faqs: [
            {
                question: "Can I create subtasks?",
                answer:
                    "Yes. Create tasks and subtasks within projects.",
            },
            {
                question: "Can I assign tasks to team members?",
                answer:
                    "Yes. Assign tasks to individuals or teams.",
            },
            {
                question: "Can I track task progress?",
                answer:
                    "Yes. Track task completion and time spent.",
            },
        ],
    },
    {
        tag: "Client Billing",
        title: "Accurate Client Billing",
        description:
            "Generate accurate invoices based on tracked job time. Set hourly rates, track billable vs non-billable time, and improve cash flow.",
        image: featureImg4,
        faqs: [
            {
                question: "Can I set hourly rates?",
                answer:
                    "Yes. Set different rates for different clients and jobs.",
            },
            {
                question: "Can I track billable vs non-billable time?",
                answer:
                    "Yes. Track both billable and non-billable time separately.",
            },
            {
                question: "Can I generate invoices from tracked time?",
                answer:
                    "Yes. Generate accurate invoices directly from time data.",
            },
        ],
    },
    {
        tag: "Reports & Analytics",
        title: "Job Cost & Productivity Reports",
        description:
            "Generate detailed reports on job costs, productivity, and profitability. Make data-driven decisions to optimize operations.",
        image: featureImg5,
        faqs: [
            {
                question: "What reports are available?",
                answer:
                    "Job cost reports, productivity reports, time reports, and custom reports.",
            },
            {
                question: "Can I export reports?",
                answer:
                    "Yes. Export in PDF, Excel, and CSV formats.",
            },
            {
                question: "Is real-time data available?",
                answer:
                    "Yes. Real-time job time data for instant insights.",
            },
        ],
    },
    {
        tag: "Mobile Access",
        title: "Track Jobs from Anywhere",
        description:
            "Track job time from any device with our mobile app. Perfect for field teams, contractors, and remote workers.",
        image: featureImg6,
        faqs: [
            {
                question: "Is there a mobile app?",
                answer:
                    "Yes. Full-featured app for iOS and Android.",
            },
            {
                question: "Can I track time offline?",
                answer:
                    "Yes. Offline time tracking with auto-sync.",
            },
            {
                question: "Can I manage jobs from mobile?",
                answer:
                    "Yes. Full job management on mobile devices.",
            },
        ],
    },
    {
        tag: "Integration",
        title: "Seamless System Integration",
        description:
            "Integrate job time data with payroll, accounting, and project management systems. Automate data flow and eliminate manual entry.",
        image: featureImg7,
        faqs: [
            {
                question: "What systems can I integrate with?",
                answer:
                    "Payroll, accounting, project management, and ERP systems.",
            },
            {
                question: "Is integration automatic?",
                answer:
                    "Yes. Automated sync with integrated systems.",
            },
            {
                question: "Do I need technical expertise?",
                answer:
                    "No. Simple integration setup with guided assistance.",
            },
        ],
    },
    {
        tag: "Compliance",
        title: "Compliance & Reporting",
        description:
            "Maintain compliance with labor laws and industry regulations. Generate audit-ready reports for regulatory submissions.",
        image: featureImg8,
        faqs: [
            {
                question: "Is it compliant with labor laws?",
                answer:
                    "Yes. Configurable rules to comply with labor regulations.",
            },
            {
                question: "Can I generate compliance reports?",
                answer:
                    "Yes. Audit-ready reports for regulatory compliance.",
            },
            {
                question: "Is data secure?",
                answer:
                    "Yes. Enterprise-grade security for all job time data.",
            },
        ],
    },
];

const solutionsData = [
    {
        icon: <FaStopwatch />,
        title: "Job Time Tracking",
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



const jobProblemData = [
    {
        title: "Manual Time Tracking",
        heading: "Eliminate Manual Time Tracking",
        description:
            "Automate job time tracking with digital solutions. Eliminate manual timesheets, reduce errors, and ensure accurate time recording.",
        image: jobProblemImg1,
        points: [
            {
                icon: <FaStopwatch />,
                text: "Automated time tracking",
            },
            {
                icon: <FaClipboardList />,
                text: "Digital timesheets",
            },
            {
                icon: <FaCheckCircle />,
                text: "Eliminate manual errors",
            },
        ],
    },
    {
        title: "Job Cost Management",
        heading: "Track Job Costs Accurately",
        description:
            "Monitor job costs in real-time. Track labor costs, material costs, and overhead. Ensure projects stay within budget.",
        image: jobProblemImg2,
        points: [
            {
                icon: <FaMoneyBillWave />,
                text: "Real-time cost tracking",
            },
            {
                icon: <FaChartLine />,
                text: "Budget monitoring",
            },
            {
                icon: <FaProjectDiagram />,
                text: "Cost per project analysis",
            },
        ],
    },
    {
        title: "Resource Allocation",
        heading: "Optimize Resource Allocation",
        description:
            "Allocate resources effectively across multiple jobs. Track utilization and ensure optimal resource deployment.",
        image: jobProblemImg3,
        points: [
            {
                icon: <FaUsers />,
                text: "Resource utilization tracking",
            },
            {
                icon: <FaTasks />,
                text: "Task allocation management",
            },
            {
                icon: <FaLayerGroup />,
                text: "Multi-project resource planning",
            },
        ],
    },
    {
        title: "Client Billing",
        heading: "Accurate Client Billing",
        description:
            "Generate accurate client invoices based on tracked job time. Improve cash flow and build trust with transparent billing.",
        image: jobProblemImg4,
        points: [
            {
                icon: <FaFileInvoice />,
                text: "Accurate invoice generation",
            },
            {
                icon: <FaClock />,
                text: "Billable vs non-billable tracking",
            },
            {
                icon: <FaMoneyBillWave />,
                text: "Transparent client billing",
            },
        ],
    },
    {
        title: "Productivity Analysis",
        heading: "Analyze Job Productivity",
        description:
            "Track productivity metrics for jobs and tasks. Identify bottlenecks, optimize workflows, and improve efficiency.",
        image: jobProblemImg5,
        points: [
            {
                icon: <FaChartBar />,
                text: "Productivity metrics tracking",
            },
            {
                icon: <FaHourglassHalf />,
                text: "Time efficiency analysis",
            },
            {
                icon: <FaChartLine />,
                text: "Performance insights",
            },
        ],
    },
    {
        title: "Compliance & Reporting",
        heading: "Ensure Compliance with Regulations",
        description:
            "Maintain compliance with labor laws and industry regulations. Generate audit-ready reports for regulatory submissions.",
        image: jobProblemImg6,
        points: [
            {
                icon: <FaShieldAlt />,
                text: "Regulatory compliance",
            },
            {
                icon: <FaFileInvoice />,
                text: "Audit-ready reports",
            },
            {
                icon: <FaCheckCircle />,
                text: "Policy configuration",
            },
        ],
    },
];

const JobTimeTrackingSoftware = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const [activeJobProblem, setActiveJobProblem] = useState(0);

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
            <section className="jobtime-hero">
                <div className="container jobtime-container">
                    <div className="row align-items-center jobtime-box">
                        <div className="col-lg-6 jobtime-left">
                            <div className="jobtime-tag">
                                Job & Project Time Tracking

                            </div>
                            <h1 className="jobtime-title">
                                Job Time Tracking Software for Projects & Teams
                            </h1>
                            <ul className="jobtime-list">
                                <li>
                                    <FaCheck />
                                    <span>Track time for jobs, projects, and tasks</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Accurate client billing & job costing</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Real-time productivity insights</span>
                                </li>

                            </ul>
                            <button className="jobtime-demo-btn">
                                Book a Demo
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="jobtime-hero-image">
                                <img src={heroImg} alt="Job Time Tracking Software" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO SECTION ================= */}
            <section className="jobtime-video-section">
                <div className="container">
                    <h2 className="jobtime-video-title">
                        Trusted by Teams Managing Projects Worldwide
                    </h2>
                    <div className="jobtime-video-box">
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
            <section className="jobtime-stats-section">
                <div className="container">
                    <div className="jobtime-stats">
                        {statsData.map((item, index) => (
                            <div className="jobtime-stat-item" key={index}>
                                <div className="jobtime-stat-icon">
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
            <section className="jobtime-overview-section" id="overview">
                <div className="container jobtime-overview-container">
                    <div className="jobtime-overview-content">
                        <span className="jobtime-small-title">
                            Feature Overview
                        </span>
                        <h2>
                            Job & Project Time Tracking Made Easy
                        </h2>
                        <p>
                            Track time for jobs, projects, and tasks with precision. Get accurate data for client billing,
                            job costing, and productivity analysis. Optimize resource allocation and improve profitability.
                        </p>
                        <div className="jobtime-overview-image">
                            <img
                                src={overviewImg}
                                alt="Job Time Tracking"
                            />
                        </div>
                    </div>
                </div>
            </section>




            {/* ================= PROBLEM & SOLUTION SECTION ================= */}

            <section className="jobtime-problem-section">
                <div className="container jobtime-problem-container">

                    <div className="jobtime-problem-heading">
                        <span>Problem & Solution</span>

                        <h2>
                            Job Time Tracking Challenges Solved
                        </h2>
                    </div>


                    <div className="jobtime-problem-grid">

                        {/* LEFT TABS */}

                        <div className="jobtime-problem-tabs">

                            {jobProblemData.map((item, index) => (
                                <button
                                    key={index}
                                    className={`jobtime-problem-tab ${activeJobProblem === index ? "active" : ""
                                        }`}
                                    onClick={() => setActiveJobProblem(index)}
                                >
                                    <span className="jobtime-problem-tab-icon">
                                        {activeJobProblem === index ? (
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

                        <div className="jobtime-problem-content">

                            <h3>
                                {jobProblemData[activeJobProblem].heading}
                            </h3>

                            <p className="jobtime-problem-description">
                                {jobProblemData[activeJobProblem].description}
                            </p>


                            <div className="jobtime-problem-points">

                                {jobProblemData[
                                    activeJobProblem
                                ].points.map((point, index) => (
                                    <div
                                        className="jobtime-problem-point"
                                        key={index}
                                    >
                                        <span>{point.icon}</span>

                                        <p>{point.text}</p>
                                    </div>
                                ))}

                            </div>


                            <div
                                className="jobtime-problem-image"
                                key={activeJobProblem}
                            >
                                <img
                                    src={
                                        jobProblemData[
                                            activeJobProblem
                                        ].image
                                    }
                                    alt={
                                        jobProblemData[
                                            activeJobProblem
                                        ].heading
                                    }
                                />
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= BENEFITS SECTION ================= */}
            <section className="jobtime-benefits-section" id="benefits">
                <div className="container jobtime-benefits-container">
                    <div className="jobtime-benefits-heading">
                        <span>Benefits</span>
                        <h2>Why Choose Job Time Tracking Software?</h2>
                    </div>
                    <div className="jobtime-benefits-grid">
                        {benefitsData.map((item, index) => (
                            <div
                                className={`jobtime-benefit-card ${item.className}`}
                                key={index}
                            >
                                <div className="jobtime-benefit-icon">
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
            <section className="jobtime-features-section" id="features">
                <div className="container jobtime-features-container">
                    {jobFeatures.map((feature, featureIndex) => (
                        <div
                            className={`jobtime-feature-row ${featureIndex % 2 !== 0 ? "jobtime-feature-reverse" : ""}`}
                            key={featureIndex}
                        >
                            {/* CONTENT */}
                            <div className="jobtime-feature-content">
                                <span className="jobtime-feature-tag">
                                    {feature.tag}
                                </span>
                                <h2>{feature.title}</h2>
                                <p className="jobtime-feature-description">
                                    {feature.description}
                                </p>
                                <div className="jobtime-faq-wrapper">
                                    <h4>Quick FAQs</h4>
                                    {feature.faqs.map((faq, faqIndex) => {
                                        const faqId = `${featureIndex}-${faqIndex}`;
                                        const isOpen = openFaq === faqId;
                                        return (
                                            <div className="jobtime-faq-item" key={faqIndex}>
                                                <button
                                                    className="jobtime-faq-question"
                                                    onClick={() => handleFaq(featureIndex, faqIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </button>
                                                <div className={`jobtime-faq-answer ${isOpen ? "show" : ""}`}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* IMAGE */}
                            <div className="jobtime-feature-image">
                                <img src={feature.image} alt={feature.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Integrations />

            <AttendanceTools />


            < Advantage />


            <section className="jobtime-solutions-section">
                <div className="container">
                    <div className="jobtime-solutions-wrapper">
                        <div className="jobtime-solutions-left">
                            <h2>
                                Explore Our Other <br />
                                Truein Workforce <br />
                                Solutions
                            </h2>
                        </div>
                        <div className="jobtime-solutions-grid">
                            {solutionsData.map((item, index) => (
                                <div className="jobtime-solutions-card" key={index}>
                                    <div className="jobtime-solutions-icon">
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

export default JobTimeTrackingSoftware;