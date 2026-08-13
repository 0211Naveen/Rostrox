import React, { useState, } from 'react';
import "../Integrations/Integrations.css"




// const integrationData = [
//     {
//         number: "01",
//         tabTitle: "Upload Records",
//         title: "Upload Records",
//         description:
//             "The HR manager can upload organization-wide staff data in bulk using spreadsheets.",
//         image: uploadImg,
//     },
//     {
//         number: "02",
//         tabTitle: "Register Face",
//         title: "Register Face",
//         description:
//             "Capture employee faces via mobile or kiosk for fast, touchless enrollment.",
//         image: registerImg,
//     },
//     {
//         number: "03",
//         tabTitle: "Take Attendance",
//         title: "Start Attendance",
//         description:
//             "Begin accurate, real-time attendance tracking instantly across locations with the mobile attendance system.",
//         image: attendanceImg,
//     },
// ];


const integrationData = [
  {
    number: "01",
    tabTitle: "Face Detection",
    title: "Face Recognition Attendance",
    description:
      "Employees can mark their attendance instantly using AI-powered face recognition, ensuring fast, secure, and contactless attendance without manual entries.",
    image: uploadImg,
  },
  {
    number: "02",
    tabTitle: "Auto Check-In & Out",
    title: "Automatic Check-In & Check-Out",
    description:
      "Automatically record employee check-in and check-out times using face recognition, reducing manual errors and maintaining accurate working-hour records.",
    image: registerImg,
  },
  {
    number: "03",
    tabTitle: "Location Tracking",
    title: "Location-Based Attendance",
    description:
      "Verify employee attendance with real-time location tracking and GPS geofencing, ensuring staff can check in only from approved work locations.",
    image: attendanceImg,
  },
];



import uploadImg from "../../../assets/Face-reconization/15.webp";
import registerImg from "../../../assets/Face-reconization/14.webp";
import attendanceImg from "../../../assets/Face-reconization/16.webp";


const Integrations = () => {


    const [activeIntegration, setActiveIntegration] = useState(0);



    return (
        <div>



            {/* ================= INTEGRATION SECTION ================= */}

            <section
                className="facerecognition-integration-section"
                id="integration"
            >
                <div className="container facerecognition-integration-container">

                    <div className="facerecognition-integration-heading">
                        <h2>
                            <span>Benefits</span>

                            Simplify Onboarding in 3 Steps
                            <span className="integration-arrow">▼</span>
                        </h2>
                    </div>

                    {/* TABS */}

                    <div className="facerecognition-integration-tabs">
                        {integrationData.map((item, index) => (
                            <button
                                key={index}
                                className={`facerecognition-integration-tab ${activeIntegration === index ? "active" : ""
                                    }`}
                                onClick={() => setActiveIntegration(index)}
                            >
                                <span className="integration-number">
                                    {item.number}
                                </span>

                                <span className="integration-tab-title">
                                    {item.tabTitle}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* CONTENT */}

                    <div className="row align-items-center facerecognition-integration-content">

                        <div className="col-lg-6">
                            <div className="facerecognition-integration-text">

                                <h3>
                                    {integrationData[activeIntegration].title}
                                </h3>

                                <p>
                                    {integrationData[activeIntegration].description}
                                </p>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="facerecognition-integration-image">

                                <img
                                    src={integrationData[activeIntegration].image}
                                    alt={integrationData[activeIntegration].title}
                                />

                            </div>
                        </div>

                    </div>

                </div>
            </section>


        </div>
    )
}

export default Integrations
