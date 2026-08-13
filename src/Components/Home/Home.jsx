import React, { useState } from "react";
import "./Home.css";
import problem1 from "../../assets/Home/1.webp"
import problem2 from "../../assets/Home/2.webp"
import problem3 from "../../assets/Home/3.webp"
import problem4 from "../../assets/Home/4.webp"
import problem5 from "../../assets/Home/5.webp"
import problem6 from "../../assets/Home/6.webp"
import problem7 from "../../assets/Home/7.webp"

import StaggerTestimonials from "./Testimonials";
import SolutionTabs from "../SolutionTabs/SolutionTabs";
import AISection from "./AISection"
import WhyChoose from "./WhyChoose"
import Advantage from "./Advantage"
import { useNavigate } from "react-router-dom";


import {
    FaUserShield,
    FaMapMarkerAlt,
    FaMapMarkedAlt,
    FaChartBar,
    FaBusinessTime,
    FaNetworkWired,
    FaUsers,
    FaClock,
    FaGlobe,
    FaCheckCircle,
    FaClipboardList,
    FaUserClock,
    FaDesktop,
    FaBriefcase,
    FaWifi,
    FaFileAlt
} from "react-icons/fa";





// const homeProblemData = [
//     {
//         title: "Buddy Punching And Time Fraud",
//         heading: "Clocking in Outside Work Site",
//         description:
//             "Fraud Detection at Clock-in - Use AI-powered face recognition with fraud detection to block photo tricks, shared IDs, and proxy punches, so only genuine clock-ins reach your timesheets.",
//         image: problem1,

//     },
//     {
//         title: "Clocking in Outside Work Site",
//         heading: "Clocking in Outside Work Site",
//         description:
//             "Field and contract staff have saved 37% of revenue leaks by ensuring clock-ins only happen at authorized sites through location-based tracking.",
//         image: problem2,

//     },
//     {
//         title: "Lack of Centralized Visibility",
//         heading: "Lack of Centralized Visibility",
//         description:
//             "Centralized Workforce Insights with Rostrox - Gain transparency and control with Rostrox's centralized solution, offering real-time visibility across multiple sites. Eliminate the complexity of the attendance process for every location.",
//         image: problem3,

//     },
//     {
//         title: "Time Split Across Jobs or Locations",
//         heading: "Time Tracking by Jobs or Locations",
//         description:
//             "Job-Based & Location-Based Time Tracking - Track time across multiple jobs, sites, shifts, and even staff categories for a clear view of where hours are logged.",
//         image: problem4,

//     },
//     {
//         title: "Poor Network On Sites",
//         heading: "Poor Network On Sites",
//         description:
//             "Offline Clock-ins – Let staff clock in on sites with poor or no network. Data is stored on the device and syncs automatically when connectivity is available, so remote locations are never missing from attendance.",
//         image: problem5,

//     },
//     {
//         title: "Temporary Sites and Workers",
//         heading: "Temporary Sites and Workers",
//         description:
//             "Instant Setup And Fast Onboarding- Rostrox's mobile-based solution lets you set up new sites instantly. Temporary workers can be onboarded within seconds via a kiosk right at the site.",
//         image: problem6,

//     },

//     {
//         title: "Manual Timesheet Fixes",
//         heading: "Manual Timesheet Fixes",
//         description:
//             "Smart Capture Rules - Rostrox reduces manual edits by auto-flagging late, off-site, duplicate, and missing punches at clock-in, so supervisors review only exceptions and timesheets stay clean and payroll ready.",
//         image: problem7,

//     },
// ];


