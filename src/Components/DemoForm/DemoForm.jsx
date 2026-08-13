import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DemoForm.css';
import TestimonialSection from './TestimonialSection';
import Advantage from "../Home/Advantage"
import LogoSlider from "./LogoSlider"

const DemoForm = () => {
    return (
        <div className="truein-landing">

            {/* Hero / Header Section */}
            <section className="Demo-section text-center text-md-start ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-4 mb-lg-0">
                            <h2 className="display-6 fw-bold mb-3 head-top">
                                Foolproof & Centralized <br />
                                <span className="text">Solution For Contract</span> <br />
                                And Multi-Sites Workforce
                            </h2>





                            <div className="attendance-features">
                                <div className="d-flex align-items-center mb-3">
                                    <span className="badge-icon text-primary me-2">✓</span>
                                    <span>Prevent Time Theft</span>
                                </div>

                                <div className="d-flex align-items-center mb-3">
                                    <span className="badge-icon text-primary   me-2">✓</span>
                                    <span>AI-Powered Face Recognition</span>
                                </div>

                                <div className="d-flex align-items-center">
                                    <span className="badge-icon text-primary   me-2">✓</span>
                                    <span>70+ Attendance Policies</span>
                                </div>
                            </div>



                            <div className="testimonial-card">
                                <div className="d-flex align-items-start gap-3">
                                    <div className="quote-icon">❝</div>
                                    <p className="testimonial-text text-dark mb-0">
                                        Truein is a highly accurate, multipurpose, and user-friendly solution.
                                        It detects fake clock-ins and covers all the modules.
                                    </p>
                                </div>

                                <div className="testimonial-user">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/32.jpg"
                                        alt="Sujit Pawar"
                                        className="user-img"
                                    />

                                    <div>
                                        <h6 className="mb-0 text-dark">Sujit Pawar</h6>
                                        <span className="user-company">OCS Group</span>
                                    </div>
                                </div>

                                <div className="testimonial-dots">
                                    <span></span>
                                    <span></span>
                                    <span className="active"></span>
                                </div>
                            </div>
                        </div>




                        <div className="col-lg-5">
                            {/* Demo booking card */}
                            <div className="card shadow-lg border-0 rounded-4 p-4">
                                <div className="card-body">
                                    {/* <div className="d-flex align-items-center mb-3">
                                        <div className="avatar-circle bg-primary text-white me-2">A</div>
                                        <span className="fw-semibold">Hi, I'm Aby.</span>
                                        <span className="ms-2 text-muted small">Book a demo to see Truein for your workforce</span>
                                    </div> */}

                                    <div className="d-flex flex-column align-items-center text-center mb-3">
                                        <div className="avatar-circle bg-primary text-white mb-2">
                                            A
                                        </div>

                                        <div>
                                            <span className="fw-semibold">Hi, I'm Aby.</span>
                                            <span className="ms-2 text-muted small">
                                                Book a demo to see Truein for your workforce
                                            </span>
                                        </div>
                                    </div>



                                    <form>
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <input type="text" className="form-control" placeholder="First name" />
                                            </div>
                                            <div className="col-6">
                                                <input type="text" className="form-control" placeholder="Last name" />
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <input type="text" className="form-control" placeholder="Company Name" />
                                        </div>
                                        <div className="mt-2">
                                            <select className="form-select">
                                                <option>Staff Size</option>
                                                <option>1-10</option>
                                                <option>11-50</option>
                                                <option>51-200</option>
                                                <option>200+</option>
                                            </select>
                                        </div>
                                        <div className="mt-2">
                                            <select className="form-select">
                                                <option>Industry</option>
                                                <option>Technology</option>
                                                <option>Manufacturing</option>
                                                <option>Healthcare</option>
                                                <option>Retail</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="mt-2">
                                            <input type="email" className="form-control" placeholder="Work Email" />
                                        </div>
                                        <div className="mt-2">
                                            <input type="tel" className="form-control" placeholder="Contact Number" />
                                        </div>


                                        {/* <div className="form-check mt-3">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="privacyCheck"
                                            />

                                            <label className="form-text" htmlFor="privacyCheck">
                                                By clicking on 'Schedule a Demo', you acknowledge having read our{" "}
                                                <a href="#">Privacy Policy</a>.
                                            </label>
                                        </div> */}

                                        <div className="form-check mt-3">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="privacyCheck"
                                            />

                                            <label className="form-text" htmlFor="privacyCheck">
                                                By clicking on 'Schedule a Demo', you acknowledge having read our{" "}
                                                <a href="#">Privacy Policy</a>.
                                            </label>
                                        </div>


                                        <div className='d-flex justify-content-center'>
                                            <button type="submit" className="btn btn-primary  mt-3 py-2 fw-bold">
                                                Schedule a Demo
                                            </button>
                                        </div>

                                    </form>
                                    <div className="mt-3 text-center">
                                        {/* <span className="badge bg-light text-dark px-3 py-2 border">
                                            🔥 45 Global companies booked a Truein demo last week
                                        </span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* < LogoSlider /> */}

            < TestimonialSection />
            < Advantage />


        </div>
    );
};

export default DemoForm;