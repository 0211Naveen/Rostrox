import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ManpowerStaffing.css";

import manpowerBg from "../../../assets/manpower-bg.jpg";



import chooseImg1 from "../../../assets/Man-power/1.webp";
import chooseImg2 from "../../../assets/Man-power/2.webp";
import chooseImg3 from "../../../assets/Man-power/3.webp";
import chooseImg4 from "../../../assets/Man-power/4.webp";
import chooseImg5 from "../../../assets/Man-power/5.webp";
import chooseImg6 from "../../../assets/Man-power/6.webp";



import {
    FaChevronDown,
    FaChevronUp
} from "react-icons/fa";



const chooseData = [
    {
        title: "Quick Onboarding",
        description:
            "Frequently changing staff or need to supply staff at short notice? Rostrox helps onboard or add new staff instantly. The staff can onboard by showing their face on the kiosk or with a single selfie using their mobile. Onboarded staff can be immediately sent to multiple clients without the need for any re-onboarding at the client site.",
        image: chooseImg1,
    },
    {
        title: "Centralized Controls to Track Staff Across Client Sites",
        description:
            "Centralized view enables tracking of your staff deployed at multiple client locations. Know who is in or out in real-time. The manpower tracking system reduces risk of reconciliation issues, brings transparency, and builds trust with clients. Get a real-time view of attendance status and history, download reports, manage staff directories, and more from the web dashboard or mobile app.",
        image: chooseImg2,
    },
    {
        title: "Avoid Delayed Payments",
        description:
            "Accurate time calculations and analytics ensure error-free final payroll-ready reports. Avoids delayed payments from customers caused by manual approval processes. Customized OT settings enable payment of exact salaries.",
        image: chooseImg3,
    },
    {
        title: "Multiple Clients on the Same Premises? Get Shared Kiosks",
        description:
            "Cross-site mapping enables laborers working across multiple facilities on the same premises to check in from a common kiosk, saving money on multiple attendance devices. It is especially useful in setups where attendance management software for the manpower staffing industry needs a single, consistent check-in point.",
        image: chooseImg4,
    },
    {
        title: "Avoid Hardware Spendings",
        description:
            "Portable, lean, and scalable time & attendance solution. No hardware investment is required as Rostrox offers clock in through an app. Fix the mobile device on a flexible stand and move it to new locations whenever needed. Staff can easily clock in by showing their face on the kiosk, their mobile, or other staff mobile.",
        image: chooseImg5,
    },
    {
        title: "Easily Manage Staff Transfers",
        description:
            "Simply change the base site to transfer the staff. System auto-assigns policies and configurations to the staff as per their new site. You can always change their access or policies. If needed, you can provide access to multiple sites to a particular staff member.",
        image: chooseImg6,
    },
];




const faqData = [
    {
        question: "Is Rostrox easy to use for a lower-skilled workforce?",
        answer:
            "Yes. Rostrox is designed with a simple and user-friendly attendance experience, making it easy for staff to clock in with minimal training.",
    },
    {
        question:
            "Is Rostrox easy to set up at new client locations, and is it scalable?",
        answer:
            "Yes. New client locations can be added quickly, and the attendance system can scale across multiple sites and workforce teams.",
    },
    {
        question: "Is there a feature to track blacklisted staff?",
        answer:
            "Yes. Staff records can be centrally managed to help administrators identify and manage restricted or blacklisted workforce profiles.",
    },
    {
        question:
            "Can we deactivate staff who have been absent for a long time?",
        answer:
            "Yes. Administrators can manage staff status and deactivate inactive employees based on company requirements.",
    },
    {
        question: "Is Rostrox suitable for our use case/staff?",
        answer:
            "Rostrox is suitable for distributed, contract, multi-site, and field workforce attendance management requirements.",
    },
    {
        question:
            "Can Rostrox be integrated with our existing payroll system?",
        answer:
            "Yes. Attendance and timesheet data can be integrated with payroll and HR systems for streamlined payroll processing.",
    },
    {
        question: "Can consolidated attendance reports be generated?",
        answer:
            "Yes. Consolidated attendance reports can be generated across employees, client sites, locations, and teams.",
    },
    {
        question: "Can we customize policies?",
        answer:
            "Yes. Attendance, overtime, shifts, breaks, and other workforce policies can be configured based on business requirements.",
    },
    {
        question: "Can we geofence our multiple customer sites?",
        answer:
            "Yes. Multiple customer sites can be configured with location-based geofencing for accurate site-specific attendance.",
    },
    {
        question:
            "Are there any other features specific to Manpower Staffing Agencies that Rostrox offers?",
        answer:
            "Yes. Rostrox supports centralized workforce management, staff transfers, multi-site attendance, shared kiosks, scheduling, and attendance analytics.",
    },
];


