import { useState } from "react";
import {
  FaUsers,
  FaRegSmile,
  FaCheckCircle,
  FaIdCard,
  FaClipboardList,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

import workerImg from "../../assets/Advantage.webp";

import "./Advantage.css"
const accordionData = [
  {
    icon: <FaUsers />,
    title: "Purpose-Built For Contract & Multi-Site Workforce",
    content:
      "Manage multiple sites, contractors, and employee attendance from a centralized dashboard with complete visibility.",
  },
  {
    icon: <FaRegSmile />,
    title: "AI-Powered Face Recognition Clock-Ins",
    content:
      "Accurate AI face recognition eliminates buddy punching and ensures secure attendance tracking.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Anywhere & Instant Setup",
    content:
      "Deploy within minutes on mobile, tablet, or kiosk without complex hardware installation.",
  },
  {
    icon: <FaIdCard />,
    title: "Centralized And Foolproof",
    content:
      "Monitor attendance, reports, shifts, overtime, and leave from one unified dashboard.",
  },
  {
    icon: <FaClipboardList />,
    title: "Extensive Policy Framework",
    content:
      "Configure attendance, overtime, shift, leave, grace period, and payroll rules easily.",
  },
];

export default function Advantage() {
  const [open, setOpen] = useState(0);

  return (
    <section className="advantage-section">

      <div className="container">

        <div className="text-center">

          <h2 className="advantage-title">
            Discover the Rostrox Advantage
          </h2>

          <p className="advantage-subtitle">
            Prevent time theft, save HR hours, and optimize workforce utilization
            with an AI-powered face recognition attendance system.
          </p>

        </div>

        <div className="row align-items-center mt-5 advantage-cnt">

          <div className="col-lg-5 text-center">
            <img
              src={workerImg}
              alt=""
              className="img-fluid advantage-image"
            />
          </div>

          <div className="col-lg-7">

            {accordionData.map((item, index) => (

              <div className="adv-item" key={index}>

                <button
                  className="adv-header"
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                >

                  <div className="left">

                    <span className="adv-icon">
                      {item.icon}
                    </span>

                    <span>{item.title}</span>

                  </div>

                  <span className="plus-icon">
                    {open === index ? <FaMinus /> : <FaPlus />}
                  </span>

                </button>

                <div
                  className={`adv-content ${
                    open === index ? "show" : ""
                  }`}
                >

                  <p>{item.content}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}