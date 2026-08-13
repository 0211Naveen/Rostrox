import "./GeofencingAttendance.css";
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
    FaLocationArrow,
    FaRulerCombined,
    FaShieldAlt,
    FaSlidersH ,
    FaMapMarkedAlt ,
    FaChartLine ,
    FaClock as FaClockIcon,
    FaSyncAlt,
    FaBell,
    FaFileInvoice,
    FaHome,
    FaUserFriends,
    FaStore,
    FaTruck,
    FaIndustry,
    FaHospital,
    FaUniversity,
    FaWarehouse,
} from "react-icons/fa";


import overviewImg from "../../../assets/Gps/2.webp";


import heroImg from "../../../assets/Gps/1.webp";

import featureImg1 from "../../../assets/Gps/3.webp";
import featureImg2 from "../../../assets/Gps/4.webp";
import featureImg3 from "../../../assets/Gps/5.webp";
import featureImg4 from "../../../assets/Gps/6.webp";
import featureImg5 from "../../../assets/Gps/7.webp";
import featureImg6 from "../../../assets/Gps/8.webp";


import Integrations from "../Integrations/Integrations";

const statsData = [
    {
        icon: <FaGlobeAmericas />,
        number: "60+",
        title: "Countries",
    },
    {
        icon: <FaMobileAlt />,
        number: "18,000+",
        title: "Mobile Devices",
    },
    {
        icon: <FaUsers />,
        number: "1,200,000+",
        title: "Active Users",
    },
];


// const benefitsData = [
//     {
//         icon: <FaLocationArrow />,
//         title: "Built for Contract & Multi-Site Teams",
//         desc: "Designed for contractors, subcontractors, hourly staff, and crews that shift between multiple locations.",
//         className: "benefit-large",
//     },
//     {
//         icon: <FaRulerCombined />,
//         title: "Instant Deployment, Anywhere",
//         desc: "Runs smoothly on mobile devices or tablets. No dedicated hardware required, making it quick to roll out and scale across sites.",
//         className: "benefit-large",
//     },
//     {
//         icon: <FaShieldAlt />,
//         title: "Flexible Policy Engine",
//         desc: "Select from 70+ ready-to-use rules to auto-manage shifts, overtime, and breaks while staying aligned with compliance needs.",
//         className: "benefit-small",
//     },
//     {
//         icon: <FaClockIcon />,
//         title: "Smart Face Recognition with GPS",
//         desc: "Clock-ins are verified through AI-powered face recognition combined with geofencing. Works reliably with masks, or even without the internet.",
//         className: "benefit-small",
//     },
//     {
//         icon: <FaSyncAlt />,
//         title: "Centralized Control and Clear Insights",
//         desc: "One dashboard gives real-time visibility of attendance across all sites, with payroll-ready reports that cut errors and speed up decisions.",
//         className: "benefit-wide",
//     },
// ];

const benefitsData = [
    {
        icon: <FaUsers />,
        title: "Built for Contract & Multi-Site Teams",
        desc: "Designed for contractors, subcontractors, hourly staff, and crews that shift between multiple locations.",
        className: "benefit-large",
    },
    {
        icon: <FaMobileAlt />,
        title: "Instant Deployment, Anywhere",
        desc: "Runs smoothly on mobile devices or tablets. No dedicated hardware required, making it quick to roll out and scale across sites.",
        className: "benefit-large",
    },
    {
        icon: <FaSlidersH />,
        title: "Flexible Policy Engine",
        desc: "Select from 70+ ready-to-use rules to auto-manage shifts, overtime, and breaks while staying aligned with compliance needs.",
        className: "benefit-small",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Smart Face Recognition with GPS",
        desc: "Clock-ins are verified through AI-powered face recognition combined with geofencing. Works reliably with masks, or even without the internet.",
        className: "benefit-small",
    },
    {
        icon: <FaChartLine />,
        title: "Centralized Control and Clear Insights",
        desc: "One dashboard gives real-time visibility of attendance across all sites, with payroll-ready reports that cut errors and speed up decisions.",
        className: "benefit-wide",
    },
];