const ManpowerStaffing = () => {


    const navigate = useNavigate();

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

            <section
                className="manpower-hero"
                style={{
                    backgroundImage: `linear-gradient(
  rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)
), url(${manpowerBg})`,
                }}
            >
                <div className="container manpower-hero-container">
                    <div className="manpower-hero-content">
                        <h1>
                            Manpower Attendance & Time Tracking Software -
                            Centralized & Robust Solution for Manpower Staffing
                            Industry
                        </h1>

                        <p>
                            Face recognition-based attendance and timesheet
                            solution designed specifically for staff deployed
                            across client locations. Rostrox brings in
                            transparency, control and builds trust.
                        </p>

                        {/* <button className="manpower-touch-btn">
                            Get in Touch
                        </button> */}
                        <button
                            className="manpower-touch-btn"
                            onClick={() => navigate("/demo")}
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>
            </section>


            {/* =====================================
                WHY CHOOSE MANPOWER
            ===================================== */}

            <section className="manpower-choose-section">

                <div className="container manpower-choose-container">

                    <div className="manpower-choose-heading">
                        <h2>
                            Why Choose Rostrox for
                            <br />
                            Manpower Attendance Tracking?
                            {/* <span className="manpower-blue-shape"></span> */}
                        </h2>
                    </div>


                    <div className="manpower-scroll-layout">

                        {/* LEFT SCROLL CONTENT */}

                        {/* <div className="manpower-scroll-content">

                            {chooseData.map((item, index) => (
                                <div
                                    className={`manpower-scroll-item ${activeChoose === index
                                            ? "active"
                                            : ""
                                        }`}
                                    key={index}
                                    data-index={index}
                                    ref={(element) =>
                                        (contentRefs.current[index] = element)
                                    }
                                >
                                    <div className="manpower-scroll-text">
                                        <h3>{item.title}</h3>

                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}

                        </div> */}

                        <div className="manpower-scroll-content">
                            {chooseData.map((item, index) => (
                                <div
                                    className={`manpower-scroll-item ${activeChoose === index ? "active" : ""
                                        }`}
                                    key={index}
                                    data-index={index}
                                    ref={(element) =>
                                        (contentRefs.current[index] = element)
                                    }
                                >
                                    <div className="manpower-scroll-text">
                                        <h3>{item.title}</h3>

                                        <p>{item.description}</p>
                                    </div>

                                    {/* MOBILE IMAGE */}
                                    <div className="manpower-mobile-image">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>


                        {/* RIGHT STICKY IMAGE */}

                        <div className="manpower-sticky-column">

                            <div className="manpower-sticky-image">

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




            {/* =========================================
    FAQ SECTION
========================================= */}

            <section className="manpower-faq-section">
                <div className="container manpower-faq-container">

                    <div className="manpower-faq-heading">
                        <h2>
                            Frequently asked questions
                            <span className="manpower-faq-shape"></span>
                        </h2>
                    </div>

                    <div className="manpower-faq-list">

                        {faqData.map((item, index) => (
                            <div
                                className={`manpower-faq-item ${activeFaq === index ? "active" : ""
                                    }`}
                                key={index}
                            >
                                <button
                                    className="manpower-faq-question"
                                    onClick={() => handleFaq(index)}
                                >
                                    <span>{item.question}</span>

                                    <span className="manpower-faq-icon">
                                        {activeFaq === index ? (
                                            <FaChevronUp />
                                        ) : (
                                            <FaChevronDown />
                                        )}
                                    </span>
                                </button>

                                <div className="manpower-faq-answer">
                                    <div className="manpower-faq-answer-inner">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </section>



        </>
    );
};

export default ManpowerStaffing;