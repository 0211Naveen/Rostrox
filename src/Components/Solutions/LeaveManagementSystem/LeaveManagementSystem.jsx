import React, { useEffect, useRef, useState } from "react";
import "./LeaveManagementSystem.css";
import Advantage from "../../Home/Advantage";



import chooseImg1 from "../../../assets/Leave-Management/2.webp";
import chooseImg2 from "../../../assets/Leave-Management/3.webp";
import chooseImg3 from "../../../assets/Leave-Management/4.webp";
import chooseImg4 from "../../../assets/Leave-Management/5.webp";
import chooseImg5 from "../../../assets/Leave-Management/6.webp";
import chooseImg6 from "../../../assets/Leave-Management/7.webp";



import heroImg from "../../../assets/Leave-Management/1.webp";


import {
    FaChevronDown,
    FaChevronUp
} from "react-icons/fa";

import AttendanceFeatures from "../AttendanceFeatures/AttendanceFeatures"
import ExploreSection from "../ExploreSection/ExploreSection";
import FAQSection from "../FAQSection/FAQSection";
import CompetitiveEdge from "../CompetitiveEdge/CompetitiveEdge";

const chooseData = [
    {
        title: "Daily/Hourly leave",
        description:
            "Need to leave a few hours early? No need to apply for Half-day, Apply for hourly leave and leave will be deducted only for those hours.",
        image: chooseImg1,
    },
    {
        title: "Carry Forward Leaves",
        description:
            "Got unutilized leaves at the end of the month? Carry forward it to the next month for future use.",
        image: chooseImg2,
    },

    {
        title: "Multi-level Approvals",
        description:
            "Set up approval workflows up to three hierarchy levels based on departments or roles on the leave management software. Leave requests move step-by-step to the right approvers, ensuring proper accountability. Approvers can accept, reject, or ask for changes with comments.",
        image: chooseImg4,
    },
    {
        title: "Customized Leave and Employee Holiday Management",
        description:
            "Different teams often need different leave rules and holiday calendars. On the vacation time tracker, you can configure policies by site, region, shift, or employee category to match operational realities. Assign location-wise holidays and define leave types, accruals, and eligibility accordingly. This keeps compliance and planning consistent across locations.",
        image: chooseImg5,
    },
    {
        title: "Mobile and Web",
        description:
            "Staff can easily apply and view their leaves online from their own devices or ask managers to apply on their behalf",
        image: chooseImg6,
    },
];




const faqData = [
    {
        question: "Can employees apply for leave from mobile?",
        answer:
            "Yes. The mobile app allows employees to apply for leave, check balances, and track request status anytime, anywhere.",
    },
    {
        question: "Can I set different leave policies for different departments?",
        answer:
            "Yes. Leave policies can be customized per department, location, or employee category.",
    },
    {
        question: "How are leave balances calculated?",
        answer:
            "Leave balances are automatically calculated based on configured accrual rules and previous usage.",
    },
    {
        question: "Can managers approve leave requests on mobile?",
        answer:
            "Yes. Managers can approve, reject, or request changes to leave requests from the mobile app.",
    },
    {
        question: "Is the system compliant with labor laws?",
        answer:
            "Yes. The system can be configured to comply with local labor laws and regulations.",
    },
    {
        question: "Can I customize leave types?",
        answer:
            "Yes. You can create custom leave types and assign specific rules to each type.",
    },
    {
        question: "Can I import historical leave data?",
        answer:
            "Yes. Historical leave data can be imported during system setup.",
    },
    {
        question: "Can employees see their leave history?",
        answer:
            "Yes. Employees have full visibility into their leave history and balance.",
    },
    {
        question: "Can I set leave approval workflows?",
        answer:
            "Yes. Multi-level approval workflows can be configured based on company structure.",
    },
    {
        question: "Does it support carry-forward of unused leave?",
        answer:
            "Yes. Carry-forward rules can be configured based on company policy.",
    },
];


const LeaveManagementSystem = () => {


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

            <section className="leave-hero">
                <div className="container leave-hero-container">

                    <div className="leave-hero-content">
                        <h1>
                            Advanced Employee Leave
                            <br />
                            Management System to
                            <br />
                            Improve Transparency and
                            <br />
                            Staff Satisfaction
                        </h1>

                        <p>
                            Foolproof from implementing leave policies to month-end calculations.
                            Use Rostrox’s Employee Leave and Attendance Management System to
                            Automate and Simplify the complete leave management process.
                        </p>

                        <button className="leave-hero-btn">
                            Get in Touch
                        </button>
                    </div>

                    <div className="leave-hero-image">
                        <img src={heroImg} alt="Employee Leave Management" />
                    </div>

                </div>
            </section>




            {/* =====================================
                WHY CHOOSE LEAVE MANAGEMENT
            ===================================== */}

            <section className="leave-choose-section">

                <div className="container leave-choose-container">

                    <div className="leave-choose-heading">
                        <h2>
                            Why Choose Rostrox for
                            <br />
                            Leave Management?
                        </h2>
                    </div>


                    <div className="leave-scroll-layout">

                        {/* LEFT SCROLL CONTENT */}

                        <div className="leave-scroll-content">
                            {chooseData.map((item, index) => (
                                <div
                                    className={`leave-scroll-item ${activeChoose === index ? "active" : ""
                                        }`}
                                    key={index}
                                    data-index={index}
                                    ref={(element) =>
                                        (contentRefs.current[index] = element)
                                    }
                                >
                                    <div className="leave-scroll-text">
                                        <h3>{item.title}</h3>

                                        <p>{item.description}</p>
                                    </div>

                                    {/* MOBILE IMAGE */}
                                    <div className="leave-mobile-image">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>


                        {/* RIGHT STICKY IMAGE */}

                        <div className="leave-sticky-column">

                            <div className="leave-sticky-image">

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


            <Advantage />

        </>
    );
};

export default LeaveManagementSystem;