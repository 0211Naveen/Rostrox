import React from "react";
import "./About.css";

import heroImg from "../../assets/facitily.jpg";
import storyImg from "../../assets/facitily.jpg";

import founder1 from "../../assets/facitily.jpg";
import founder2 from "../../assets/facitily.jpg";


import {
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt
} from "react-icons/fa";



const AboutHero = () => {
    return (

        <>
            <section
                className="about-hero"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="about-overlay"></div>

                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center text-center">
                        <div className="col-lg-10">

                            <span className="about-tag">
                                ABOUT ROSTROX
                            </span>

                            <h1 className="about-title">
                                Helping businesses bring transparency and control in
                                <span> Attendance & Timesheets </span>
                                process to improve workforce utilization and plug cost
                                leakages.
                            </h1>

                            <p className="about-subtitle">
                                Designed in-depth for Contract & Distributed staff use cases.
                            </p>

                        </div>
                    </div>
                </div>
            </section>


            {/* ================= OUR STORY ================= */}

            <section className="our-story-section">

                <div className="container">

                    <div className="text-center mb-5">
                        <p className="story-title">Our Story</p>
                    </div>

                    {/* Story 1 */}

                    <div className="row align-items-center gy-5 mb-5">

                        <div className="col-lg-6">
                            <div className="story-img">
                                <img
                                    src={storyImg}
                                    alt="Our Story"
                                    className="img-fluid rounded-4"
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">

                            <div className="story-content">

                                <h3>The Start of Things</h3>

                                <p>
                                    Founder Ankit Tanna started Rostrox to solve the challenges of
                                    attendance and workforce management for contract and distributed
                                    employees.
                                </p>

                                <p>
                                    During discussions with HR managers and business owners, he
                                    identified problems like manual attendance, buddy punching,
                                    inaccurate payroll and lack of centralized visibility.
                                </p>

                                <p>
                                    Existing attendance systems were difficult to manage across
                                    multiple worksites and required significant manual effort.
                                </p>

                                <p>
                                    These operational problems reduced productivity and caused
                                    unnecessary cost leakages for organizations.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Story 2 */}

                    <div className="row align-items-center gy-5 flex-lg-row-reverse">

                        <div className="col-lg-6">

                            <div className="story-img">

                                <img
                                    src={storyImg}
                                    alt="Journey"
                                    className="img-fluid rounded-4"
                                />

                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="story-content">

                                <h3>Journey To A Solution</h3>

                                <p>
                                    Rostrox was built as an intelligent workforce management platform
                                    that combines Face Recognition, GPS, Geofencing, Offline
                                    Attendance and AI-powered automation.
                                </p>

                                <p>
                                    Today businesses use Rostrox to eliminate attendance fraud,
                                    improve payroll accuracy, optimize workforce utilization and
                                    manage distributed teams from one centralized platform.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= FOUNDERS ================= */}

            <section className="founders-section">

                <div className="container">

                    <div className="text-center mb-5">
                        <span className="section-subtitle">OUR LEADERSHIP</span>
                        <h2 className="section-title">Meet Our Founders</h2>
                        <p className="section-desc">
                            Passionate leaders building the future of workforce management.
                        </p>
                    </div>

                    <div className="row justify-content-center g-4">

                        <div className="col-lg-5 col-md-6">

                            <div className="founder-card">

                                <div className="founder-image">

                                    <img
                                        src={founder1}
                                        alt="Founder"
                                        className="img-fluid"
                                    />

                                </div>

                                <div className="founder-content">

                                    <h4>Ankit Tanna</h4>

                                    <span>Founder & CEO</span>

                                    <p>
                                        Building Rostrox with a vision to simplify workforce attendance,
                                        payroll and productivity for modern businesses.
                                    </p>

                                    <a href="#">
                                        <FaLinkedinIn />
                                    </a>

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-5 col-md-6">

                            <div className="founder-card">

                                <div className="founder-image">

                                    <img
                                        src={founder2}
                                        alt="Founder"
                                        className="img-fluid"
                                    />

                                </div>

                                <div className="founder-content">

                                    <h4>Co-Founder</h4>

                                    <span>Technology & Product</span>

                                    <p>
                                        Driving innovation with AI-powered attendance, automation and
                                        intelligent workforce solutions.
                                    </p>

                                    <a href="#">
                                        <FaLinkedinIn />
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= OFFICES ================= */}

            <section className="office-section">

                <div className="container">

                    <div className="text-center mb-5">
                        <span className="section-subtitle">OUR OFFICES</span>
                        <h2 className="section-title">Where We Work</h2>
                        <p className="section-desc">
                            Our teams collaborate from multiple locations to support customers worldwide.
                        </p>
                    </div>

                    <div className="row g-4">

                        <div className="col-lg-6 col-md-6">

                            <div className="office-card">

                                <h4>India HQ</h4>

                                <p>
                                    <FaMapMarkerAlt />
                                    Chennai, Tamil Nadu
                                </p>

                                <p>
                                    <FaEnvelope />
                                    contact@rostrox.com
                                </p>

                                <p>
                                    <FaPhoneAlt />
                                    +91 98765 43210
                                </p>

                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6">

                            <div className="office-card">

                                <h4>Dubai</h4>

                                <p>
                                    <FaMapMarkerAlt />
                                    Dubai, UAE
                                </p>

                                <p>
                                    <FaEnvelope />
                                    uae@rostrox.com
                                </p>

                                <p>
                                    <FaPhoneAlt />
                                    +971 55 123 4567
                                </p>

                            </div>

                        </div>

                       
                    </div>

                </div>

            </section>



        </>
    );
};

export default AboutHero;