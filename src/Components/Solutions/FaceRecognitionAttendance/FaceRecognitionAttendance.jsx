import "./FaceRecognitionAttendance.css";
import "./Facecontent.css"
import React, { useState, } from 'react';

import AttendanceTools from "../../Industry/AttendanceTools/AttendanceTools";
import Advantage from "../../Home/Advantage";
import SubNavbar from "../SubNavbar/SubNavbar";





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
    FaCamera,
    FaFingerprint,
    FaShieldAlt,
    FaBrain,
    FaCoins,
    FaBriefcase,
    FaClock
} from "react-icons/fa";

import heroImg from "../../../assets/Face-reconization/1.webp";

import overviewImg from "../../../assets/Face-reconization/2.webp";

import featureImg1 from "../../../assets/Face-reconization/8.webp";
import featureImg2 from "../../../assets/Face-reconization/9.webp";
import featureImg3 from "../../../assets/Face-reconization/10.webp";
import featureImg4 from "../../../assets/Face-reconization/11.webp";
import featureImg5 from "../../../assets/Face-reconization/12.webp";




import problemImg1 from "../../../assets/Face-reconization/3.webp";
import problemImg2 from "../../../assets/Face-reconization/4.webp";
import problemImg3 from "../../../assets/Face-reconization/5.webp";
import problemImg4 from "../../../assets/Face-reconization/6.webp";
import problemImg5 from "../../../assets/Face-reconization/7.webp";


const attendanceProblemData = [
    {
        tabIcon: <FaMapMarkerAlt />,

        title: "Clocking in Outside Work Site",
        heading: "Clocking in Outside Work Site",
        description:
            "Field and contract staff have saved 37% of revenue leaks by ensuring clock-ins only happen at authorized sites through location-based tracking.",
        image: problemImg1,
        points: [
            {
                icon: <FaMapMarkerAlt />,
                text: "Ensure accurate site-based check-ins",
            },
            {
                icon: <FaUserCheck />,
                text: "Prevent off-site clock-ins",
            },
            {
                icon: <FaCalendarAlt />,
                text: "Track remote team attendance",
            },
        ],
    },
    {
        tabIcon: <FaClock />,

        title: "Incorrect Reports of Work Hours",
        heading: "Incorrect Reports of Work Hours",
        description:
            "Automated attendance tracking eliminates errors in reported hours, improving payroll accuracy and cutting down administrative time.",
        image: problemImg2,
        points: [
            {
                icon: <FaClock />,
                text: "Eliminate Manual Errors",
            },
            {
                icon: <FaCheckCircle />,
                text: "Sync Timesheet to Payroll",
            },
            {
                icon: <FaChartBar />,
                text: "Reduce Time Spent on Corrections",
            },
        ],
    },
    {
        tabIcon: <FaCoins />,

        title: "Budgeted vs Actual Hours",
        heading: "Budgeted vs Actual Hours",
        description:
            "Track and compare actual vs. budgeted hours in real time, helping businesses stay on budget and ensure accurate project costing.",
        image: problemImg3,
        points: [
            {
                icon: <FaCoins />,
                text: "Compare Budgeted vs Actual Hours",
            },
            {
                icon: <FaChartBar />,
                text: "Real-Time Reporting",
            },
            {
                icon: <FaUsers />,
                text: "Improved Cost Management",
            },
        ],
    },
    {
        tabIcon: <FaBuilding />,

        title: "Time Split Across Jobs or Locations",
        heading: "Time Split Across Jobs or Locations",
        description:
            "Accurately track time across multiple roles or locations, ensuring precise reporting for teams working on different jobs..",
        image: problemImg4,
        points: [
            {
                icon: <FaBuilding />,
                text: "Log Time Across Multiple Jobs",
            },
            {
                icon: <FaBriefcase />,
                text: "Accurate Location-Based Attendance",
            },
            {
                icon: <FaClock />,
                text: "Simplified Reporting for Multi-Location Teams",
            },
        ],
    },
    {
        tabIcon: <FaShieldAlt />,
        title: "Compliance & Policy Enforcement",
        heading: "Compliance & Policy Enforcement",
        description:
            "Ensure adherence to attendance policies and labor laws with automated tracking and rule enforcement.",
        image: problemImg5,
        points: [
            {
                icon: <FaShieldAlt />,
                text: "Enforce Attendance Policies",
            },
            {
                icon: <FaCheckCircle />,
                text: "Stay Compliant with Labor Laws",
            },
            {
                icon: <FaUserShield />,
                text: "Send Automatic Compliance Alerts",
            },
        ],
    },
];



const tabs = [
    "Overview",
    "Benefits",
    "Features",
    "Integration",
];



