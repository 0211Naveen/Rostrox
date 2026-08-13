import React, { useEffect, useRef, useState } from "react";
import "./WorkforceManagement.css";


import workforceBg from "../../../assets/facitily.jpg";
import workforceFeature from "../../../assets/facitily.jpg";



import chooseImg1 from "../../../assets/facitily.jpg";
import chooseImg2 from "../../../assets/facitily.jpg";
import chooseImg3 from "../../../assets/facitily.jpg";
import chooseImg4 from "../../../assets/facitily.jpg";
import chooseImg5 from "../../../assets/facitily.jpg";
import chooseImg6 from "../../../assets/facitily.jpg";


import heroImg from "../../../assets/facitily.jpg";

import {
    FaChevronDown,
    FaChevronUp,
    FaCheck
} from "react-icons/fa";

import AttendanceFeatures from "../AttendanceFeatures/AttendanceFeatures"
import ExploreSection from "../ExploreSection/ExploreSection";
import FAQSection from "../FAQSection/FAQSection";
import CompetitiveEdge from "../CompetitiveEdge/CompetitiveEdge";

const chooseData = [
    {
        title: "Complete Workforce Visibility",
        description:
            "Get a comprehensive view of your entire workforce across all locations, departments, and business units. Monitor attendance, shifts, leaves, and productivity in real-time.",
        image: chooseImg1,
    },
    {
        title: "Automated Attendance Tracking",
        description:
            "Automate attendance tracking with multiple check-in methods including face recognition, GPS, QR codes, and NFC. Eliminate manual data entry and buddy punching.",
        image: chooseImg2,
    },
    {
        title: "Smart Shift Scheduling",
        description:
            "Create and manage shift schedules effortlessly. Handle shift swaps, rotations, and overtime with ease. Ensure optimal coverage across all locations.",
        image: chooseImg3,
    },
    {
        title: "Leave & Absence Management",
        description:
            "Streamline leave requests, approvals, and tracking. Configure leave policies, manage balances, and generate comprehensive leave reports.",
        image: chooseImg4,
    },
    {
        title: "Workforce Analytics & Insights",
        description:
            "Get deep insights into workforce productivity, attendance patterns, and operational efficiency. Make data-driven decisions to optimize your workforce.",
        image: chooseImg5,
    },
    {
        title: "Seamless System Integration",
        description:
            "Integrate with your existing HRIS, payroll, and ERP systems. Automate data flow and eliminate manual data entry across platforms.",
        image: chooseImg6,
    },
];


const faqData = [
    {
        question: "What is workforce management?",
        answer:
            "Workforce management is a comprehensive approach to managing employees' attendance, shifts, leaves, productivity, and overall workforce operations.",
    },
    {
        question: "Can I manage multiple locations?",
        answer:
            "Yes. The system supports managing multiple locations, departments, and business units from a single platform.",
    },
    {
        question: "Is the system scalable?",
        answer:
            "Yes. Built to scale from small teams to large enterprises with thousands of employees.",
    },
    {
        question: "Can employees access the system on mobile?",
        answer:
            "Yes. Full-featured mobile app available for iOS and Android devices.",
    },
    {
        question: "Does it support multiple check-in methods?",
        answer:
            "Yes. Supports face recognition, GPS, QR codes, NFC, Bluetooth, and manual check-in.",
    },
    {
        question: "Can I integrate with existing systems?",
        answer:
            "Yes. Integration with HRIS, payroll, ERP, and other enterprise systems is supported.",
    },
    {
        question: "Can I customize workflows?",
        answer:
            "Yes. Approval workflows, notifications, and automation rules can be customized.",
    },
    {
        question: "Is data secure?",
        answer:
            "Yes. Enterprise-grade security with encryption, role-based access, and compliance standards.",
    },
    {
        question: "Can I generate reports?",
        answer:
            "Yes. Comprehensive reports on attendance, leave, shifts, and workforce analytics.",
    },
    {
        question: "Is training required?",
        answer:
            "Minimal training required. The system is designed to be intuitive and user-friendly.",
    },
];


const WorkforceManagement = () => {


    const [activeChoose, setActiveChoose] = useState(0);


    const contentRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(
                            entry.target.getAttribute("data-index")
                        );

                        setActiveChoose(index);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-35% 0px -45% 0px",
                threshold: 0,
            }
        );

        const currentRefs = contentRefs.current;

        currentRefs.forEach((item) => {
            if (item) {
                observer.observe(item);
            }
        });

        return () => {
            currentRefs.forEach((item) => {
                if (item) {
                    observer.unobserve(item);
                }
            });
        };
    }, []);



    // Frequently asked questionss  

    const [activeFaq, setActiveFaq] = useState(null);

    const handleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };


    return (
        <>
            {/* ================= HERO SECTION ================= */}

            <section className="workforce-hero">
                <div className="container workforce-hero-container">

                    <div className="workforce-hero-content">

                        <h1>
                            Workforce Optimization Software with Time Tracking & ManagementBlue triangular abstract vector graphic with varying shades and geometric shapes.
                        </h1>

                        <ul className="workforce-list">
                            <li>
                                <FaCheck />
                                <span>Smart scheduling to assign shifts in bulk</span>
                            </li>
                            <li>
                                <FaCheck />
                                <span>GPS geofencing to ensure clock-in from approved locations</span>
                            </li>
                            <li>
                                <FaCheck />
                                <span>Real-time attendance dashboard for multiple sites</span>
                            </li>

                        </ul>

                        <button className="workforce-hero-btn">
                            Get in Touch
                        </button>

                    </div>

                    <div className="workforce-hero-image">
                        <img
                            src={heroImg}
                            alt="Workforce Management System"
                        />
                    </div>

                </div>
            </section>



            {/* =====================================
                WHY CHOOSE WORKFORCE MANAGEMENT
            ===================================== */}

            <section className="workforce-choose-section">

                <div className="container workforce-choose-container">

                    <div className="workforce-choose-heading">
                        <h2>
                            Why Choose Truein for
                            <br />
                            Workforce Management?
                        </h2>
                    </div>


                    <div className="workforce-scroll-layout">

                        {/* LEFT SCROLL CONTENT */}

                        <div className="workforce-scroll-content">
                            {chooseData.map((item, index) => (
                                <div
                                    className={`workforce-scroll-item ${activeChoose === index ? "active" : ""
                                        }`}
                                    key={index}
                                    data-index={index}
                                    ref={(element) =>
                                        (contentRefs.current[index] = element)
                                    }
                                >
                                    <div className="workforce-scroll-text">
                                        <h3>{item.title}</h3>

                                        <p>{item.description}</p>
                                    </div>

                                    {/* MOBILE IMAGE */}
                                    <div className="workforce-mobile-image">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>


                        {/* RIGHT STICKY IMAGE */}

                        <div className="workforce-sticky-column">

                            <div className="workforce-sticky-image">

                                {chooseData.map((item, index) => (
                                    <img
                                        key={index}
                                        src={item.image}
                                        alt={item.title}
                                        className={
                                            activeChoose === index
                                                ? "active"
                                                : ""
                                        }
                                    />
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>




            <AttendanceFeatures />

            <ExploreSection />

            <FAQSection />

            <CompetitiveEdge />




        </>
    );
};

export default WorkforceManagement;