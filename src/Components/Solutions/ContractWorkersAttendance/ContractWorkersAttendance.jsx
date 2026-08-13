import "./ContractWorkersAttendance.css";
import React, { useState } from 'react';
import AttendanceTools from "../../Industry/AttendanceTools/AttendanceTools";
import SubNavbar from "../SubNavbar/SubNavbar";
import Advantage from "../../Home/Advantage";

import {
    FaCheck,
    FaGlobeAmericas,
    FaFileInvoiceDollar,
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
    FaHandshake,
    FaFileContract,
    FaUserTie,
    FaClipboardList,
    FaClock,
    FaBriefcase,
    FaShieldAlt,
    FaEye ,
    FaUserPlus ,
    FaSitemap ,
    FaBusinessTime 
} from "react-icons/fa";


import heroImg from "../../../assets/Contract/1.webp";
import overviewImg from "../../../assets/Contract/2.webp";



import featureImg1 from "../../../assets/Contract/9.webp";
import featureImg2 from "../../../assets/Contract/10.webp";
import featureImg3 from "../../../assets/Contract/11.webp";
import featureImg4 from "../../../assets/Contract/12.webp";
import featureImg5 from "../../../assets/Contract/13.webp";
import featureImg6 from "../../../assets/Contract/14.webp";
import featureImg7 from "../../../assets/Contract/15.webp";

import Integrations from "../Integrations/Integrations";



import contractProblemImg1 from "../../../assets/Contract/4.webp";
import contractProblemImg2 from "../../../assets/Contract/5.webp";
import contractProblemImg3 from "../../../assets/Contract/6.webp";
import contractProblemImg4 from "../../../assets/Contract/7.webp";
import contractProblemImg5 from "../../../assets/Contract/8.webp";
import contractProblemImg6 from "../../../assets/Contract/8.webp";



const statsData = [
    {
        icon: <FaGlobeAmericas />,
        number: "35",
        title: "Countries",
    },
    {
        icon: <FaUsers />,
        number: "2,500+",
        title: "Contractors",
    },
    {
        icon: <FaUserTie />,
        number: "500,000+",
        title: "Contract Workers",
    },
];

const benefitsData = [
    {
        icon: <FaIdCard />,
        title: "Lower Contractor Cost Leakages",
        desc: "AI-based face recognition and GPS-verified attendance stop buddy punching, false clock-ins, and duplicate entries, cutting hidden costs across sites.",
        className: "benefit-large",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Centralized Oversight",
        desc: "Manage all contractors, sites, and agencies from one dashboard. With the contract staff attendance system, gain complete visibility without chasing multiple reports or manual updates.",
        className: "benefit-large",
    },
    {
        icon: <FaFileContract />,
        title: "Faster Workforce Deployment",
        desc: "Contract and temporary staff can self-register with a selfie and start immediately, reducing admin dependency and onboarding delays.",
        className: "benefit-small",
    },
    {
        icon: <FaUserCheck />,
        title: "Compliance Made Easy",
        desc: "Stay audit-ready with automated attendance, overtime, and policy enforcement that aligns with labor and contract requirements.",
        className: "benefit-small",
    },
    {
        icon: <FaCoins />,
        title: "Reduced HR and Admin Effort",
        desc: "Automated reports, attendance, and shift tracking free up hours of manual validation and spreadsheet work for HR team",
        className: "benefit-wide",
    },
];

