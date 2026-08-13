
import React, { useEffect, useRef, useState } from "react";
import "./Payroll.css";
import Advantage from "../../Home/Advantage";


import heroImg from "../../../assets/PayRoll/1.webp";

import chooseImg1 from "../../../assets/PayRoll/2.webp";
import chooseImg2 from "../../../assets/PayRoll/3.webp";
import chooseImg3 from "../../../assets/PayRoll/4.webp";
import chooseImg4 from "../../../assets/PayRoll/5.webp";
import chooseImg5 from "../../../assets/PayRoll/6.webp";

import AttendanceFeatures from "../AttendanceFeatures/AttendanceFeatures";
import ExploreSection from "../ExploreSection/ExploreSection";
import FAQSection from "../FAQSection/FAQSection";
import CompetitiveEdge from "../CompetitiveEdge/CompetitiveEdge";

const chooseData = [
    {
        title: "Automated Salary Processing",
        description:
            "Streamline payroll with automated salary calculations based on attendance, overtime, and leave data. Reduce errors and save time on manual payroll processing.",
        image: chooseImg1,
    },
    {
        title: "Comprehensive Payslip Generation",
        description:
            "Generate detailed payslips with earnings, deductions, and net pay breakdown. Export payslips in PDF, Excel, and CSV formats for easy distribution.",
        image: chooseImg2,
    },
    {
        title: "Smart Incentive & Bonus Management",
        description:
            "Configure and manage employee incentives, performance bonuses, and commission structures. Automatically calculate incentives based on predefined rules and targets.",
        image: chooseImg3,
    },
    {
        title: "Overtime & Shift Differential Pay",
        description:
            "Automatically calculate overtime pay with configurable rates. Support for shift differentials, holiday pay, and special workday compensation.",
        image: chooseImg4,
    },
    {
        title: "Basic & Net Salary Calculations",
        description:
            "Compute basic salary, allowances, deductions, and net salary with precision. Support for multiple salary components including HRA, DA, and special allowances.",
        image: chooseImg5,
    },
  
];

const faqData = [
    {
        question: "How is salary automatically calculated?",
        answer:
            "Salary is automatically calculated based on attendance data, overtime, leave balances, and configured salary components.",
    },
    {
        question: "Can I generate payslips for employees?",
        answer:
            "Yes. Generate individual or bulk payslips with detailed earnings and deductions.",
    },
    {
        question: "How are incentives calculated?",
        answer:
            "Incentives are calculated based on configurable rules, performance targets, and commission structures.",
    },
    {
        question: "What salary components are supported?",
        answer:
            "Basic salary, HRA, DA, special allowances, bonuses, overtime pay, shift differentials, and more.",
    },
    {
        question: "Can I export payroll data?",
        answer:
            "Yes. Export payroll data and payslips in PDF, Excel, and CSV formats.",
    },
    {
        question: "How is net salary calculated?",
        answer:
            "Net salary = Basic + Allowances + Incentives + Overtime - Deductions (PF, ESI, TDS, etc.)",
    },
    {
        question: "Does the system handle tax calculations?",
        answer:
            "Yes. Automatic TDS calculation and tax management with statutory compliance.",
    },
    {
        question: "Can managers review payroll before finalization?",
        answer:
            "Yes. Multi-level approval workflows for payroll processing and reviews.",
    },
    {
        question: "Does it integrate with attendance systems?",
        answer:
            "Yes. Seamless integration with attendance data for accurate salary calculations.",
    },
    {
        question: "Can I process payroll for contract employees?",
        answer:
            "Yes. Support for permanent, contract, and freelance employee payroll processing.",
    },
];

const Payroll = () => {
    const [activeChoose, setActiveChoose] = useState(0);
    const [activeFaq, setActiveFaq] = useState(null);
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

    const handleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section className="payroll-hero">
                <div className="container payroll-hero-container">
                    <div className="payroll-hero-content">
                        <h1>
                            Complete Payroll Management System
                            {/* <span className="payroll-blue-shape"></span> */}
                            <br />
                            Automate Salary, Incentives & Compliance
                        </h1>

                        <p>
                            Simplify payroll processing with automated salary 
                            calculations, payslip generation, and statutory 
                            compliance management.
                        </p>

                        <button className="payroll-hero-btn">
                            Get in Touch
                        </button>
                    </div>

                    <div className="payroll-hero-image">
                        <img src={heroImg} alt="Payroll Management System" />
                    </div>
                </div>
            </section>



            {/* =====================================
                WHY CHOOSE PAYROLL
            ===================================== */}
            <section className="payroll-choose-section">
                <div className="container payroll-choose-container">
                    <div className="payroll-choose-heading">
                        <h2>
                            Why Choose Rosteox for
                            <br />
                            Payroll Management?
                        </h2>
                    </div>

                    <div className="payroll-scroll-layout">
                        {/* LEFT SCROLL CONTENT */}
                        <div className="payroll-scroll-content">
                            {chooseData.map((item, index) => (
                                <div
                                    className={`payroll-scroll-item ${
                                        activeChoose === index ? "active" : ""
                                    }`}
                                    key={index}
                                    data-index={index}
                                    ref={(element) =>
                                        (contentRefs.current[index] = element)
                                    }
                                >
                                    <div className="payroll-scroll-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>

                                    {/* MOBILE IMAGE */}
                                    <div className="payroll-mobile-image">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* RIGHT STICKY IMAGE */}
                        <div className="payroll-sticky-column">
                            <div className="payroll-sticky-image">
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

            {/* =====================================
                PAYROLL FEATURES HIGHLIGHTS
            ===================================== */}
            <section className="payroll-features-highlight">
                <div className="container">
                    <div className="payroll-features-grid">
                        <div className="payroll-feature-card">
                            <div className="payroll-feature-icon">💰</div>
                            <h4>Salary Processing</h4>
                            <p>Automated salary calculation with multiple components</p>
                        </div>
                        <div className="payroll-feature-card">
                            <div className="payroll-feature-icon">📄</div>
                            <h4>Payslip Generation</h4>
                            <p>Detailed payslips with import/export capabilities</p>
                        </div>
                        <div className="payroll-feature-card">
                            <div className="payroll-feature-icon">🎯</div>
                            <h4>Incentive Management</h4>
                            <p>Smart bonus and commission calculations</p>
                        </div>
                        <div className="payroll-feature-card">
                            <div className="payroll-feature-icon">📊</div>
                            <h4>Net Salary Calculator</h4>
                            <p>Accurate net pay after all deductions</p>
                        </div>
                        <div className="payroll-feature-card">
                            <div className="payroll-feature-icon">⚖️</div>
                            <h4>Tax Compliance</h4>
                            <p>Automatic TDS and statutory compliance</p>
                        </div>
                        <div className="payroll-feature-card">
                            <div className="payroll-feature-icon">📤</div>
                            <h4>Export & Import</h4>
                            <p>Bulk import/export of payroll data</p>
                        </div>
                    </div>
                </div>
            </section>

            <AttendanceFeatures />
            <ExploreSection />
            <FAQSection />
            <CompetitiveEdge />
            <Advantage />


        </>
    );
};

export default Payroll;