const benefitsData = [
    {
        icon: <FaIdCard />,
        title: "Fast time tracking",
        desc: "Forget the hassle of physical clocks or cards, just a quick look, and you're all set!",
        className: "benefit-large",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Flexible Geofencing",
        desc: "Set location-based attendance rules, ensuring employees can only check in from approved sites.",
        className: "benefit-large",
    },
    {
        icon: <FaMobileAlt />,
        title: "Actual attendance tracking",
        desc: "No more guessing. See exactly when and where your team is clocking in, wherever they are.",
        className: "benefit-small",
    },
    {
        icon: <FaUserCheck />,
        title: "Accurate Attendance with Masks",
        desc: "Forget the hassle of physical clocks or cards, just a quick look, and you're all set!",
        className: "benefit-small",
    },
    {
        icon: <FaCoins />,
        title: "Streamlined Payroll Integration",
        desc: "Skip the manual work. Rostrox automatically syncs with your payroll system, making reporting a breeze.",
        className: "benefit-wide",
    },
];



import uploadImg from "../../../assets/Face-reconization/14.webp";
import registerImg from "../../../assets/Face-reconization/15.webp";
import attendanceImg from "../../../assets/Face-reconization/16.webp";


import Integrations from "../Integrations/Integrations";




const statsData = [
    {
        icon: <FaGlobeAmericas />,
        number: "50",
        title: "Countries",
    },
    {
        icon: <FaCamera />,
        number: "15,000+",
        title: "Devices Deployed",
    },
    {
        icon: <FaUsers />,
        number: "2,000,000+",
        title: "Faces Verified",
    },
];





const faceRecognitionFeatures = [
    {
        tag: "Portable & Scalable",
        title: "Hygienic & Contactless Attendance",
        description:
            "No standalone hardware needed. Use Rostrox’s app on any Android or iOS device to effortlessly automate attendance.",
        image: featureImg1,
        faqs: [
            {
                question: "How accurate is the face recognition?",
                answer:
                    "Our AI model achieves over 99% accuracy with advanced deep learning algorithms.",
            },
            {
                question: "Can it detect fake faces or masks?",
                answer:
                    "Yes. Liveness detection ensures the person is physically present and not using photos or videos.",
            },
            {
                question: "Does it work in low light conditions?",
                answer:
                    "Yes. The system is optimized to work in various lighting conditions and environments.",
            },
        ],
    },
    {
        tag: "Smart Attendance Solution",
        title: "The Best Face Recognition, Even with Masks",
        description:
            "Rostrox’s AI-powered system delivers near-perfect attendance by recognizing faces with masks, beards, hairstyles, and accessories.",
        image: featureImg2,
        faqs: [
            {
                question: "What is liveness detection?",
                answer:
                    "Liveness detection verifies that the person is physically present by detecting subtle facial movements and depth.",
            },
            {
                question: "Can it detect printed photos?",
                answer:
                    "Yes. The system distinguishes between 2D photos and real 3D faces automatically.",
            },
            {
                question: "Is liveness detection fast?",
                answer:
                    "Yes. The verification process takes less than 1 second with high accuracy.",
            },
        ],
    },
    {
        tag: "GPS-verified Attendance",
        title: "Selfie Based Geofencing Technology",
        description:
            "Allow staff to mark attendance via mobile – only from approved locations. Ideal for contract, retail, and field teams.",
        image: featureImg3,
        faqs: [
            {
                question: "What devices are supported?",
                answer:
                    "All devices including Android, iOS, Windows, and dedicated attendance kiosks.",
            },
           
            {
                question: "Is there a mobile app for workers?",
                answer:
                    "Yes. Workers can use their own smartphones with our easy-to-use mobile app.",
            },
        ],
    },
    {
        tag: "Smart policy-driven reports",
        title: "Automated Attendance Policies and Reporting",
        description:
            "Define late marks, shifts, and OT rules. Track everything in real-time and export detailed reports for payroll and compliance purposes.",
        image: featureImg4,
        faqs: [
            {
                question: "How fast is the verification?",
                answer:
                    "Face verification typically completes in less than 1 second.",
            },
            {
                question: "Can it handle peak hour traffic?",
                answer:
                    "Yes. The system is designed to handle thousands of verifications per minute.",
            },
            {
                question: "Is there any lag with multiple devices?",
                answer:
                    "No. The system is optimized for simultaneous verifications across multiple devices.",
            },
        ],
    },
  {
    tag: "Leave Management",
    title: "Simple & Smart Leave Management",
    description:
        "Manage employee leave records with an easy-to-use leave management system integrated with face attendance. Track leave history, leave balances, and attendance in one centralized platform for better workforce management.",

    image: featureImg5,

    faqs: [
        {
            question: "Can employees' leave records be maintained?",
            answer:
                "Yes. The system stores complete leave history, making it easy to manage and review employee leave records.",
        },
        {
            question: "Is leave integrated with attendance?",
            answer:
                "Yes. Leave records are synchronized with face attendance, ensuring accurate attendance reports and payroll calculations.",
        },
        {
            question: "Can HR track leave balances?",
            answer:
                "Yes. HR can view available leave balances, used leave, and attendance details from a single dashboard.",
        },
    ],
}


];