const contractFeatures = [
    {
        tag: "Fraud-Proof & Reliable",
        title: "Eliminate Time Theft with Face Recognition",
        description:
            "Rostrox's contract staff attendance software ensures only the right worker clocks in, no shared IDs or proxy sign-ins. Face recognition keeps attendance accurate across all sites, even offline or in low light.",
        image: featureImg1,
        faqs: [
            {
                question: "How do I onboard contract workers?",
                answer:
                    "Onboard quickly with digital profiles, document upload, and face verification.",
            },
            {
                question: "Can I manage multiple agencies?",
                answer:
                    "Yes. Manage multiple staffing agencies with individual access and reporting.",
            },
            {
                question: "What about temporary workers?",
                answer:
                    "Temporary and seasonal workers can be easily added and removed as needed.",
            },
        ],
    },
    {
        tag: "Contractor Agency Management",
        title: "Centralized Control for All Contractor Agencies",
        description:
            "Add, edit, and map contractor agencies to specific sites. Set headcount limits, apply contractor-specific policies or pay rates, and give scoped access to contractor supervisors while retaining full organizational control.",
        image: featureImg2,
        faqs: [
            {
                question: "How is location verified?",
                answer:
                    "GPS coordinates and geofencing ensure workers are at the correct site.",
            },
            {
                question: "Can workers mark attendance remotely?",
                answer:
                    "No. Attendance is only allowed within defined geofenced areas.",
            },
            {
                question: "What if they work at multiple sites?",
                answer:
                    "Workers can be assigned to multiple sites with configurable access.",
            },
        ],
    },
    {
        tag: "Headcount & Compliance Controls",
        title: "Stay Compliant with Contractor and Workforce Rules",
        description:
            "Maintain audit-ready records with automated policy checks. Track document expiries, enforce contractor caps, and ensure payable hours and man-days align with your rules.",
        image: featureImg3,
        faqs: [
            {
                question: "Does face recognition work for all workers?",
                answer:
                    "Yes. Works for all workers regardless of their assignment duration.",
            },
            {
                question: "Can workers register remotely?",
                answer:
                    "Yes. Workers can register their face using the mobile app.",
            },
            {
                question: "Is liveness detection included?",
                answer:
                    "Yes. Full liveness detection prevents fraud with photos or videos.",
            },
        ],
    },
    {
        tag: "Quick & Effortless",
        title: "Onboard Contract Workers in Seconds",
        description:
            "Add new or replacement workers quickly through bulk uploads or kiosk-side entry. Create profiles instantly with face registration on worker attendance app and deploy verified staff across sites without delays.",
        image: featureImg4,
        faqs: [
            {
                question: "Can I mark attendance without internet?",
                answer:
                    "Yes. The app works fully offline with auto-sync when connected.",
            },
            {
                question: "Is data safe offline?",
                answer:
                    "Yes. All data is encrypted and stored securely on the device.",
            },
            {
                question: "What happens if the device is lost?",
                answer:
                    "All data is encrypted and can be wiped remotely if needed.",
            },
        ],
    },
    {
        tag: "Automated & Transparent",
        title: "Contractor-Wise Insights at a Glance",
        description:
            "View attendance, OT, payable hours, and headcount in real time. Filter data by contractor or site, review exceptions instantly, and export payroll-ready reports without manual checks.",
        image: featureImg5,
        faqs: [
            {
                question: "Can I see all workers at a site?",
                answer:
                    "Yes. View all contract workers assigned to each site in real-time.",
            },
            {
                question: "How do I track compliance?",
                answer:
                    "Track certifications, licenses, and contract expiries centrally.",
            },
            {
                question: "Can agencies see their workers?",
                answer:
                    "Yes. Agencies can have limited access to their assigned workers.",
            },
        ],
    },
    {
        tag: "Flexible Shift Planning",
        title: "Simplify Shift Planning Across Sites",
        description:
            "Create, assign, or bulk-update shifts for large contractor crews across multiple sites. Apply contractor-specific shift rules and ensure every worker is deployed at the right time and location.",
        image: featureImg6,
        faqs: [
            {
                question: "What check-in methods are available?",
                answer:
                    "QR codes, NFC, Bluetooth beacons, GPS, and manual check-in.",
            },
            {
                question: "Is check-in faster?",
                answer:
                    "Yes. Check-in takes less than 2 seconds with QR or NFC.",
            },
            {
                question: "Can sites use different methods?",
                answer:
                    "Yes. Each site can have its own preferred check-in method.",
            },
        ],
    },
    {
        tag: "Device & Site Controls",
        title: "Control Clock-Ins Across Sites and Devices",
        description:
            "Apply site and device-level rules so contract workers clock in only from approved locations and kiosks. Enforce geofencing, block personal devices if needed, and keep attendance accurate across every site.",
        image: featureImg7,
        faqs: [
            {
                question: "Can I view worker schedules?",
                answer:
                    "Yes. View schedules for all contract workers across sites.",
            },
            {
                question: "Can workers request shift changes?",
                answer:
                    "Yes. Workers can request shift swaps and changes through the app.",
            },
            {
                question: "Can I track overtime?",
                answer:
                    "Yes. Overtime is automatically tracked and reported.",
            },
        ],
    },
  
];

const solutionsData = [
    {
        icon: <FaUserCheck />,
        title: "Contract Staff Attendance",
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
        title: "Attendance Analytics Dashboard",
    },
    {
        icon: <FaChartBar />,
        title: "Reports & Analytics",
    },
];



