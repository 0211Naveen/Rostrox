// import React from "react";
// import "./Login.css";

// import logo from "../../assets/Rostrox.png";

// import { FcGoogle } from "react-icons/fc";
// import { FaMicrosoft } from "react-icons/fa";
// import { FaCheckCircle } from "react-icons/fa";

// export default function Login() {
//   return (
//     <div className="login-page">

//       <div className="container">

//         <div className="row align-items-center justify-content-center">

        

//             <div className="login-card">


//               <h2>Log in to Rostrox Dashboard</h2>

            
//               <input
//                 type="email"
//                 placeholder="Enter Email or Mobile"
//                 className="form-control login-input"
//               />

//               <button className="login-btn">
//                 Continue
//               </button>

//               <div className="divider">
//                 <span>OR</span>
//               </div>

//               <div className="social-buttons">

//                 <button className="google-btn">
//                   <FcGoogle />
               
//                 </button>

//                 <button className="microsoft-btn">
//                   <FaMicrosoft />
                
//                 </button>

//               </div>

//               <a href="/" className="forgot-link">
//                 Forgot Password?
//               </a>

//             </div>

//             <div className="login-footer">
//               <p>
//                 By logging in you agree to the
//                 <strong> Privacy Policy </strong>
//                 and
//                 <strong> Terms of Service</strong>.
//               </p>

//               <span>© 2026 Rostrox. All rights reserved.</span>
//             </div>

          

//         </div>

//       </div>

//     </div>
//   );
// }





import React from "react";
import "./Login.css";
import logo from "../../assets/Rostrox.png";

import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";

export default function Login() {
  return (
    <div className="login-page">

      {/* Logo */}
      <img src={logo} alt="Rostrox" className="login-logo-top" />

      {/* Card */}
      <div className="login-card">

        <h2>Log in to Rostrox</h2>

        <input
          type="text"
          placeholder="Enter Email or Mobile"
          className="form-control login-input"
        />

        <button className="login-btn">
          Continue
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="social-buttons">
          <button className="google-btn">
            <FcGoogle />
          </button>

          <button className="microsoft-btn">
            <FaMicrosoft />
          </button>
        </div>

        <a href="/" className="forgot-link">
          Forgot Password?
        </a>

      </div>

      {/* Footer */}
      <div className="login-footer">
        <p>
          By logging in you agree to the
          <strong> Privacy Policy </strong>
          and
          <strong> Terms of Service</strong>.
        </p>

        <span>© 2026 Rostrox. All rights reserved.</span>
      </div>

    </div>
  );
}