const mobileFeatures = [
    {
        tag: "GPS-Based Geofenced Attendance System",
        title: "Clock In/Out at Multiple Locations",
        description:
            "With Rostrox’s GPS attendance system, contract and multi-site teams can clock in only from approved locations. Every entry is time and location-stamped, ensuring payroll accuracy and eliminating location-related disputes.",
        image: featureImg1,
        faqs: [
            {
                question: "How does location verification work?",
                answer:
                    "The system captures the employee's current location during login and compares it with the assigned work location before allowing attendance.",
            },
            {
                question: "When is the location captured?",
                answer:
                    "The employee's location is fetched automatically at login and used to verify attendance eligibility.",
            },
            {
                question: "What happens if the location doesn't match?",
                answer:
                    "If the logged-in location doesn't match the assigned work location, attendance is restricted according to the organization's attendance policy.",
            },
        ],
    },
    {
        tag: "Geofence Specific Work Sites",
        title: "Accurate Location-Based Attendance",
        description:
            "Geofencing ensures clock-ins only happen at designated worksites. Staff outside the set radius can’t mark attendance. Managers get a real-time dashboard view of who’s on site and which job they’re assigned to.",
        image: featureImg2,
        faqs: [
            {
                question: "Can I have multiple Geolocation?",
                answer:
                    "Yes. You can create unlimited Geolocation for different locations.",
            },
            {
                question: "Can employees be assigned to multiple sites?",
                answer:
                    "Yes. Employees can be assigned to multiple geofenced locations.",
            },
            {
                question: "Is it easy to manage?",
                answer:
                    "Yes. The dashboard provides a complete overview of all geofences.",
            },
        ],
    },
    // {
    //     tag: "Real-Time Tracking",
    //     title: "Live Location Monitoring",
    //     description:
    //         "Monitor employee locations in real-time. View who's checked in, who's late, and who's on-site - all from a single dashboard.",
    //     image: featureImg3,
    //     faqs: [
    //         {
    //             question: "Can I see live locations?",
    //             answer:
    //                 "Yes. Real-time location tracking is available for all active employees.",
    //         },
    //         {
    //             question: "Does it drain battery?",
    //             answer:
    //                 "The app is optimized for minimal battery consumption.",
    //         },
    //         {
    //             question: "Is it GDPR compliant?",
    //             answer:
    //                 "Yes. All location data is handled with strict privacy compliance.",
    //         },
    //     ],
    // },
    {
        tag: "Buddy Punching Prevention",
        title: "Secure Clock-Ins with Face Recognition",
        description:
            "Rostrox combines geofencing with AI-powered face recognition to stop buddy punching and time fraud. Staff can clock in via selfie or kiosk app only at approved worksites.",
        image: featureImg4,
        faqs: [
            {
                question: "Can I automate attendance rules?",
                answer:
                    "Yes. Set rules for automatic check-in/out based on location.",
            },
            {
                question: "What notifications are available?",
                answer:
                    "Get alerts for late arrivals, early departures, and policy violations.",
            },
            {
                question: "Can I customize rules per location?",
                answer:
                    "Yes. Each geofence can have its own set of rules and policies.",
            },
        ],
    },
    {
        tag: "Employee Self-Service Attendance App",
        title: "Empower Staff with Self-Serve Tools",
        description:
            "Through the Rostrox user app, staff can regularize attendance, view and apply for leave, check approvals, and see allocated shifts. Managers can approve requests directly in the app.",
        image: featureImg5,
        faqs: [
            {
                question: "Is face recognition mandatory?",
                answer:
                    "It can be configured as mandatory or optional based on policy.",
            },
            {
                question: "Does it work with masks?",
                answer:
                    "Yes. The system supports mask recognition for hygiene compliance.",
            },
            {
                question: "Is it accurate?",
                answer:
                    "Yes. AI-powered face recognition with liveness detection is highly accurate.",
            },
        ],
    },

    {
        tag: "Smart Policy-Driven Reports",
        title: "Automated Attendance Policies and Reporting",
        description:
            "Set custom rules for overtime, breaks, late marks, half-days, and shifts. Track compliance in real time and export payroll-ready reports in multiple formats.",
        image: featureImg6,
        faqs: [
            {
                question: "What reports are available?",
                answer:
                    "Attendance reports, location analytics, overtime reports, and custom reports.",
            },
            {
                question: "Can I export reports from mobile?",
                answer:
                    "Yes. Reports can be exported in PDF, Excel, and CSV formats.",
            },
            {
                question: "Is the data real-time?",
                answer:
                    "Yes. All reports show real-time attendance data.",
            },
        ],
    },

];


const solutionsData = [
    {
        icon: <FaMapMarkerAlt />,
        title: "Grolocation Attendance",
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
        icon: <FaCalendarAlt />,
        title: "Shift Scheduling",
    },
    {
        icon: <FaDesktop />,
        title: "Location Analytics Dashboard",
    },
    {
        icon: <FaChartBar />,
        title: "Reports & Analytics",
    },
];


const industryData = [
    {
        icon: <FaBriefcase />,
        title: "Corporate Offices",
    },
    {
        icon: <FaBuilding />,
        title: "Construction Sites",
    },
    {
        icon: <FaIndustry />,
        title: "Manufacturing",
    },
    {
        icon: <FaWarehouse />,
        title: "Warehouses",
    },
    {
        icon: <FaStore />,
        title: "Retail Stores",
    },
    {
        icon: <FaHospital />,
        title: "Healthcare",
    },
    {
        icon: <FaUniversity />,
        title: "Education",
    },
    {
        icon: <FaTruck />,
        title: "Logistics",
    },
];

