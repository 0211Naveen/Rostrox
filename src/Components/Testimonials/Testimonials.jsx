import React from "react";
import "./Testimonials.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Operations Manager",
    company: "Tech Solutions Pvt Ltd",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Rostrox has completely simplified our workforce management. Attendance tracking is now faster, accurate, and much easier for our entire team.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "HR Manager",
    company: "Global Enterprises",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "The platform is simple to use and extremely reliable. Managing employees across multiple locations has become effortless for our HR team.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Business Head",
    company: "BuildPro Industries",
    image: "https://i.pravatar.cc/150?img=33",
    review:
      "A great solution for modern businesses. The real-time insights and attendance features have helped us save time and improve productivity.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">

        {/* Section Heading */}
        <div className="testimonial-heading text-center">
          <span className="testimonial-tag">
            CUSTOMER STORIES
          </span>

          <h2>
            Trusted by businesses,
            <span> loved by teams.</span>
          </h2>

          <p>
            See how businesses are simplifying workforce management
            and improving productivity with Rostrox.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="row g-4 justify-content-center">

          {testimonialsData.map((item) => (
            <div
              className="col-lg-4 col-md-6 col-12"
              key={item.id}
            >
              <div className="testimonial-card">

                <div className="testimonial-top">
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>

                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                </div>

                <p className="testimonial-review">
                  "{item.review}"
                </p>

                <div className="testimonial-user">
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="testimonial-user-info">
                    <h5>{item.name}</h5>
                    <p>{item.role}</p>
                    <span>{item.company}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;