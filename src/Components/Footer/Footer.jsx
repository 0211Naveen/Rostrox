import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/footer.webp";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {

  const navigate = useNavigate();

  return (
    <footer className="footer-section">
      <div className="container-fluid footer-container">

        <div className="row gy-5">

          {/* Logo */}
          <div className="col-lg-3 col-md-6">
            <div
              className="footer-logo"
              onClick={() => navigate("/")}
            >
              <img src={logo} alt="Rostrox" />
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6">
            <ul className="footer-links">
              {/* <li onClick={() => navigate("/blog")}>Blog</li> */}
              <li onClick={() => navigate("/integrations")}>Integrations</li>
              <li onClick={() => navigate("/technology")}>Technology</li>
              <li onClick={() => navigate("/careers")}>Careers</li>
              <li onClick={() => navigate("/ebook")}>Ebook</li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-lg-3 col-md-6">
            <ul className="footer-links">
              <li onClick={() => navigate("/")}>
                Rostrox AI
              </li>

              <li onClick={() => navigate("/time-attendance-system")}>
                Time off Management
              </li>

              <li onClick={() => navigate("/biometric-vs-app-attendance")}>
                Biometric vs App Attendance
              </li>

              <li onClick={() => navigate("/shift-scheduling-construction")}>
                Shift Scheduling for Construction
              </li>

              <li onClick={() => navigate("/restaurant-employee-scheduling")}>
                Restaurant Employee Scheduling
              </li>

              <li onClick={() => navigate("/time-clock-small-business")}>
                Time Clock App for Small Business
              </li>

              <li onClick={() => navigate("/time-attendance-middle-east")}>
                Time and Attendance for Middle East
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="col-lg-2 col-md-6">
            <ul className="footer-links">
              <li onClick={() => navigate("/about-us")}>
                About Us
              </li>

              <li onClick={() => navigate("/contact")}>
                Contact Us
              </li>

              <li onClick={() => navigate("/privacy-policy")}>
                Privacy Policy
              </li>

              <li onClick={() => navigate("/terms&conditions")}>
                Terms of Service
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-lg-2 col-md-12">
            <div className="footer-social">
              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaXTwitter />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>

        <hr />

        <p className="footer-copy">
          Rostrox | All rights reserved © 2026
        </p>

      </div>
    </footer>
  );
}