const GeofencingAttendance = () => {
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
            <section className="geofencing-hero">
                <div className="container Grolocation-container">
                    <div className="row align-items-center geofencing-box">
                        <div className="col-lg-6 Grolocation-left">
                            <div className="geofencing-tag">
                                Attendance and Timesheet Solution

                            </div>
                            <h1 className="geofencing-title">
                                GPS-Based Grolocation Attendance System for Employee Time Tracking
                            </h1>
                            <ul className="geofencing-list">
                                <li>
                                    <FaCheck />
                                    <span>GPS Geolocation for contract and multi-site workforce</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Reliable tracking, even without internet</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Real-time oversight from one dashboard</span>
                                </li>

                            </ul>
                            <button className="geofencing-demo-btn">
                                Book a Demo
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="geofencing-hero-image">
                                <img src={heroImg} alt="Geofencing Attendance System" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO SECTION ================= */}
            <section className="geofencing-video-section">
                <div className="container">
                    <h2 className="geofencing-video-title">
                        Trusted by Workforces Across Industries
                    </h2>
                    <div className="geofencing-video-box">
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
            <section className="geofencing-stats-section">
                <div className="container">
                    <div className="geofencing-stats">
                        {statsData.map((item, index) => (
                            <div className="geofencing-stat-item" key={index}>
                                <div className="geofencing-stat-icon">
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
                            GPS-Smart Time Tracking
                        </h2>

                        <p>
                            From clock-in to timesheets, every step is automated and accurate with the GPS attendance tracking system. Monitor multiple locations in real time, generate timesheets instantly, and keep compliance airtight without bulky hardware.

                        </p>

                        <div className="attendance-overview-image">
                            <img
                                src={overviewImg}
                                alt="AI Powered Geofencing Attendance"
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

                        <h2>Why Choose Geofencing Attendance?</h2>
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
            <section className="geofencing-features-section" id="features">
                <div className="container geofencing-features-container">
                    {mobileFeatures.map((feature, featureIndex) => (
                        <div
                            className={`geofencing-feature-row ${featureIndex % 2 !== 0 ? "geofencing-feature-reverse" : ""}`}
                            key={featureIndex}
                        >
                            {/* CONTENT */}
                            <div className="geofencing-feature-content">
                                <span className="geofencing-feature-tag">
                                    {feature.tag}
                                </span>
                                <h2>{feature.title}</h2>
                                <p className="geofencing-feature-description">
                                    {feature.description}
                                </p>
                                <div className="geofencing-faq-wrapper">
                                    <h4>Quick FAQs</h4>
                                    {feature.faqs.map((faq, faqIndex) => {
                                        const faqId = `${featureIndex}-${faqIndex}`;
                                        const isOpen = openFaq === faqId;
                                        return (
                                            <div className="geofencing-faq-item" key={faqIndex}>
                                                <button
                                                    className="geofencing-faq-question"
                                                    onClick={() => handleFaq(featureIndex, faqIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </button>
                                                <div className={`geofencing-faq-answer ${isOpen ? "show" : ""}`}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* IMAGE */}
                            <div className="geofencing-feature-image">
                                <img src={feature.image} alt={feature.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* ================= INDUSTRIES SECTION ================= */}
            <section className="geofencing-industries-section">
                <div className="container geofencing-industries-container">
                    <div className="geofencing-industries-heading">
                        <span>Industries We Serve</span>
                        <h2>Geolocation Attendance For Every Industry</h2>
                        <p>
                            From construction sites to corporate offices, our Geolocation solution
                            adapts to your industry needs. Ensure accurate attendance tracking
                            across all locations.
                        </p>
                    </div>
                    <div className="geofencing-industries-grid">
                        {industryData.map((item, index) => (
                            <div className="geofencing-industry-card" key={index}>
                                <div className="geofencing-industry-icon">
                                    {item.icon}
                                </div>
                                <span>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <Integrations />

            <AttendanceTools />

            <Advantage />




            <section className="geofencing-solutions-section">
                <div className="container">
                    <div className="geofencing-solutions-wrapper">

                        <div className="geofencing-solutions-left">
                            <h2>
                                Explore Our Other <br />
                                Rosteox Workforce <br />
                                Solutions
                            </h2>
                        </div>

                        <div className="geofencing-solutions-grid">
                            {solutionsData.map((item, index) => (
                                <div className="geofencing-solutions-card" key={index}>
                                    <div className="geofencing-solutions-icon">
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

export default GeofencingAttendance;