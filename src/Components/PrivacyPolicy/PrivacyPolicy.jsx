import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-wrapper">
        {/* Header Section */}
        <div className="privacy-header">
          <h1 className="privacy-title">
            Privacy Policy & Data Protection
            {/* <span className="privacy-dot"></span> */}
          </h1>
        
        </div>

       
        {/* Introduction */}
        <div className="privacy-section">
          <p className="privacy-text">
            At <strong>Rosteox</strong> (including its subsidiaries or affiliated companies, henceforth 
            also referred as <strong>'Rosteox'</strong>, <strong>'we'</strong> or the 
            <strong>'Company'</strong>), we understand that you are trusting us with confidential 
            information and we believe that you have a right to know our practices regarding the 
            information we may collect and use when you use our service or interact with us in any 
            manner.
          </p>
        </div>

       

        {/* Company Overview */}
        <div className="privacy-section">
          <p className="privacy-text">
            Rosteox is a cloud-based SaaS platform that enables organizations to manage 
            <strong> Time & Attendance</strong> and other related services. Rosteox Mobile Apps are 
            also part of the same offering. In addition Rosteox also operates the 
            <strong> Rosteox.com</strong> website.
          </p>
          <div className="privacy-highlight-box">
            <p>
              <strong>📌 Account Owner Responsibility:</strong> The account owner is the Rosteox 
              account's Administrator for their company's account. The account owner has full right 
              over the company account data, and can create other company's users and grant them 
              data access permissions. Account owner is responsible for all the data entered, 
              employee's images, demographic data and any other data related to the company 
              employees and users.
            </p>
          </div>
        </div>

        {/* Scope Section */}
        <div className="privacy-section">
          <h2 className="section-heading">Scope of this Policy</h2>
          <p className="privacy-text">
            This Privacy Policy describes the policies and procedures of Rosteox on the collection, 
            use, access, correction, and disclosure of your personal information on 
            <strong> Rosteox.com</strong> (the <strong>"Site"</strong>), our Mobile Apps and 
            Admin Web Dashboard.
          </p>
          <div className="privacy-highlight-box" style={{ background: '#fff8e1' }}>
            <p>
              <strong>📋 Data Controller:</strong> For the purposes of GDPR or European Economic 
              Area data protection law, the data controller of the data processed through the 
              Service is the <strong>Customer</strong> who makes available and permits End Users 
              to access and use the Service. For data retained through the website or data 
              processed not through the Service, <strong>Rosteox</strong> is the controller.
            </p>
          </div>
        </div>

        <hr className="privacy-divider" />

        {/* Information We Collect */}
        <h2 className="section-heading">Information We Collect About You</h2>

        {/* Personal Information */}
        <div className="privacy-section">
          <h3 className="section-subheading">📝 Personal Information</h3>
          <p className="privacy-text">
            We generally collect and process the following types of Personal Information:
          </p>
          <ul className="privacy-list">
            <li><strong>Identity Data:</strong> Name (first and last), birthdate, gender, nationality, employee ID</li>
            <li><strong>Contact Data:</strong> Phone number(s), email address, address, country, city, postcode</li>
            <li><strong>Employment Data:</strong> Job title, department, date started working, termination date and reason</li>
            <li><strong>Financial Data:</strong> Bank account details (bank name, account number, branch address)</li>
            <li><strong>Technical Data:</strong> IP address, Government ID details and other unique identifiers</li>
            <li><strong>System Data:</strong> Status in the system and in the workplace</li>
          </ul>
          <div className="privacy-warning-box" style={{ background: '#fff3e0' }}>
            <p>
              <strong>⚠️ Minors Policy:</strong> Rosteox does not knowingly collect personal data 
              from children under <strong>18 years of age</strong>. Our system is designed to 
              prevent onboarding of individuals below this age threshold.
            </p>
          </div>
        </div>

        {/* Location Information */}
        <div className="privacy-section">
          <h3 className="section-subheading">📍 Location Information</h3>
          <p className="privacy-text">
            If you are using the Rosteox User App (Employee self service app), we will capture your 
            geolocation for time keeping purposes. The GDPR legal basis for processing this 
            information is the contractual obligation to your employer to perform the Services. If 
            you are using the Rosteox Kiosk App, your employer may enable GPS to capture 
            geo-location for time keeping purposes.
          </p>
        </div>

        {/* Live Location Geofencing */}
        <div className="privacy-section">
          <h3 className="section-subheading">🛰️ Live Location Geofencing</h3>
          <div className="privacy-info-box">
            <p>
              Rosteox provides a <strong>Live Location Geofencing</strong> feature that facilitates 
              real-time location monitoring within defined geographic boundaries. This feature is 
              enabled solely based on the specific operational requirements and instructions of 
              the Client (Employer). The Client maintains full control and authority to enable or 
              disable this feature for its workforce in accordance with its internal organization 
              policies and employment agreements.
            </p>
            <p style={{ marginTop: '10px' }}>
              <strong>🔑 Key Points:</strong>
            </p>
            <ul className="privacy-list" style={{ marginTop: '5px' }}>
              <li>Live location data is tracked <strong>only</strong> when the feature has been explicitly activated</li>
              <li>If the feature is disabled, <strong>no</strong> live location data is captured, processed, or stored</li>
              <li>In alignment with GDPR compliance, Rosteox processes this data as a 
                <strong> Data Processor</strong> acting under the direct instructions of the client</li>
            </ul>
          </div>
        </div>

        {/* Biometric & Attendance */}
        <div className="privacy-section">
          <h3 className="section-subheading">👤 Biometric & Attendance Information</h3>
          <p className="privacy-text">
            We collect biometric data through our facial recognition feature to record clock 
            in/clock out, if the employer has requested logging in through face recognition. The 
            face biometric is not used for any other purpose apart from enabling the attendance 
            related services.
          </p>
          <ul className="privacy-list">
            <li>The registered face is retained till the user is active and requires face recognition based attendance services</li>
            <li>Face data will be removed when the user is removed by the Account Owner</li>
            <li>The Account Owner can choose to remove the registered face of any active user if it is no longer required</li>
            <li>We do not share face data with any external third parties except the subprocessor required for operation</li>
            <li>Subprocessors do not store user's face after the processing is done</li>
          </ul>
        </div>

        {/* Device Information */}
        <div className="privacy-section">
          <h3 className="section-subheading">📱 Device Information</h3>
          <p className="privacy-text">
            When using the Mobile Apps, We may request access to your device's camera and photo 
            storage. This allows you to take and upload pictures and such access would only be 
            used in ways you choose. You may at any time revoke access at the device level.
          </p>
          <div className="privacy-highlight-box">
            <p>
              <strong>📊 Automatic Collection:</strong> When you download and use the Mobile Apps, 
              We automatically collect your device information such as operating system version, 
              type, hardware usage statistics, etc. The GDPR legal basis for processing this 
              information is the contractual obligation to your employer to perform the Services.
            </p>
          </div>
        </div>

        <hr className="privacy-divider" />

        {/* Data Processor Section */}
        <h2 className="section-heading">Data Collected as a Service Provider</h2>
        <div className="privacy-section">
          <div className="privacy-legal-box">
            <p>
              As a service provider, Rosteox systems only collects information as per the Customer 
              (employer's) requirement. Rosteox acts as a <strong>Data Processor</strong>, and our 
              customers (typically employers) act as <strong>Data Fiduciaries</strong> under the 
              DPDPA. We process personal data only on their instructions.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong>📧 DPA Request:</strong> As a data processor we can provide a data processing 
              agreement to the Account owners. You can request a data processing agreement from us 
              by emailing <a href="mailto:support@Rosteox.com">support@Rosteox.com</a>.
            </p>
          </div>
        </div>

        <hr className="privacy-divider" />

        {/* Disclosure of Personal Data */}
        <h2 className="section-heading">Disclosure of Personal Data</h2>

        <div className="privacy-section">
          <h3 className="section-subheading">🔗 Third Party Services</h3>
          <p className="privacy-text">
            At times, you may be able to access other Third Party Services through the Site, for 
            example by clicking on links to those Third Party Services from within the Site.
          </p>
          <div className="privacy-info-box">
            <p>
              <strong>📄 Data Processing Addendum:</strong> For a complete list of subprocessors 
              and related terms, please refer to our Data Processing Addendum at 
              <a href="https://Rosteox.com/dpa" target="_blank" rel="noopener noreferrer">
                {' '}https://Rosteox.com/dpa
              </a>
            </p>
          </div>
        </div>

        <div className="privacy-section">
          <h3 className="section-subheading">🤝 Information Shared with Our Service Providers</h3>
          <p className="privacy-text">
            We will not share personal information about you with any third party unless we have 
            your permission or under the following circumstances:
          </p>
          <ul className="privacy-list">
            <li>To facilitate the operation of the App and Service and to perform related services</li>
            <li>Maintenance services, database management, web analytics and improvement of the Service's features</li>
            <li>To assist us in analyzing how our App and Service is used</li>
            <li>In response to lawful requests by public authorities</li>
            <li>To satisfy any applicable law, regulation, legal process or governmental request</li>
          </ul>
        </div>

        <hr className="privacy-divider" />

        {/* Data Retention */}
        <h2 className="section-heading">Data Retention</h2>
        <div className="privacy-section">
          <p className="privacy-text">
            Rosteox will retain data it processes on behalf of its Customers only for as long as 
            required to provide the Service to its Customers and as necessary to comply with its 
            legal obligations, resolve disputes and enforce its agreements.
          </p>
          <div className="privacy-retention-box">
            <div className="retention-item">
              <span className="retention-icon">🗑️</span>
              <div>
                <h4>Service Termination</h4>
                <p>After termination, we may begin the process to permanently delete the data after 
                <strong> 30 days</strong>. Once begun, this process cannot be reversed.</p>
              </div>
            </div>
            <div className="retention-item">
              <span className="retention-icon">📊</span>
              <div>
                <h4>Anonymized Data</h4>
                <p>Some data will not be deleted and shall be kept in an <strong>anonymized</strong> 
                manner for business and analytical purposes.</p>
              </div>
            </div>
            <div className="retention-item">
              <span className="retention-icon">💾</span>
              <div>
                <h4>Backup & Continuity</h4>
                <p>The data in Rosteox is backed up for <strong>system continuity</strong> purposes.</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="privacy-divider" />

        {/* Data Storage */}
        <h2 className="section-heading">Where Do We Store Your Data?</h2>
        <div className="privacy-section">
          <div className="privacy-storage-box">
            <div className="storage-icon">☁️</div>
            <div className="storage-content">
              <h4>AWS & Google Cloud - India Data Centers</h4>
              <p>The Data we collect is hosted on the <strong>AWS</strong> and 
              <strong> Google Cloud</strong> in India data centers which provides advanced security 
              features and is compliant with <strong>ISO 27001</strong> standard. Rosteox services 
              are provided globally and we are headquartered in India.</p>
              <a href="https://aws.amazon.com/compliance/iso-certified" target="_blank" rel="noopener noreferrer">
                🔗 AWS Compliance Certification
              </a>
            </div>
          </div>
        </div>

        <hr className="privacy-divider" />

        {/* Data Security */}
        <h2 className="section-heading">Data Security</h2>
        <div className="privacy-section">
          <p className="privacy-text">
            We have implemented measures designed to secure your personal data from accidental 
            loss and from unauthorized access, use, alteration and disclosure.
          </p>
          <div className="security-measures">
            <div className="security-item">
              <span className="security-icon">🔐</span>
              <p>All user information can only be accessed by <strong>authorized users</strong></p>
            </div>
            <div className="security-item">
              <span className="security-icon">🔑</span>
              <p>Users need to authenticate themselves with a <strong>username-password</strong> combination</p>
            </div>
            <div className="security-item">
              <span className="security-icon">🛡️</span>
              <p>All data is hosted on <strong>Amazon AWS</strong> and <strong>Google Cloud</strong></p>
            </div>
            <div className="security-item">
              <span className="security-icon">✅</span>
              <p>Compliant with <strong>ISO 27001</strong> standard and other certifications</p>
            </div>
          </div>
        </div>

        <hr className="privacy-divider" />

        {/* Your Rights */}
        <h2 className="section-heading">Your Rights Associated with Your Information</h2>

        <div className="privacy-section">
          <p className="privacy-text">
            If we are storing your personal information, you have the following rights to your 
            information based on the services and your region.
          </p>
        </div>

        {/* Rights Grid */}
        <div className="rights-grid">
          <div className="right-card">
            <div className="right-icon">👁️</div>
            <h4>Right of Access</h4>
            <p>Request details of your Personal Information We hold. We will confirm whether We are processing your Personal Information.</p>
          </div>
          <div className="right-card">
            <div className="right-icon">✏️</div>
            <h4>Right of Rectification</h4>
            <p>Correct incomplete or inaccurate parts of your Personal Information. We may need to verify the accuracy of the new information.</p>
          </div>
          <div className="right-card">
            <div className="right-icon">🗑️</div>
            <h4>Right to be Forgotten</h4>
            <p>Request to delete your personal data if it is no longer necessary, you object to processing, or it was processed illegally.</p>
          </div>
          <div className="right-card">
            <div className="right-icon">⏸️</div>
            <h4>Right to Restrict Processing</h4>
            <p>Request a restriction on the processing of your personal data. We may continue to store your Personal Information.</p>
          </div>
          <div className="right-card">
            <div className="right-icon">📤</div>
            <h4>Right to Data Portability</h4>
            <p>Transfer data from one electronic processing system to another. We will provide you with your Personal Information in a machine readable format.</p>
          </div>
          <div className="right-card">
            <div className="right-icon">🚫</div>
            <h4>Right to Object</h4>
            <p>Object to processing of your Personal Information on grounds relating to your particular situation, including for direct marketing purposes.</p>
          </div>
          <div className="right-card">
            <div className="right-icon">🤖</div>
            <h4>Rights in Relation to Automated Decision Making</h4>
            <p>You will not be subject to decisions with a legal or similarly significant effect based solely on automated processing.</p>
          </div>
          <div className="right-card">
            <div className="right-icon">✋</div>
            <h4>Right to Withdraw Consent</h4>
            <p>Withdraw any consent you may have previously given Us at any time. Contact us at 
              <a href="mailto:support@Rosteox.com"> support@Rosteox.com</a>.</p>
          </div>
        </div>

        <div className="privacy-highlight-box" style={{ background: '#e8f5e9' }}>
          <p>
            <strong>📧 Exercise Your Rights:</strong> To request to exercise any of the above 
            rights, please contact us at <a href="mailto:support@Rosteox.com">support@Rosteox.com</a>. 
            We will respond to your request within <strong>30 days</strong> or provide you with 
            reasons for the delay. Usually, we will not charge you any fees in connection with the 
            exercise of your rights.
          </p>
        </div>

        <hr className="privacy-divider" />

        {/* Cookies */}
        <h2 className="section-heading">Cookies</h2>
        <div className="privacy-section">
          <p className="privacy-text">
            The Rosteox.com site includes certain components transmitted by 
            <strong> Google Analytics</strong>, a web traffic analysis service provided by Google, 
            Inc. Google Analytics uses <strong>"cookies"</strong> to collect and analyze anonymous 
            information about site usage behavior.
          </p>
          <div className="cookies-box">
            <p>
              <strong>🔍 Cookie Details:</strong>
            </p>
            <ul className="privacy-list">
              <li>This site does not use Google Analytics to track or collect personally identifiable information</li>
              <li>Google will not associate your IP address with any other data held by Google</li>
              <li>You can selectively disable Google Analytics on your browser component opt-out</li>
            </ul>
            <div className="cookie-links">
              <a href="https://www.google.it/policies/privacy/partners/" target="_blank" rel="noopener noreferrer">
                📖 Google Privacy Policy
              </a>
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                ⚙️ Google Analytics Opt-out
              </a>
            </div>
          </div>
        </div>

        <hr className="privacy-divider" />

        {/* Email Opt Out */}
        <h2 className="section-heading">Email Opt Out Procedure</h2>
        <div className="privacy-section">
          <p className="privacy-text">
            If you no longer wish to receive marketing communications from Rosteox, you may click 
            on the <strong>"unsubscribe"</strong> link located on the bottom of our marketing 
            emails or you can contact us at <a href="mailto:support@Rosteox.com">support@Rosteox.com</a>.
          </p>
        </div>

        <hr className="privacy-divider" />

        {/* Changes to Policy */}
        <h2 className="section-heading">Changes to Our Privacy Policy</h2>
        <div className="privacy-section">
          <div className="privacy-changes-box">
            <p>
              All changes to this Privacy Policy are effective as of the stated 
              <strong> "Last Revised"</strong> date and your continued use of Services will 
              constitute your active acceptance of, and agreement to be bound by, the changes to 
              the Privacy Policy.
            </p>
            <p style={{ marginTop: '12px' }}>
              <strong>📧 Notification:</strong> If we make material changes to how we treat our 
              users' personal data, we will notify you by e-mail to the primary e-mail address 
              specified in your account.
            </p>
            <div className="policy-version">
              <span>📅 Version: Effective from 20 December 2025</span>
            </div>
          </div>
        </div>

        <hr className="privacy-divider" />

        {/* Contact */}
        <h2 className="section-heading">Contact Us</h2>
        <div className="privacy-section">
          <div className="privacy-contact-box">
            <div className="contact-icon">💬</div>
            <div>
              <p style={{ fontSize: '16px', lineHeight: '1.8', margin: '0' }}>
                If you have any questions or comments concerning this Privacy Policy, send us an 
                email or otherwise contact us at:
              </p>
              <p style={{ fontSize: '18px', fontWeight: '600', marginTop: '10px' }}>
                📧 <a href="mailto:support@Rosteox.com">support@Rosteox.com</a>
              </p>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
                We will make an effort to reply within a reasonable timeframe, and not over 
                30 business days.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="privacy-footer">
          <p>
            &copy; 2026 <strong>Rosteox</strong>. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="footer-divider">|</span>
            <a href="#terms">Terms of Service</a>
            <span className="footer-divider">|</span>
            <a href="#contact">Contact Us</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;