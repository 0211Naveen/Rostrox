import React from "react";
import "./TestimonialSection.css";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="container">

        <h2 className="testimonial-title">
          Hear From Industry Leaders
        </h2>

        <div className="testimonial-wrapper">

          <button className="arrow-btn left">
            <FaChevronLeft />
          </button>

          <div className="testimonial-cards">
            <p className="quote">
              ❝ Truein is robust, reliable, and works as promised.
              I have implemented Truein in my previous and current
              companies. It's the best and most cost-effective solution.
            </p>

            <div className="profile">
              <img
                src="https://i.pravatar.cc/60?img=12"
                alt=""
              />

              <div>
                <h5>Piyush Dutt</h5>
                <span>CPO, Compass Group</span>
              </div>
            </div>

            <div className="stats">
              <div>
                <h3>1200+</h3>
                <p>Sites</p>
              </div>

              <div>
                <h3>40,000+</h3>
                <p>Staff</p>
              </div>
            </div>
          </div>

          <div className="testimonial-cards">
            <p className="quote">
              ❝ Truein is a highly accurate, multipurpose,
              and user-friendly solution. It detects fake
              clock-ins and covers all the modules.
            </p>

            <div className="profile">
              <img
                src="https://i.pravatar.cc/60?img=15"
                alt=""
              />

              <div>
                <h5>Sujit Pawar</h5>
                <span>DGM, OCS Group</span>
              </div>
            </div>

            <div className="stats">
              <div>
                <h3>100+</h3>
                <p>Sites</p>
              </div>

              <div>
                <h3>4000+</h3>
                <p>Staff</p>
              </div>
            </div>
          </div>

          <button className="arrow-btn right">
            <FaChevronRight />
          </button>
        </div>

        <div className="review-logos">
          <div>
            <h3>Capterra</h3>
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>

          <div>
            <h3>Apple Store</h3>
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>

          <div>
            <h3>Google Play</h3>
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>

          <div>
            <h3>GetApp</h3>
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;