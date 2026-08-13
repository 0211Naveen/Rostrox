import React, { useEffect, useRef, useState } from "react";
import "./OvertimeTrackingManagement.css";


import overtimeBg from "../../../assets/facitily.jpg";
import overtimeFeature from "../../../assets/facitily.jpg";



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
        title: "Automated Overtime Calculation",
        description:
            "Automatically calculate overtime hours based on configured rules and policies. Track daily, weekly, and monthly overtime with precision. Eliminate manual calculations and errors.",
        image: chooseImg1,
    },
    {
        title: "Custom Overtime Rules",
        description:
            "Configure overtime rules for different departments, locations, and employee levels. Set overtime thresholds, premium rates, and eligibility criteria. Flexibility to match your organization's needs.",
        image: chooseImg2,
    },
    {
        title: "Real-Time Overtime Tracking",
        description:
            "Monitor overtime hours in real-time as employees clock in/out. Get instant visibility into who's working overtime and track overtime costs across departments.",
        image: chooseImg3,
    },
    {
        title: "Overtime Approval Workflows",
        description:
            "Set up approval workflows for overtime requests. Managers can review, approve, or reject overtime requests. Ensure compliance with company policies and labor regulations.",
        image: chooseImg4,
    },
    {
        title: "Overtime Reports & Analytics",
        description:
            "Generate comprehensive overtime reports. Analyze overtime patterns, costs, and trends. Make data-driven decisions to optimize workforce management.",
        image: chooseImg5,
    },
    {
        title: "Payroll Integration",
        description:
            "Automatically sync overtime data with payroll systems. Ensure accurate overtime payments and compliance with labor laws. Reduce payroll processing time and errors.",
        image: chooseImg6,
    },
];




const faqData = [
    {
        question: "How is overtime calculated automatically?",
        answer:
            "Overtime is calculated based on configured rules including daily, weekly, or monthly thresholds and premium rates.",
    },
    {
        question: "Can I customize overtime rules?",
        answer:
            "Yes. Overtime rules can be customized per department, location, and employee level.",
    },
    {
        question: "Can managers approve overtime requests?",
        answer:
            "Yes. Managers can review, approve, or reject overtime requests through the system.",
    },
    {
        question: "Is overtime tracking available in real-time?",
        answer:
            "Yes. Overtime hours are tracked in real-time as employees clock in/out.",
    },
    {
        question: "Can I generate overtime reports?",
        answer:
            "Yes. Comprehensive overtime reports can be generated with various filters and formats.",
    },
    {
        question: "Does it integrate with payroll systems?",
        answer:
            "Yes. Overtime data can be automatically synced with payroll systems.",
    },
    {
        question: "Can I set different overtime rates?",
        answer:
            "Yes. Different rates can be set for weekdays, weekends, and holidays.",
    },
    {
        question: "Can employees view their overtime?",
        answer:
            "Yes. Employees can view their overtime hours and status on the mobile app.",
    },
    {
        question: "Is the system compliant with labor laws?",
        answer:
            "Yes. The system can be configured to comply with local labor regulations.",
    },
    {
        question: "Can I export overtime data?",
        answer:
            "Yes. Overtime data can be exported in PDF, Excel, and CSV formats.",
    },
];


const OvertimeTrackingManagement = () => {


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

            <section className="overtime-hero">
                <div className="container overtime-hero-container">

                    <div className="overtime-hero-content">
                        

                        <p>
                            Automate overtime calculations, track overtime hours in real-time, and ensure accurate overtime payments. 
                            Reduce manual work and eliminate payroll errors with our comprehensive overtime management solution.
                        </p>

                            <ul className="overtime-list">
                                                        <li>
                                                            <FaCheck />
                                                            <span>Create and auto-assign shifts in minutes</span>
                                                        </li>
                                                        <li>
                                                            <FaCheck />
                                                            <span>Upload Shifts at Scale</span>
                                                        </li>
                                                        <li>
                                                            <FaCheck />
                                                            <span>Adjust last-minute changes smoothly</span>
                                                        </li>
                        
                                                    </ul>

                        <button className="overtime-hero-btn">
                            Get in Touch
                        </button>
                    </div>

                    <div className="overtime-hero-image">
                        <img src={heroImg} alt="Overtime Tracking Management" />
                    </div>

                </div>
            </section>



            {/* =====================================
                WHY CHOOSE OVERTIME TRACKING
            ===================================== */}

            <section className="overtime-choose-section">

                <div className="container overtime-choose-container">

                    <div className="overtime-choose-heading">
                        <h2>
                            Why Choose Truein for
                            <br />
                            Overtime Tracking?
                        </h2>
                    </div>


                    <div className="overtime-scroll-layout">

                        {/* LEFT SCROLL CONTENT */}

                        <div className="overtime-scroll-content">
                            {chooseData.map((item, index) => (
                                <div
                                    className={`overtime-scroll-item ${activeChoose === index ? "active" : ""
                                        }`}
                                    key={index}
                                    data-index={index}
                                    ref={(element) =>
                                        (contentRefs.current[index] = element)
                                    }
                                >
                                    <div className="overtime-scroll-text">
                                        <h3>{item.title}</h3>

                                        <p>{item.description}</p>
                                    </div>

                                    {/* MOBILE IMAGE */}
                                    <div className="overtime-mobile-image">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>


                        {/* RIGHT STICKY IMAGE */}

                        <div className="overtime-sticky-column">

                            <div className="overtime-sticky-image">

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

export default OvertimeTrackingManagement;