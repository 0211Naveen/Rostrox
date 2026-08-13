import React, { useEffect, useRef, useState } from "react";
import "./ReportAnalytics.css";
import Advantage from "../../Home/Advantage";


import reportBg from "../../../assets/facitily.jpg";
import reportFeature from "../../../assets/facitily.jpg";



import chooseImg1 from "../../../assets/Reports-analytics/2.webp";
import chooseImg2 from "../../../assets/Reports-analytics/3.webp";
import chooseImg3 from "../../../assets/Reports-analytics/4.webp";
import chooseImg4 from "../../../assets/Reports-analytics/5.webp";
import chooseImg5 from "../../../assets/Reports-analytics/6.webp";
// import chooseImg6 from "../../../assets/Reports-analytics/7.webp";



import heroImg from "../../../assets/Reports-analytics/1.webp";


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
        title: "Turn Raw Data into Insightful Reports",
        description:
            "With Rostrox's time and attendance analytics, you can instantly transform your raw clock in data into intuitive reports and dashboards and use it to gather information about attendance patterns, staff punctuality, absence trends, and leave usage. The reports and dashboards also help achieve transparency and uncover potential solutions.",
        image: chooseImg1,
    },
    {
        title: "Monitor Staff Productivity",
        description:
            "Use our daily, weekly, or monthly timesheets to track your staff's productivity. With multiple filtering options, you can improve staff attendance and time utilization, evaluate time spent on different tasks or projects, and analyze time and attendance patterns over time.",
        image: chooseImg2,
    },
    {
        title:"Get Powerful Insights to make Informed Decisions",
        description:
            "Extract the exact information you need with our advanced filtering options and gain powerful insights about your workforce. Get information on the leaves taken, early check in/outs, breaks taken, late marks, and more through time & attendance report in realtime. Additionally, you can filter the information by date, project, client name, staff name, and other relevant criteria.",
        image: chooseImg3,
    },
    {
        title: "Advanced Analytics for your Staff and Management",
        description:
            "Rostrox's advanced time and attendance data analytics is designed to address the needs of both your staff and management. For instance, while the staff gets insights about their leave data (leave types, leave balance, etc.), the management gets access to the department-level leave data.",
        image: chooseImg4,
    },
    {
        title: "Automated Timeclock Policies and Reports",
        description:
            "Set late marks, half-day, overtime, shift timings, and other policies right within Rostrox and keep a close watch with real-time attendance analytics and reports. Get overtime and other calculations done automatically. Export detailed spreadsheets for compensation and other calculations.",
        image: chooseImg5,
    },

];




const faqData = [
    {
        question: "What types of reports are available?",
        answer:
            "Attendance reports, overtime reports, leave reports, absenteeism reports, and custom reports based on your requirements.",
    },
    {
        question: "Can I export reports in different formats?",
        answer:
            "Yes. Reports can be exported in PDF, Excel, CSV, and other formats.",
    },
    {
        question: "Are reports available in real-time?",
        answer:
            "Yes. All dashboards and reports show real-time attendance data.",
    },
    {
        question: "Can I schedule automated reports?",
        answer:
            "Yes. Reports can be scheduled for automatic generation and delivery.",
    },
    {
        question: "Can I filter reports by department or location?",
        answer:
            "Yes. Reports can be filtered by multiple parameters including department, location, employee, date range, and more.",
    },
    {
        question: "Is data visualization available?",
        answer:
            "Yes. Interactive charts, graphs, and heatmaps are available for better data visualization.",
    },
    {
        question: "Can I share reports with stakeholders?",
        answer:
            "Yes. Reports can be shared via email, exported files, or shared dashboard links.",
    },
    {
        question: "Is historical data available in reports?",
        answer:
            "Yes. Historical attendance data is available for analysis and reporting.",
    },
    {
        question: "Can I create custom report templates?",
        answer:
            "Yes. Custom report templates can be created and saved for future use.",
    },
    {
        question: "Are analytics insights available?",
        answer:
            "Yes. Advanced analytics provide insights into attendance patterns and workforce trends.",
    },
];


const ReportAnalytics = () => {


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

            <section className="report-hero">
                <div className="container report-hero-container">

                    <div className="report-hero-content">

                        <h1>
                            Rosteox Time and Attendance Reports - Get Powerful Insights at
                            Your Fingertips! Blue triangular abstract vector graphic with
                            varying shades and geometric shapes.
                        </h1>

                        <ul className="report-list">
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

                        <button className="report-hero-btn">
                            Get in Touch
                        </button>

                    </div>

                    <div className="report-hero-image">
                        <img
                            src={heroImg}
                            alt="Report & Analytics Dashboard"
                        />
                    </div>

                </div>
            </section>



          


            {/* =====================================
                WHY CHOOSE REPORT & ANALYTICS
            ===================================== */}

            <section className="report-choose-section">

                <div className="container report-choose-container">

                    <div className="report-choose-heading">
                        <h2>
                            Why Choose Rosteox for
                            <br />
                            Report & Analytics?
                        </h2>
                    </div>


                    <div className="report-scroll-layout">

                        {/* LEFT SCROLL CONTENT */}

                        <div className="report-scroll-content">
                            {chooseData.map((item, index) => (
                                <div
                                    className={`report-scroll-item ${activeChoose === index ? "active" : ""
                                        }`}
                                    key={index}
                                    data-index={index}
                                    ref={(element) =>
                                        (contentRefs.current[index] = element)
                                    }
                                >
                                    <div className="report-scroll-text">
                                        <h3>{item.title}</h3>

                                        <p>{item.description}</p>
                                    </div>

                                    {/* MOBILE IMAGE */}
                                    <div className="report-mobile-image">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>


                        {/* RIGHT STICKY IMAGE */}

                        <div className="report-sticky-column">

                            <div className="report-sticky-image">

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

            <Advantage/>






        </>
    );
};

export default ReportAnalytics;