import "./StaffShiftScheduling.css";
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
    FaClock as FaClockIcon,
    FaSyncAlt,
    FaBell,
    FaRegCalendarAlt,
    FaExchangeAlt,
    FaUserClock,
    FaTasks,
    FaClipboardList,
    FaRegClock,
} from "react-icons/fa";


import heroImg from "../../../assets/Shift/1.webp";

import overviewImg from "../../../assets/Shift/2.webp";


import featureImg1 from "../../../assets/Shift/3.webp";
import featureImg2 from "../../../assets/Shift/4.webp";
import featureImg3 from "../../../assets/Shift/5.webp";
import featureImg4 from "../../../assets/Shift/6.webp";
import featureImg5 from "../../../assets/Shift/7.webp";
import featureImg6 from "../../../assets/Shift/8.webp";



import Integrations from "../Integrations/Integrations";

const statsData = [
    {
        icon: <FaGlobeAmericas />,
        number: "45",
        title: "Countries",
    },
    {
        icon: <FaMobileAlt />,
        number: "25,000+",
        title: "Mobile Devices",
    },
    {
        icon: <FaUsers />,
        number: "1,500,000+",
        title: "Active Users",
    },
];


const benefitsData = [
    {
        icon: <FaRegCalendarAlt />,
        title: "Effortless Shift Scheduling",
        desc: "Create and assign shifts in minutes, with seamless cross-day tracking and real-time updates to staff via mobile.",
        className: "benefit-large",
    },
    {
        icon: <FaExchangeAlt />,
        title: "Overtime & Break Compliance",
        desc: "Pre-set caps prevent shift overruns and ensure paid/unpaid breaks are applied consistently.",
        className: "benefit-large",
    },
    {
        icon: <FaUserClock />,
        title: "Automated Shift Allocation",
        desc: "Auto-allocates shifts based on clock-in times, minimizes manual errors, and saves HR time.",
        className: "benefit-small",
    },
    {
        icon: <FaBell />,
        title: "Real-Time Visibility & Centralized Control",
        desc: "Track planned vs actual shifts, get site- and contractor-level insights, and manage all schedules from a single dashboard.",
        className: "benefit-small",
    },
    {
        icon: <FaTasks />,
        title: "Flexible Multi-Site Management",
        desc: "Manage rotating, fixed, or round-the-clock shifts across multiple sites, with category-based assignments and site-specific policies for compliance.",
        className: "benefit-wide",
    },
];



const mobileFeatures = [
    {
        tag: "Smart Shift Planning",
        title: "Schedule Shifts Easily and Effectively",
        description:
            "Rostrox's shift management software makes scheduling effortless, allowing you to create and update schedules in minutes, with staff instantly notified of any changes.",
        image: featureImg1,
        faqs: [
            {
                question: "Can I create recurring shift patterns?",
                answer:
                    "Yes. Supports daily, weekly, and monthly recurring shift patterns.",
            },
            {
                question: "Can I customize shift timings?",
                answer:
                    "Yes. Shift timings can be customized for each location and department.",
            },
            {
                question: "Is shift scheduling automated?",
                answer:
                    "Yes. AI-powered scheduling suggests optimal shifts based on availability.",
            },
        ],
    },
    {
        tag: "Bulk shift allocation",
        title: "Allocate Shifts in Bulk or Individually",
        description:
            "Upload shifts in bulk or individually to manage fluctuating staffing needs, efficiently organizing monthly, weekly, or daily schedules.",
        image: featureImg2,
        faqs: [
            {
                question: "How does automatic shift allocation work?",
                answer:
                    "The system matches employees' punch-in times with predefined shift schedules and automatically assigns them to the appropriate shift.",
            },
            {
                question: "Can I configure grace periods for shifts?",
                answer:
                    "Yes. Configure early arrival, late arrival, and grace periods to ensure employees are assigned to the correct shift according to your attendance policies.",
            },
            {
                question: "Does it support multiple shifts?",
                answer:
                    "Yes. Manage day, night, rotational, and custom shifts with automatic allocation based on employee punch-in times.",
            },
        ],
    },
    {
        tag: "Shift allotment",
        title: "Auto Allotment of Shifts",
        description:
            "The employee scheduling software automatically assigns shifts based on the clock-in time and configured rules, eliminating manual scheduling errors and saving administrative time.",
        image: featureImg3,
        faqs: [
            {
                question: "Is the dashboard updated in real-time?",
                answer:
                    "Yes. All shift data is updated in real-time as employees check in/out.",
            },
            {
                question: "Can managers view all shifts?",
                answer:
                    "Yes. Managers have full visibility across all locations and departments.",
            },
            {
                question: "Can I see shift history?",
                answer:
                    "Yes. Historical shift data is available for reporting and analysis.",
            },
        ],
    },
    {
        tag: "Shift Pattern Management",
        title: "Manage Multiple Shift Patterns",
        description:
            "Easily handle rotating, fixed, or round-the-clock (24×7) shift patterns, with configurable rules to adjust schedules as needed.",
        image: featureImg4,
        faqs: [
            {
                question: "What reports are available?",
                answer:
                    "Shift coverage reports, attendance reports, overtime reports, and custom reports.",
            },
            {
                question: "Can I export shift reports?",
                answer:
                    "Yes. Reports can be exported in PDF, Excel, and CSV formats.",
            },
            {
                question: "Are reports customizable?",
                answer:
                    "Yes. Filter by department, location, date range, and more.",
            },
        ],
    },
    {
        tag: "Shift Performance Tracking",
        title: "Planned vs Actual Shift View",
        description:
            "Access real-time dashboards to compare planned vs actual shifts, optimizing staff allocation and workforce management.",
        image: featureImg5,
        faqs: [
            {
                question: "What systems can I integrate with?",
                answer:
                    "Popular HRIS, payroll, and ERP systems are supported.",
            },
            {
                question: "Is integration automatic?",
                answer:
                    "Yes. Data syncs automatically based on configured schedules.",
            },
            {
                question: "Do I need technical expertise?",
                answer:
                    "No. Integration setup is simple and guided.",
            },
        ],
    },
    {
        tag: "Shift Policy Configuration",
        title: "Multiple Customizable Shift-Related Policies",
        description:
            "Set custom policies for late entries, early outs, grace periods, or overtime approvals. Apply policies at site, category, or role level for total flexibility.",
        image: featureImg6,
        faqs: [
            {
                question: "What systems can I integrate with?",
                answer:
                    "Popular HRIS, payroll, and ERP systems are supported.",
            },
            {
                question: "Is integration automatic?",
                answer:
                    "Yes. Data syncs automatically based on configured schedules.",
            },
            {
                question: "Do I need technical expertise?",
                answer:
                    "No. Integration setup is simple and guided.",
            },
        ],
    },
];


