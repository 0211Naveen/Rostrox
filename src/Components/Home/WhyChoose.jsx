import React from "react";
import "./WhyChoose.css";

import img1 from "../../assets/Home/home1.webp";
import img2 from "../../assets/Home/home2.webp";
import img3 from "../../assets/Home/home3.webp";
import img4 from "../../assets/Home/home4.webp";
import img5 from "../../assets/Home/home5.webp";

const data = [
  {
    title: "Prevent Cost Leaks",
    desc: "Avoid irregularities like Buddy punching, wrong clock-ins, calculation errors, reconciliation issues, and more to stop draining your profit.",
    image: img1,
  },
  {
    title: "Save HR Hours",
    desc: "Boost HR efficiency with 70+ customizable policies that automate processes and enhance workforce productivity. Reduce late arrivals and minimize unplanned absenteeism.",
    image: img2,
  },
  {
    title: "Optimize Workforce Utilization",
    desc: "Automate shift scheduling, manage weekly off rotations, job mapping, and use analytics to make more informed business decisions.",
    image: img3,
  },
  {
    title: "Simplify Scheduling",
    desc: "Effortlessly assign shifts and manage job schedules across locations and teams, eliminating conflicts and last-minute adjustments.",
    image: img4,
  },
  {
    title: "Ensure Compliance",
    desc: "Customize policies for attendance, breaks, overtime, shifts, and other regulations to align with local laws and company rules, minimizing risks and ensuring smooth operations.",
    image: img5,
  },
];

export default function WhyChoose() {
  return (
    <section className="why-section">
      <div className="container">

        <h2 className="why-title">
          Why Choose Rostrox for Time <br />and Attendance Tracking?
        </h2>

        {data.map((item, index) => (
          <div
            className={`row align-items-center why-row ${
              index % 2 !== 0 ? "flex-lg-row-reverse" : ""
            }`}
            key={index}
          >
            <div className="col-lg-6 text-center">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid why-image"
              />
            </div>

            <div className="col-lg-6">
              <div className="why-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}