const FaceRecognitionAttendance = () => {
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

    const [activeProblem, setActiveProblem] = useState(0);


    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section className="facerecognition-hero">
                <div className="container facerecognition-container">
                    <div className="row align-items-center facerecognition-box">
                        <div className="col-lg-6 facerecognition-left">
                            <div className="facerecognition-tag">
                                Easy clock-in At A Glance

                            </div>
                            <h1 className="facerecognition-title">
                                Face Recognition Attendance System for Contract and
                                Multi-Site Workforces
                            </h1>
                            <ul className="facerecognition-list">
                                <li>
                                    <FaCheck />
                                    <span>AI-powered face recognition + GPS geofencing</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Offline attendance support</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>No hardware required</span>
                                </li>

                            </ul>
                            <button className="facerecognition-demo-btn">
                                Book a Demo
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="facerecognition-hero-image">
                                <img src={heroImg} alt="Face Recognition Attendance" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO SECTION ================= */}
            <section className="facerecognition-video-section">
                <div className="container">
                    <h2 className="facerecognition-video-title">
                        Trusted by Workforces Across Industries
                    </h2>
                    <div className="facerecognition-video-box">
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
            <section className="facerecognition-stats-section">
                <div className="container">
                    <div className="facerecognition-stats">
                        {statsData.map((item, index) => (
                            <div className="facerecognition-stat-item" key={index}>
                                <div className="facerecognition-stat-icon">
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
                            AI-Powered Attendance, Powered by Rostrox
                        </h2>

                        <p>
                            Get fraud-proof clock-ins with an AI-powered facial recognition
                            attendance system. Get real-time attendance logs, enforce attendance
                            policies, and maintain accurate records across every location.
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


            {/* ================= PROBLEM & SOLUTION SECTION ================= */}

            <section className="attendance-problem-section">
                <div className="container attendance-problem-container">

                    <div className="attendance-problem-heading">
                        <span>Problem & Solution</span>

                        <h2>
                            Smarter Attendance for Every Site
                        </h2>
                    </div>

                    <div className="attendance-problem-grid">

                        {/* LEFT TABS */}

                        <div className="attendance-problem-tabs">

                            {attendanceProblemData.map((item, index) => (

                                <button
                                    key={index}
                                    className={`attendance-problem-tab ${activeProblem === index ? "active" : ""
                                        }`}
                                    onClick={() => setActiveProblem(index)}
                                >

                                    {/* <span className="attendance-problem-tab-icon">
                                        {activeProblem === index ? (
                                            <FaCheckCircle />
                                        ) : (
                                            <FaClock />
                                        )}
                                    </span> */}
                                    <span className="attendance-problem-tab-icon">
                                        {item.tabIcon}
                                    </span>

                                    <span>
                                        {item.title}
                                    </span>

                                </button>

                            ))}

                        </div>


                        {/* RIGHT CONTENT */}

                        <div className="attendance-problem-content">

                            <h3>
                                {attendanceProblemData[activeProblem].heading}
                            </h3>

                            <p className="attendance-problem-description">
                                {attendanceProblemData[activeProblem].description}
                            </p>


                            <div className="attendance-problem-points">

                                {attendanceProblemData[activeProblem].points.map(
                                    (point, index) => (

                                        <div
                                            className="attendance-problem-point"
                                            key={index}
                                        >

                                            <span>
                                                {point.icon}
                                            </span>

                                            <p>
                                                {point.text}
                                            </p>

                                        </div>

                                    )
                                )}

                            </div>


                            <div
                                className="attendance-problem-image"
                                key={activeProblem}
                            >

                                <img
                                    src={
                                        attendanceProblemData[activeProblem].image
                                    }
                                    alt={
                                        attendanceProblemData[activeProblem].heading
                                    }
                                />

                            </div>

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
            <section className="facerecognition-features-section" id="features">
                <div className="container facerecognition-features-container">
                    {faceRecognitionFeatures.map((feature, featureIndex) => (
                        <div
                            className={`facerecognition-feature-row ${featureIndex % 2 !== 0 ? "facerecognition-feature-reverse" : ""}`}
                            key={featureIndex}
                        >
                            {/* CONTENT */}
                            <div className="facerecognition-feature-content">
                                <span className="facerecognition-feature-tag">
                                    {feature.tag}
                                </span>
                                <h2>{feature.title}</h2>
                                <p className="facerecognition-feature-description">
                                    {feature.description}
                                </p>
                                <div className="facerecognition-faq-wrapper">
                                    <h4>Quick FAQs</h4>
                                    {feature.faqs.map((faq, faqIndex) => {
                                        const faqId = `${featureIndex}-${faqIndex}`;
                                        const isOpen = openFaq === faqId;
                                        return (
                                            <div className="facerecognition-faq-item" key={faqIndex}>
                                                <button
                                                    className="facerecognition-faq-question"
                                                    onClick={() => handleFaq(featureIndex, faqIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </button>
                                                <div className={`facerecognition-faq-answer ${isOpen ? "show" : ""}`}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* IMAGE */}
                            <div className="facerecognition-feature-image">
                                <img src={feature.image} alt={feature.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= INTEGRATION SECTION ================= */}
            < Integrations />


            <AttendanceTools />

            <Advantage />
        </>
    );
};

export default FaceRecognitionAttendance;