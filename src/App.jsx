import { Routes, Route, useLocation } from "react-router-dom";


import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import DemoForm from "./Components/DemoForm/DemoForm";
import FacilityPage from "./Components/Industry/FacilityPage/FacilityPage";
import Construction from "./Components/Industry/ConstructionPage/Construction";
import LogisticsSupplyChain from "./Components/Industry/LogisticsSupplyChainPage/LogisticsSupplyChain";
import Retail from "./Components/Industry/Retail/Retail";
import Manufacturing from "./Components/Industry/Manufacturing/Manufacturing";
import CleaningServices from "./Components/Industry/CleaningServices/CleaningServices";
import MultiSiteWorkforce from "./Components/Industry/MultiSiteWorkforce/MultiSiteWorkforce";
import Landscaping from "./Components/Industry/Landscaping/Landscaping";
import FaceRecognitionAttendance from "./Components/Solutions/FaceRecognitionAttendance/FaceRecognitionAttendance";
import MobileAttendance from "./Components/Solutions/MobileAttendance/MobileAttendance";
import ContractWorkersAttendance from "./Components/Solutions/ContractWorkersAttendance/ContractWorkersAttendance";
import ManpowerStaffing from "./Components/Industry/ManpowerStaffing/ManpowerStaffing";
import GeofencingAttendance from "./Components/Solutions/GeofencingAttendance/GeofencingAttendance"
import TimeAttendanceSystem from "./Components/Solutions/TimeAttendanceSystem/TimeAttendanceSystem";
import LeaveManagementSystem from "./Components/Solutions/LeaveManagementSystem/LeaveManagementSystem";
import ReportAnalytics from "./Components/Solutions/ReportAnalytics/ReportAnalytics";
import StaffShiftScheduling from "./Components/Solutions/StaffShiftScheduling/StaffShiftScheduling";
import PayRoll from "./Components/Solutions/Payroll/Payroll";
import OvertimeTrackingManagement from "./Components/Solutions/OvertimeTrackingManagement/OvertimeTrackingManagement";
import EnterpriseAttendance from "./Components/Solutions/EnterpriseAttendance/EnterpriseAttendance";
import WorkforceManagement from "./Components/Solutions/WorkforceManagement/WorkforceManagement";
import Login from "./Components/Login/Login";
import Pricing from "./Components/Pricing/Pricing";
import CloudBasedTimeAttendance from "./Components/Solutions/CloudBasedTimeAttendance/CloudBasedTimeAttendance";
import JobTimeTrackingSoftware from "./Components/Solutions/JobTimeTrackingSoftware/JobTimeTrackingSoftware";
import Testimonials from "./Components/Testimonials/Testimonials"

import BackToTop from "./Components/Backtotop/Backtotop"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import TermsAndConditions from "./Components/TermsAndConditions/TermsAndConditions"
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy"


function App() {
  const location = useLocation();

  // Pages without Navbar & Footer
  const hideLayout = location.pathname === "/login";

  return (
    <>
      {!hideLayout && <Navbar />}


        <ScrollToTop />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/demo" element={<DemoForm />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />


  



        <Route path="/facility-management" element={<FacilityPage />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/logistics-supply" element={<LogisticsSupplyChain />} />
        <Route path="/manpower-staffing" element={<ManpowerStaffing />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/cleaning-services" element={<CleaningServices />} />
        <Route path="/multisite-workforce" element={<MultiSiteWorkforce />} />
        <Route path="/landscaping" element={<Landscaping />} />

        <Route path="/face-recognition-attendance" element={<FaceRecognitionAttendance />} />
        <Route path="/mobile-attendance" element={<MobileAttendance />} />
        <Route path="/contract-workers-attendance" element={<ContractWorkersAttendance />} />
        <Route path="/geofencing-attendance" element={<GeofencingAttendance />} />
        <Route path="/time-attendance-system" element={<TimeAttendanceSystem />} />
        <Route path="/leave-management-system" element={<LeaveManagementSystem />} />
        <Route path="/report-analytics" element={<ReportAnalytics />} />
        <Route path="/shift-scheduling" element={<StaffShiftScheduling />} />
        <Route path="/payroll" element={<PayRoll />} />
        <Route path="/overtime-tracking-management" element={<OvertimeTrackingManagement />} />
        <Route path="/enterprise-attendance" element={<EnterpriseAttendance />} />
        <Route path="/workforce-management" element={<WorkforceManagement />} />
        <Route path="/cloudbased-time-attendance" element={<CloudBasedTimeAttendance />} />
        <Route path="/jobtime-tracking-software" element={<JobTimeTrackingSoftware />} />


      </Routes>
      <BackToTop />


      {!hideLayout && <Footer />}
    </>
  );
}

export default App;