const contractProblemData = [
    {
        tabIcon: <FaFileInvoiceDollar   />,
        title: "Contractor Overbilling",
        heading: "Contractor Overbilling & Hidden Headcount Creep",
        description:
            "Duplicate or excess entries inflate project costs and create compliance risks.",
        image: contractProblemImg1,
        points: [
            {
                icon: <FaCoins />,
                text: "Contractor Agency Master to cap attendance and headcount",
            },
            {
                icon: <FaUserCheck />,
                text: "Real-time contractor-wise visibility across sites",
            },
            {
                icon: <FaChartBar />,
                text: "Prevents proxy punches and duplicate entries",
            },
        ],
    },
    {
        tabIcon: <FaEye  />,
        title: "Limited Contractor Visibility",
        heading: "Supervisors either see too little or too much, reducing accountability.",
        description:
            "",
        image: contractProblemImg2,
        points: [
            {
                icon: <FaUserShield />,
                text: "Scoped access with Contractor View",
            },
            {
                icon: <FaIdCard />,
                text: "Agency supervisors manage only their staff and sites",
            },
            {
                icon: <FaCheckCircle />,
                text: "HQ retains full control and oversight via admin roles",
            },
        ],
    },
    {
        tabIcon: <FaUserPlus  />,
        title: "Slow Onboarding for Rotating Crews",
        heading: "Manual onboarding delays crew deployment and increases HR workload.",
        description:
            "",
        image: contractProblemImg3,
        points: [
            {
                icon: <FaMapMarkerAlt />,
                text: "Bulk upload for faster onboarding",
            },
            {
                icon: <FaBuilding />,
                text: "Add staff at the gate via kiosk",
            },
            {
                icon: <FaUsers />,
                text: "Instant profile creation and face registration",
            },
        ],
    },
    {
        tabIcon: <FaSitemap  />,
        title: "Multi-Site Chaos",
        heading: "Automate Contract Worker Timesheets",
        description:
            "",
        image: contractProblemImg4,
        points: [
            {
                icon: <FaClock />,
                text: "Unified Day View and Timesheet dashboards",
            },
            {
                icon: <FaClipboardList />,
                text: "Contractor and site-level filters",
            },
            {
                icon: <FaCalendarAlt />,
                text: "Real-time data across all locations",
            },
        ],
    },

    {
        tabIcon: <FaBusinessTime  />,
        title: "Manual OT & Payable Hour Errors",
        heading: "Overtime and payable hours are often miscalculated, leading to payment disputes.",
        description:
            "Track contracts, basic details and expiry dates centrally to maintain workforce compliance across every site.",
        image: contractProblemImg6,
        points: [
            {
                icon: <FaFileContract />,
                text: "Shift-linked OT and payable-hour rules",
            },
            {
                icon: <FaShieldAlt />,
                text: "Auto-applies grace, late-marks, and early-in controls from policies",
            },
            {
                icon: <FaUserTie />,
                text: "Auto clock-out for forgotten exits",
            },
        ],
    },
];