const solutionsData = [
    {
        icon: <FaRegCalendarAlt />,
        title: "Shift Scheduling",
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
        icon: <FaUserClock />,
        title: "Shift Tracking",
    },
    {
        icon: <FaDesktop />,
        title: "Dashboard Analytics",
    },
    {
        icon: <FaChartBar />,
        title: "Reports & Analytics",
    },
];

const StaffShiftScheduling = () => {
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



    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section className="staffshift-hero">
                <div className="container staffshift-container">
                    <div className="row align-items-center staffshift-box">
                        <div className="col-lg-6 staffshift-left">
                            <div className="staffshift-tag">
                                Plan and manage shifts with ease


                            </div>
                            <h1 className="staffshift-title">
                                Employee Shift Scheduling Software for Contract and Multi-site Teams
                            </h1>
                            <ul className="staffshift-list">
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
                            <button className="staffshift-demo-btn">
                                Book a Demo
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="staffshift-hero-image">
                                <img src={heroImg} alt="Staff Shift Scheduling System" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO SECTION ================= */}
            <section className="staffshift-video-section">
                <div className="container">
                    <h2 className="staffshift-video-title">
                        Trusted by Workforces Across Industries
                    </h2>
                    <div className="staffshift-video-box">
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
            <section className="staffshift-stats-section">
                <div className="container">
                    <div className="staffshift-stats">
                        {statsData.map((item, index) => (
                            <div className="staffshift-stat-item" key={index}>
                                <div className="staffshift-stat-icon">
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

            <section className="attendance-overview-section " id="overview">
                <div className="container attendance-overview-container">


                    {/* CONTENT */}

                    <div className="attendance-overview-content">

                        <span className="attendance-small-title">
                            Feature Overview
                        </span>

                        <h2>
                            Smart Shift Scheduling Software for Contract and
                            Multi-Site Workforce                        
                            </h2>

                        <p>
                            Create and assign shifts in minutes, manage rotating or fixed schedules, and auto-assign staff to pre-created shifts based on their clock-in time. Track planned vs actual shifts, set custom shift policies, and keep managers and staff updated through the employee scheduling app.
                        </p>

                        <div className="attendance-overview-image">
                            <img
                                src={overviewImg}
                                alt="Staff Shift Scheduling"
                            />
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

                        <h2>Why Choose Rosteox for Shift Scheduling?</h2>
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
            <section className="staffshift-features-section" id="features">
                <div className="container staffshift-features-container">
                    {mobileFeatures.map((feature, featureIndex) => (
                        <div
                            className={`staffshift-feature-row ${featureIndex % 2 !== 0 ? "staffshift-feature-reverse" : ""}`}
                            key={featureIndex}
                        >
                            {/* CONTENT */}
                            <div className="staffshift-feature-content">
                                <span className="staffshift-feature-tag">
                                    {feature.tag}
                                </span>
                                <h2>{feature.title}</h2>
                                <p className="staffshift-feature-description">
                                    {feature.description}
                                </p>
                                <div className="staffshift-faq-wrapper">
                                    <h4>Quick FAQs</h4>
                                    {feature.faqs.map((faq, faqIndex) => {
                                        const faqId = `${featureIndex}-${faqIndex}`;
                                        const isOpen = openFaq === faqId;
                                        return (
                                            <div className="staffshift-faq-item" key={faqIndex}>
                                                <button
                                                    className="staffshift-faq-question"
                                                    onClick={() => handleFaq(featureIndex, faqIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </button>
                                                <div className={`staffshift-faq-answer ${isOpen ? "show" : ""}`}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* IMAGE */}
                            <div className="staffshift-feature-image">
                                <img src={feature.image} alt={feature.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <Integrations />

            <AttendanceTools />

            <Advantage />




            <section className="staffshiftsolutions-section">
                <div className="container">
                    <div className="staffshiftsolutions-wrapper">

                        <div className="staffshiftsolutions-left">
                            <h2>
                                Explore Our Other <br />
                                Rosteox Workforce <br />
                                Solutions
                            </h2>
                        </div>

                        <div className="staffshiftsolutions-grid">
                            {solutionsData.map((item, index) => (
                                <div className="staffshiftsolutions-card" key={index}>
                                    <div className="staffshiftsolutions-icon">
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

export default StaffShiftScheduling;