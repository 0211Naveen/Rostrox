import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/Rostrox.png";
import { Link } from "react-router-dom";


import {
  FaChevronDown,
  FaChevronUp,
  FaBuilding,
  FaUsers,
  FaBroom,
  FaHardHat,
  FaStore,
  FaPeopleCarry,
  FaTruck,
  FaIndustry,
  FaLeaf,
  FaRegSmile,
  FaMobileAlt,
  FaUserTie,
  FaMapMarkerAlt,
  FaClock,
  FaHourglassHalf,
  FaChartBar,
  FaCalendarAlt,
  FaStopwatch,
  FaChartLine,
  FaCheckCircle,
  FaCloud,
  FaBriefcase,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const industryItems = [
  {
    icon: <FaBuilding />,
    title: "Facility Management",
    color: "#536dca",
    path: "/facility-management",

  },
  {
    icon: <FaHardHat />,
    title: "Construction",
    color: "#35a9db",
    path: "/construction",

  },
  {
    icon: <FaTruck />,
    title: "Supply Chain and Logistics",
    color: "#f3b53f",
    path: "/logistics-supply",

  },
  {
    icon: <FaUsers />,
    title: "Manpower and Staffing",
    color: "#8464eb",
    path: "/manpower-staffing",

  },
  {
    icon: <FaStore />,
    title: "Retail Chain",
    color: "#62cb64",
    path: "/retail",

  },
  {
    icon: <FaIndustry />,
    title: "Manufacturing",
    color: "#ff6b6b",
    path: "/manufacturing",

  },
  {
    icon: <FaBroom />,
    title: "Cleaning and Janitorial Services",
    color: "#ef62d1",
    path: "/cleaning-services",

  },
  {
    icon: <FaPeopleCarry />,
    title: "Other Contract and Multi-site Workforce",
    color: "#37bec6",
    path: "/multisite-workforce",

  },
  {
    icon: <FaLeaf />,
    title: "Landscaping",
    color: "#6dcc6d",
    path: "/landscaping",

  },
];

const solutionItems = [
  {
    icon: <FaRegSmile />,
    title: "Face Recognition Attendance",
    color: "#536dca",
    path: "/face-recognition-attendance",

  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Based Attendance",
    color: "#35a9db",
    path: "/mobile-attendance",

  },
  {
    icon: <FaUserTie />,
    title: "Contract Workers Attendance",
    color: "#f3b53f",
    path: "/contract-workers-attendance",

  },
  {
    icon: <FaMapMarkerAlt />,
    title: "GPS Geofenced Attendance",
    color: "#8464eb",
    path: "/geofencing-attendance",

  },
  {
    icon: <FaClock />,
    title: "Time and Attendance",
    color: "#62cb64",
    path: "/time-attendance-system",

  },
  {
    icon: <FaHourglassHalf />,
    title: "Time off Management",
    color: "#ff6b6b",
    path: "/leave-management-system",

  },
  {
    icon: <FaChartBar />,
    title: "Reports & Analytics",
    color: "#ed9347",
    path: "/report-analytics",

  },
  {
    icon: <FaCalendarAlt />,
    title: "Shift Scheduling",
    color: "#ef62d1",
    path: "/shift-scheduling",

  },
  {
    // icon: <FaStopwatch />,
        icon: <FaCheckCircle />,
    title: "Pay Roll",
    color: "#37bec6",
    path: "/payroll",

  },
  // {
  //   icon: <FaChartLine />,
  //   title: "Overtime Tracking Software",
  //   color: "#62cb64",
  //   path: "/overtime-tracking-management",

  // },
  // {
  //   icon: <FaCheckCircle />,
  //   title: "Enterprise Time and Attendance",
  //   color: "#35a9db",
  //   path: "/enterprise-attendance",

  // },
  // {
  //   icon: <FaUsers />,
  //   title: "Workforce Management",
  //   color: "#ef62d1",
  //   path: "/workforce-management",

  // },
  {
    icon: <FaCloud />,
    title: "Cloud based Time and Attendance",
    color: "#f3b53f",
    path: "/cloudbased-time-attendance",

  },
  // {
  //   icon: <FaBriefcase />,
  //   title: "Job based Time Tracking",
  //   color: "#536dca",
  //   path: "/jobtime-tracking-software",

  // },
];


const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const openDropdown = (menu) => {
    if (window.innerWidth > 991) {
      setActiveDropdown(menu);
    }
  };

  const closeDropdown = () => {
    if (window.innerWidth > 991) {
      setActiveDropdown(null);
    }
  };

  const handleMobileDropdown = (menu) => {
    if (window.innerWidth <= 991) {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setActiveDropdown(null);
  };


  const navigate = useNavigate();


  return (
    <nav
      className="navbar top-navbar"
      onMouseLeave={closeDropdown}
    >
      <div className="nav-container">
        {/* LOGO */}

        <a className="navbar-brand brand-logo" href="/">
          <img src={logo} alt="Logo" className="brand-image" />
        </a>

        {/* MOBILE BUTTON */}

        <button
          className="mobile-menu-btn"
          onClick={() => {
            setMobileMenu(!mobileMenu);
            setActiveDropdown(null);
          }}
          aria-label="Toggle navigation"
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>

        {/* NAV CONTENT */}

        <div className={`nav-content ${mobileMenu ? "show" : ""}`}>
          <ul className="nav-main-menu">
            {/* INDUSTRY */}

            <li
              className={`nav-dropdown-item ${activeDropdown === "industry" ? "active" : ""
                }`}
              onMouseEnter={() => openDropdown("industry")}
            >
              <button
                className="nav-menu-link"
                onClick={() => handleMobileDropdown("industry")}
              >
                Industry

                <span className="nav-arrow">
                  {activeDropdown === "industry" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              </button>

              {/* MOBILE INDUSTRY */}

              <div
                className={`mobile-dropdown ${activeDropdown === "industry" ? "show" : ""
                  }`}
              >
                {industryItems.map((item, index) => (
                  // <a href="#" className="mobile-mega-item" key={index}>
                  <div className="mobile-mega-item"
                    key={index}
                    onClick={() => {
                      navigate(item.path);
                      closeMobileMenu();
                    }}
                  >
                    <span
                      className="mega-icon"
                      style={{ color: item.color }}
                    >
                      {item.icon}
                    </span>

                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </li>

            {/* SOLUTIONS */}

            <li
              className={`nav-dropdown-item ${activeDropdown === "solutions" ? "active" : ""
                }`}
              onMouseEnter={() => openDropdown("solutions")}
            >
              <button
                className="nav-menu-link"
                onClick={() => handleMobileDropdown("solutions")}
              >
                Solutions

                <span className="nav-arrow">
                  {activeDropdown === "solutions" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              </button>

              {/* MOBILE SOLUTIONS */}

              <div
                className={`mobile-dropdown ${activeDropdown === "solutions" ? "show" : ""
                  }`}
              >
                {solutionItems.map((item, index) => (
                  // <a href="#" className="mobile-mega-item" key={index}>
                  <div
                    className="mobile-mega-item"
                    key={index}
                    onClick={() => {
                      navigate(item.path);
                      closeMobileMenu();
                    }}
                  >
                    <span
                      className="mega-icon"
                      style={{ color: item.color }}
                    >
                      {item.icon}
                    </span>

                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </li>

            <li>
              <a href="/testimonials" className="nav-normal-link">
                Customer Stories
              </a>
            </li>
          </ul>

          <ul className="nav-right-menu">
            <li>
              <a href="/pricing" className="nav-normal-link">
                Pricing
              </a>
            </li>

            <li>
              <a href="/login" className="nav-normal-link">
                Log in
              </a>
            </li>

            <li>
              
              <button
                className="demo-btn"
                onClick={() => navigate("/demo")}
              >
                Schedule A Demo
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* DESKTOP MEGA DROPDOWN */}

      <div
        className={`mega-dropdown ${activeDropdown ? "show" : ""
          }`}
      >
        <div className="mega-container">
          <div className="mega-grid">
            {(activeDropdown === "industry"
              ? industryItems
              : solutionItems
            ).map((item, index) => (
              // <a href="#" className="mega-item" key={index}>
              //   <span
              //     className="mega-icon"
              //     style={{ color: item.color }}
              //   >
              //     {item.icon}
              //   </span>

              //   <span className="mega-title">
              //     {item.title}
              //   </span>
              // </a>
              <div
                className="mega-item"
                key={index}
                onClick={() => {
                  navigate(item.path);
                  setActiveDropdown(null);
                }}
              >
                <span
                  className="mega-icon"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </span>

                <span className="mega-title">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Nav;