const ContractWorkersAttendance = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const [activeContractProblem, setActiveContractProblem] = useState(0);

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
            <section className="contractworkers-hero">
                <div className="container contractworkers-container">
                    <div className="row align-items-center contractworkers-box">
                        <div className="col-lg-6 contractworkers-left">
                            <div className="contractworkers-tag">
                                Built for Contract Workforce

                            </div>
                            <h1 className="contractworkers-title">
                                Face-Based Contract Labor Attendance Software
                            </h1>
                            <ul className="contractworkers-list">
                                <li>
                                    <FaCheck />
                                    <span>Quick onboarding for contract workers</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Prevent contractor overbilling</span>
                                </li>
                                <li>
                                    <FaCheck />
                                    <span>Real-time visibility across sites and agencies</span>
                                </li>

                            </ul>
                            <button className="contractworkers-demo-btn">
                                Book a Demo
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <div className="contractworkers-hero-image">
                                <img src={heroImg} alt="Contract Workers Attendance" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= VIDEO SECTION ================= */}
            <section className="contractworkers-video-section">
                <div className="container">
                    <h2 className="contractworkers-video-title">
                        Trusted by Organizations Managing Contract Workers
                    </h2>
                    <div className="contractworkers-video-box">
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
            <section className="contractworkers-stats-section">
                <div className="container">
                    <div className="contractworkers-stats">
                        {statsData.map((item, index) => (
                            <div className="contractworkers-stat-item" key={index}>
                                <div className="contractworkers-stat-icon">
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
            <section className="contractworkers-overview-section" id="overview">
                <div className="container contractworkers-overview-container">
                    <div className="contractworkers-overview-content">
                        <span className="contractworkers-small-title">
                            Feature Overview
                        </span>
                        <h2>
                            Built for the Way Contract Workforces Operate
                        </h2>
                        <p>
                            Manage contractor agencies, enforce headcount and compliance limits, and onboard new workers in seconds, all through one face recognition attendance app for workers.


                        </p>
                        <div className="contractworkers-overview-image">
                            <img
                                src={overviewImg}
                                alt="AI Powered Attendance"
                            />
                        </div>
                    </div>
                </div>
            </section>




            {/* ================= PROBLEM & SOLUTION SECTION ================= */}

            <section className="contract-problem-section">
                <div className="container contract-problem-container">

                    <div className="contract-problem-heading">
                        <span>Problem & Solution</span>

                        <h2>
                            Smarter Contract Workforce Management
                        </h2>
                    </div>


                    <div className="contract-problem-grid">

                        {/* LEFT TABS */}

                        <div className="contract-problem-tabs">

                          
                            {contractProblemData.map((item, index) => (
                                <button
                                    key={index}
                                    className={`contract-problem-tab ${activeContractProblem === index ? "active" : ""
                                        }`}
                                    onClick={() => setActiveContractProblem(index)}
                                >
                                    <span className="contract-problem-tab-icon">
                                        {activeContractProblem === index ? (
                                            <FaCheckCircle />
                                        ) : (
                                            item.tabIcon
                                        )}
                                    </span>

                                    <span>{item.title}</span>
                                </button>
                            ))}

                        </div>


                        {/* RIGHT CONTENT */}

                        <div className="contract-problem-content">

                            <h3>
                                {contractProblemData[activeContractProblem].heading}
                            </h3>

                            <p className="contract-problem-description">
                                {contractProblemData[activeContractProblem].description}
                            </p>


                            <div className="contract-problem-points">

                                {contractProblemData[
                                    activeContractProblem
                                ].points.map((point, index) => (
                                    <div
                                        className="contract-problem-point"
                                        key={index}
                                    >
                                        <span>{point.icon}</span>

                                        <p>{point.text}</p>
                                    </div>
                                ))}

                            </div>


                            <div
                                className="contract-problem-image"
                                key={activeContractProblem}
                            >
                                <img
                                    src={
                                        contractProblemData[
                                            activeContractProblem
                                        ].image
                                    }
                                    alt={
                                        contractProblemData[
                                            activeContractProblem
                                        ].heading
                                    }
                                />
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= BENEFITS SECTION ================= */}
            <section className="contractworkers-benefits-section" id="benefits">
                <div className="container contractworkers-benefits-container">
                    <div className="contractworkers-benefits-heading">
                        <span>Benefits</span>
                        <h2>What Makes Rosteox Stand Out for Contract Workers?</h2>
                    </div>
                    <div className="contractworkers-benefits-grid">
                        {benefitsData.map((item, index) => (
                            <div
                                className={`contractworkers-benefit-card ${item.className}`}
                                key={index}
                            >
                                <div className="contractworkers-benefit-icon">
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
            <section className="contractworkers-features-section" id="features">
                <div className="container contractworkers-features-container">
                    {contractFeatures.map((feature, featureIndex) => (
                        <div
                            className={`contractworkers-feature-row ${featureIndex % 2 !== 0 ? "contractworkers-feature-reverse" : ""}`}
                            key={featureIndex}
                        >
                            {/* CONTENT */}
                            <div className="contractworkers-feature-content">
                                <span className="contractworkers-feature-tag">
                                    {feature.tag}
                                </span>
                                <h2>{feature.title}</h2>
                                <p className="contractworkers-feature-description">
                                    {feature.description}
                                </p>
                                <div className="contractworkers-faq-wrapper">
                                    <h4>Quick FAQs</h4>
                                    {feature.faqs.map((faq, faqIndex) => {
                                        const faqId = `${featureIndex}-${faqIndex}`;
                                        const isOpen = openFaq === faqId;
                                        return (
                                            <div className="contractworkers-faq-item" key={faqIndex}>
                                                <button
                                                    className="contractworkers-faq-question"
                                                    onClick={() => handleFaq(featureIndex, faqIndex)}
                                                >
                                                    <span>{faq.question}</span>
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </button>
                                                <div className={`contractworkers-faq-answer ${isOpen ? "show" : ""}`}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* IMAGE */}
                            <div className="contractworkers-feature-image">
                                <img src={feature.image} alt={feature.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Integrations />

            <AttendanceTools />


            < Advantage />


            <section className="contractworkers-solutions-section">
                <div className="container">
                    <div className="contractworkers-solutions-wrapper">
                        <div className="contractworkers-solutions-left">
                            <h2>
                                Explore Our Other <br />
                                Rosteox Workforce <br />
                                Solutions
                            </h2>
                        </div>
                        <div className="contractworkers-solutions-grid">
                            {solutionsData.map((item, index) => (
                                <div className="contractworkers-solutions-card" key={index}>
                                    <div className="contractworkers-solutions-icon">
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

export default ContractWorkersAttendance;