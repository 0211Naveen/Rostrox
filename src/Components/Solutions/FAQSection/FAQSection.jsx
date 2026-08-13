import React, { useState } from "react";
import "./FAQSection.css";

import {
    FaChevronDown,
    FaChevronUp
} from "react-icons/fa";

const faqData = [
    {
        question: "Is Rosteox easy to use for a lower-skilled workforce?",
        answer:
            "Yes. Rosteox is designed to be simple and easy to use for employees across different skill levels."
    },
    {
        question:
            "Is Rosteox easy to set up at new client locations, and is it scalable?",
        answer:
            "Yes. Rosteox can be quickly deployed across new client locations and scaled as your workforce grows."
    },
    {
        question: "Is there a feature to track blacklisted staff?",
        answer:
            "Yes. Administrators can manage staff records and track restricted or blacklisted employees."
    },
    {
        question:
            "Can we deactivate staff who have been absent for a long time?",
        answer:
            "Yes. Staff accounts can be deactivated based on attendance history and company policies."
    },
    {
        question: "Is Rosteox suitable for our use case/staff?",
        answer:
            "Rosteox is suitable for contract, distributed, and multi-site workforce attendance management."
    },
    {
        question:
            "Can Rosteox be integrated with our existing payroll system?",
        answer:
            "Yes. Rosteox supports payroll and HRMS integrations for streamlined attendance processing."
    },
    {
        question:
            "Can consolidated attendance reports be generated?",
        answer:
            "Yes. Consolidated attendance reports can be generated across teams, sites, and client locations."
    },
    {
        question: "Can we customize policies?",
        answer:
            "Yes. Attendance, overtime, shift, leave, and workforce policies can be customized."
    },
    {
        question: "Can we geofence our multiple customer sites?",
        answer:
            "Yes. Multiple customer sites can be configured with geofencing for accurate attendance tracking."
    },
    {
        question:
            "Are there any other features specific to Manpower Staffing Agencies that Rosteox offers?",
        answer:
            "Rosteox provides centralized attendance tracking, staff transfers, shared kiosks, workforce visibility, and payroll-ready reports."
    }
];

export default function FAQSection() {

    const [activeFaq, setActiveFaq] = useState(null);

    const handleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <section className="leave-faq-section">

            <div className="container leave-faq-container">

                <div className="leave-faq-heading">
                    <h2>
                        Frequently asked questions

                    </h2>
                </div>

                <div className="leave-faq-list">

                    {faqData.map((item, index) => (

                        <div
                            className={`leave-faq-item ${
                                activeFaq === index ? "active" : ""
                            }`}
                            key={index}
                        >

                            <button
                                className="leave-faq-question"
                                onClick={() => handleFaq(index)}
                            >
                                <span>{item.question}</span>

                                <span className="leave-faq-icon">
                                    {activeFaq === index ? (
                                        <FaChevronUp />
                                    ) : (
                                        <FaChevronDown />
                                    )}
                                </span>
                            </button>

                            <div className="leave-faq-answer">

                                <div className="leave-faq-answer-inner">

                                    <p>{item.answer}</p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}