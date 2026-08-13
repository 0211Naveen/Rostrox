import React, { useState } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

import { FaChevronDown } from "react-icons/fa";
import contactImg from "../../assets/facitily.jpg";
const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        staffSize: "",
        industry: "",
        email: "",
        phone: "",
        agree: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

    };


    const navigate = useNavigate();


    return (
        <section className="contact-section">
            <div className="container">

                <div className="row align-items-center gy-5">

                    {/* LEFT */}

                    <div className="col-lg-6">

                        <div className="contact-form-wrapper">

                            <h2 className="contact-title">
                                Get in touch
                            </h2>

                            <form onSubmit={handleSubmit}>

                                <div className="row">

                                    <div className="col-md-6 mb-4">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First name"
                                            className="form-control contact-input"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last name"
                                            className="form-control contact-input"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder="Company Name"
                                            className="form-control contact-input"
                                            value={formData.company}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6 mb-4">

                                        <div className="select-box">

                                            <select
                                                className="form-select contact-input"
                                                name="staffSize"
                                                value={formData.staffSize}
                                                onChange={handleChange}
                                            >
                                                <option value="">Staff Size</option>
                                                <option>1 - 10</option>
                                                <option>11 - 50</option>
                                                <option>51 - 100</option>
                                                <option>101 - 500</option>
                                                <option>500+</option>
                                            </select>


                                        </div>

                                    </div>

                                    <div className="col-12 mb-4">

                                        <div className="select-box">

                                            <select
                                                className="form-select contact-input"
                                                name="industry"
                                                value={formData.industry}
                                                onChange={handleChange}
                                            >
                                                <option value="">Industry</option>

                                                <option>Construction</option>
                                                <option>Manufacturing</option>
                                                <option>Healthcare</option>
                                                <option>Retail</option>
                                                <option>Facility Management</option>
                                                <option>Logistics</option>
                                                <option>Hospitality</option>

                                            </select>


                                        </div>

                                    </div>

                                    <div className="col-12 mb-4">

                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Work Email"
                                            className="form-control contact-input"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="col-12 mb-4">

                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Contact Number"
                                            className="form-control contact-input"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />

                                    </div>

                                </div>

                                <div className="form-check contact-check mb-4">

                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="agree"
                                        name="agree"
                                        checked={formData.agree}
                                        onChange={handleChange}
                                    />

                                    <label
                                        className="form-check-label"
                                        htmlFor="agree"
                                    >
                                        By clicking on
                                        <strong> "Schedule a Demo"</strong>,
                                        you acknowledge having read our{" "}
                                        <a href="/">Privacy Policy</a>.
                                    </label>

                                </div>

                                <button
                                    type="button"
                                    className="btn contact-btn"
                                    onClick={() => navigate("/demo")}
                                >
                                    Schedule a Demo
                                </button>

                            </form>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="col-lg-6">

                        <div className="contact-image">

                            <img
                                src={contactImg}
                                alt="Contact"
                                className="img-fluid"
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;