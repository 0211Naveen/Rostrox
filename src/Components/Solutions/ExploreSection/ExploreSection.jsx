import React from "react";
import "./ExploreSection.css";
import { useNavigate } from "react-router-dom";

import exploreImage from "../../../assets/ExploreSection.webp";

export default function ExploreSection() {


    const navigate = useNavigate();


    return (
        <section className="explore-section">
            <div className="container explore-container">

                <div className="explore-box">
                    <div className="row align-items-center">

                        {/* LEFT CONTENT */}

                        <div className="col-lg-6">
                            <div className="explore-content">
                                <h2>
                                    Bring transparency and Control.
                                    <br />

                                    Explore Rosteox for
                                    <br />

                                    your organization
                                </h2>

                                {/* <button className="explore-demo-btn">
                                    Schedule a Demo
                                </button> */}

                                <button
                                    className="explore-demo-btn"
                                    onClick={() => navigate("/demo")}
                                >
                                    Schedule a Demo
                                </button>
                            </div>
                        </div>


                        {/* RIGHT IMAGE */}

                        <div className="col-lg-6">
                            <div className="explore-image">
                                <img
                                    src={exploreImage}
                                    alt="Attendance Management Software"
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}