const homeProblemData = [
    {
        title: "Buddy Punching And Time Fraud",
        heading: "Buddy Punching And Time Fraud",
        description:
            "Fraud Detection at Clock-in - Use AI-powered face recognition with fraud detection to block photo tricks, shared IDs, and proxy punches, so only genuine clock-ins reach your timesheets.",
        image: problem1,
        icon: <FaUserClock />,
    },
    {
        title: "Clocking in Outside Work Site",
        heading: "Clocking in Outside Work Site",
        description:
            "Field and contract staff have saved 37% of revenue leaks by ensuring clock-ins only happen at authorized sites through location-based tracking.",
        image: problem2,
        icon: <FaMapMarkerAlt />,
    },
    {
        title: "Lack of Centralized Visibility",
        heading: "Lack of Centralized Visibility",
        description:
            "Centralized Workforce Insights with Rostrox - Gain transparency and control with Rostrox's centralized solution, offering real-time visibility across multiple sites.",
        image: problem3,
        icon: <FaDesktop />,
    },
    {
        title: "Time Split Across Jobs or Locations",
        heading: "Time Tracking by Jobs or Locations",
        description:
            "Job-Based & Location-Based Time Tracking - Track time across multiple jobs, sites, shifts, and even staff categories for a clear view of where hours are logged.",
        image: problem4,
        icon: <FaBriefcase />,
    },
    // {
    //     title: "Poor Network On Sites",
    //     heading: "Poor Network On Sites",
    //     description:
    //         "Offline Clock-ins – Let staff clock in on sites with poor or no network. Data is stored on the device and syncs automatically when connectivity is available.",
    //     image: problem5,
    //     icon: <FaWifi />,
    // },
    {
        title: "Temporary Sites and Workers",
        heading: "Temporary Sites and Workers",
        description:
            "Instant Setup And Fast Onboarding - Rostrox's mobile-based solution lets you set up new sites instantly.",
        image: problem6,
        icon: <FaMapMarkedAlt />,
    },
    {
        title: "Manual Timesheet Fixes",
        heading: "Manual Timesheet Fixes",
        description:
            "Smart Capture Rules - Rostrox reduces manual edits by auto-flagging late, off-site, duplicate, and missing punches at clock-in.",
        image: problem7,
        icon: <FaFileAlt />,
    },
];


export default function Home() {


    const [activeProblem, setActiveProblem] = useState(0);
    const navigate = useNavigate();

    return (

        <>
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center mt-3">

                        {/* Left Content */}
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <h1>
                                    Intelligent Time & Attendance
                                    <br />
                                    for Contract & Multi-Site
                                    <br />
                                    Workforce
                                </h1>

                                <p>
                                    Capture verified clock-ins with face recognition and
                                    geofencing. Built-in AI detects time anomalies before
                                    payroll runs.
                                </p>


                                <button
                                    className="hero-btn"
                                    onClick={() => navigate("/demo")}
                                >
                                    Get in Touch
                                </button>
                            </div>
                        </div>

                        {/* Right Video */}
                        <div className="col-lg-6">
                            <div className="hero-video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/bknUn7yMwNI?si=wbyTCSxFU5jOOk3p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>

                    </div>

                </div>
            </section>






            {/* ================= PROBLEM & SOLUTION ================= */}

            <section className="home-problem-section">
                <div className="container home-problem-container">

                    <div className="home-problem-heading">
                        <span>Problem & Solution</span>

                        <h2>Smarter Attendance for Every Site</h2>
                    </div>

                    <div className="home-problem-grid">

                        {/* LEFT TABS */}

                        <div className="home-problem-tabs">

                            {homeProblemData.map((item, index) => (
                                <button
                                    key={index}
                                    className={`home-problem-tab ${activeProblem === index ? "active" : ""
                                        }`}
                                    onClick={() => setActiveProblem(index)}
                                >
                                    <span className="home-problem-tab-icon">
                                        {item.icon}
                                    </span>

                                    <span>{item.title}</span>
                                </button>
                            ))}

                        </div>


                        {/* RIGHT CONTENT */}

                        <div
                            className="home-problem-content"
                            key={activeProblem}
                        >

                            <h3>
                                {homeProblemData[activeProblem].heading}
                            </h3>

                            <p className="home-problem-description">
                                {homeProblemData[activeProblem].description}
                            </p>





                            <div className="home-problem-image">
                                <img
                                    src={homeProblemData[activeProblem].image}
                                    alt={homeProblemData[activeProblem].heading}
                                />
                            </div>

                        </div>

                    </div>

                </div>
            </section>



            <section className="stats-section">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <FaGlobe />
                                </div>

                                <div className="stat-content">
                                    <h2>25</h2>
                                    <p>Countries</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <FaMapMarkerAlt />
                                </div>

                                <div className="stat-content">
                                    <h2>10,000+</h2>
                                    <p>locations</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <FaUsers />
                                </div>

                                <div className="stat-content">
                                    <h2>500,000+</h2>
                                    <p>Users</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            < StaggerTestimonials />
            < SolutionTabs />
            < AISection />
            < WhyChoose />
            < Advantage />


        </>

    );
}