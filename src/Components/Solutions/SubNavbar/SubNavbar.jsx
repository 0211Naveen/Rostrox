// import React, { useState } from 'react';
// import "./SubNavbar.css"



// const tabs = [
//     "Overview",
//     "Benefits",
//     "Features",
//     "Integration",
// ];


// const SubNavbar = () => {


//       const [activeTab, setActiveTab] = useState("Overview");
    
//         const handleTabClick = (tab) => {
//             setActiveTab(tab);
    
//             const sectionId = tab.toLowerCase();
    
//             const section = document.getElementById(sectionId);
    
//             if (section) {
//                 section.scrollIntoView({
//                     behavior: "smooth",
//                     block: "start",
//                 });
//             }
//         };
    


//   return (
//     <div>
      
//             <div className="attendance-tab-sticky">
//                 <div className="attendance-tab-wrapper">
//                     <div className="attendance-tab-navbar">
//                         {tabs.map((tab) => (
//                             <button
//                                 key={tab}
//                                 className={`attendance-tab-btn ${activeTab === tab ? "active" : ""
//                                     }`}
//                                 onClick={() => handleTabClick(tab)}
//                             >
//                                 {tab}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             </div>
            
//     </div>
//   )
// }

// export default SubNavbar



import React, { useState } from 'react';
import "./SubNavbar.css";

const tabs = [
    "Overview",
    "Benefits",
    "Features",
    "Integration",
];

const SubNavbar = () => {
    const [activeTab, setActiveTab] = useState("Overview");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        const sectionId = tab.toLowerCase();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="attendance-tab-sticky">
            <div className="attendance-tab-wrapper">
                <div className="attendance-tab-navbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`attendance-tab-btn ${activeTab === tab ? "active" : ""}`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubNavbar;