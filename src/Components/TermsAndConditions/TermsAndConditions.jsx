import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <div className="terms-wrapper">
        {/* Header Section */}
        <div className="terms-header">
          <h1 className="terms-title">
            Terms and Conditions
            {/* <span className="terms-dot"></span> */}
          </h1>
       
        </div>

        {/* Abstract Graphic */}
       

        {/* Introduction */}
        <div className="terms-section">
          <p className="terms-text">
            This website is owned and operated by <strong>Rosteox</strong>. By using the Rosteox mobile app, 
            web application or website (<strong>"Service"</strong>), You acknowledge that You have read 
            and agreed to be bound by following terms and conditions (<strong>"Terms of Service"</strong>).
          </p>
          <p className="terms-text">
            This Terms of Services (or the <strong>"Agreement"</strong>) is a legally binding contract 
            between <strong>Rosteox.com</strong> (also referred in this Agreement to as 
            <strong>"Rosteox"</strong>, <strong>"Rosteox.com"</strong>, <strong>"We"</strong>, 
            <strong>"Us"</strong> or <strong>"Our"</strong>) and You or the company or legal entity 
            You represent as a user of or subscriber to Rosteox.com site (also referred to as 
            <strong>"sites"</strong>, <strong>"website"</strong>) or services 
            (<strong>"You"</strong> or <strong>"User"</strong> or <strong>"Customer"</strong> or 
            <strong>"Subscriber"</strong>).
          </p>
        </div>

        {/* Update Notice */}
        <div className="terms-notice">
          <div className="notice-icon">ℹ️</div>
          <div className="notice-content">
            <h3>Updates to Terms</h3>
            <p>
              We reserve the right to update and change the Terms of Service from time to time without notice. 
              Any new features that augments or enhances the current Service, including the release of new 
              tools and resources, shall be subject to the Terms of Service. Continued use of the Service 
              after any such changes shall constitute your consent to such changes. You can review the most 
              current version of the Terms of Service at any time here.
            </p>
          </div>
        </div>

        {/* Warning */}
        <div className="terms-warning">
          <div className="warning-icon">⚠️</div>
          <p>
            <strong>Violation</strong> of any of the terms below will result in the termination of your account. 
            You agree to use the Service at your own risk.
          </p>
        </div>

        {/* Services Description */}
        <div className="terms-section">
          <p className="terms-text">
            Through this site and many of our services, Rosteox.com offers businesses, organizations and 
            individuals access to a diverse collection of resources related to automated response as hosted 
            services, software and tools; consulting advice; services and automated response related support 
            materials; training content, such as blogs, webinars, videos, templates, guides, books, social 
            media content, user-generated content, personalized content, industry surveys, and user-feedback 
            polls; and including, without limitation, application program interfaces (<strong>"APIs"</strong>). 
            We refer to these resources collectively as <strong>"Services"</strong> throughout this Agreement. 
            The Rosteox.com Services may be offered across several web domains, including, and not limited to, 
            Rosteox.com. We'll refer to these domains as the <strong>"Sites"</strong> in this Agreement.
          </p>
          <p className="terms-text">
            You may access certain portions of the Rosteox.com Sites or Services with a free account as a trial 
            user (<strong>"User"</strong>), whereas any person who pays for any portion of the Sites or Services 
            shall be referred to herein as either a <strong>"Subscriber"</strong> or <strong>"Customer"</strong> 
            throughout this Agreement. If You are using Rosteox.com Sites or Services on behalf of a company or 
            other entity, then <strong>"Customer"</strong> or <strong>"Subscriber"</strong> means that entity, 
            and You are also binding that entity to this Agreement. You also represent and warrant that You have 
            the legal power and authority to enter into this Agreement and that, if the Subscriber or Customer 
            is an entity, this Agreement is entered into by an employee or agent with all necessary authority 
            to bind that entity to this Agreement.
          </p>
        </div>

        <hr className="terms-divider" />

        {/* Conditions Governing Subscriptions */}
        <h2 className="section-heading">Conditions Governing Subscriptions</h2>
        <p className="terms-text" style={{ marginBottom: '30px' }}>
          This Agreement was last updated on <strong>June 1, 2022</strong>. It is effective between You and 
          Us as of the date of Your acceptance of this Agreement.
        </p>

        {/* Section 1 - Free Trial */}
        <div className="terms-section">
          <h3 className="section-subheading">1. Free Trial</h3>
          <p className="terms-text">
            If You register on Our website (Rosteox.com) for a free trial, We will make one or more Services 
            available to You on a trial basis free of charge until the earlier of (a) the end of the free 
            trial period for which You registered to use the applicable Service(s), or (b) the start date 
            of any purchased Service subscriptions ordered by You for such Service(s), or (c) termination 
            by Us in our sole discretion. Additional trial terms and conditions may appear on the trial 
            registration web page. Any such additional terms and conditions are incorporated into this 
            Agreement by reference and are legally binding.
          </p>
          <div className="terms-highlight-box">
            <p>
              <strong>⚠️ Important:</strong> Any data You enter into the services during Your free trial 
              will be <strong>permanently lost</strong> after 3 weeks of free trial period expired unless 
              You purchase a subscription to the same services as those covered by the trial or purchase 
              applicable upgraded services, before the end of the trial period. During the free trial the 
              services are provided <strong>"as-is"</strong> without any warranty.
            </p>
          </div>
        </div>

        {/* Section 2 - Billing and Payment */}
        <div className="terms-section">
          <h3 className="section-subheading">2. Billing and Payment</h3>
          <p className="terms-text">
            You agree to the pricing and payment terms presented to You at the time You sign up for any of 
            our Services on the Sites, as a subscriber. You are solely responsible for canceling Your account 
            and taking action to cancel Your account prior to renewal if You don't want Your free trial or 
            subscription to auto-renew. Depending on the renewal term You chose during the sign up process, 
            subscriptions can recur every 30 days or annually.
          </p>
          <ul className="terms-list">
            <li>The Service is billed in advance on a monthly or annual basis and is <strong>non-refundable</strong>. 
            There will be no refunds or credits for partial months/years of service, downgrades or unused 
            months with an open account.</li>
            <li>All advertised fees are exclusive of any taxes, levies or duties imposed by taxing authorities. 
            If you are from the European Union, VAT charges will be charged to your bill.</li>
            <li>We will automatically begin billing You for subscription fees corresponding to Your subscription 
            plan at the end of Your free trial period, unless You manually cancel prior to the end of Your 
            free trial.</li>
            <li>It is Your responsibility to maintain a valid and updated credit card associated with Your 
            account and to ensure that You are authorized to use said credit card.</li>
            <li>You authorize Us and/or Our authorized agents, as applicable, to bill and automatically charge 
            You the Subscription Fee, including for any Renewal subscription.</li>
          </ul>
          <div className="terms-highlight-box" style={{ background: '#fff4e5' }}>
            <p>
              <strong>💰 Payment Terms:</strong> All fees and charges are nonrefundable. All billing 
              transactions are processed in <strong>Indian Rupee</strong> and are subject to the currency 
              conversion rate on the date of the transaction.
            </p>
          </div>
        </div>

        {/* Section 3 - Cancellations */}
        <div className="terms-section">
          <h3 className="section-subheading">3. Cancellations</h3>
          <p className="terms-text">
            You may cancel Your free trial or Your subscription at any time. In order cancel Your free trial, 
            You must do so within Your account prior to the end of the trial period. Customers must cancel 
            their paid subscriptions by contacting us at Support email however, that alone does not guarantee 
            cancellation.
          </p>
          <ul className="terms-list">
            <li>There are no refunds or credits for partially used subscriptions or for downgraded subscriptions 
            during a billing period.</li>
            <li>Immediately upon Your cancellation, You will no longer have access to Your account.</li>
            <li>You acknowledge as a Subscriber that if Rosteox.com cannot charge Your credit card at the time 
            of renewal, Rosteox.com may cancel Your subscription, and as a result, You may lose access to the 
            Services and all data associated with Your account.</li>
          </ul>
        </div>

        <hr className="terms-divider" />

        {/* Our Responsibilities */}
        <h2 className="section-heading">Our Responsibilities</h2>

        {/* Section 1 - Provision of Purchased Services */}
        <div className="terms-section">
          <h3 className="section-subheading">1. Provision of Purchased Services</h3>
          <p className="terms-text">
            We will (a) make the Services and content available to You pursuant to this Agreement, 
            (b) provide applicable support for the Services to You at no additional charge, (c) use 
            commercially reasonable efforts to make the online Services available 24 hours a day, 7 days 
            a week, except for: (i) planned downtime, and (ii) any unavailability caused by circumstances 
            beyond Our reasonable control, including, for example, an act of God, act of government, flood, 
            fire, earthquake, civil unrest, act of terror, strike or other labor problem (other than one 
            involving Our employees), Internet service provider failure or delay, or denial of service attack.
          </p>
        </div>

        {/* Section 2 - Protection of Your data */}
        <div className="terms-section">
          <h3 className="section-subheading">2. Protection of Your Data</h3>
          <p className="terms-text">
            We will maintain administrative, physical, and technical safeguards for protection of the 
            security, confidentiality and integrity of Your Data. Those safeguards will include, but will 
            not be limited to, measures for preventing access, use, modification or disclosure of Your Data 
            by Our personnel except (a) to provide the purchased Services and prevent or address service or 
            technical problems, (b) as compelled by law, or (c) as You expressly permit in writing.
          </p>
        </div>

        {/* Section 3 - User Generated Content */}
        <div className="terms-section">
          <h3 className="section-subheading">3. User Generated Content</h3>
          <p className="terms-text">
            Users and Subscribers may create, upload, post and store information, data, text, videos, images 
            or other materials (<strong>"Content"</strong>) on the Sites and/or Services, which may be 
            viewable by You and other Users or Subscribers. Rosteox.com does not control the Content posted 
            via Subscribers or Users of the Sites or Services, and as such, does not guarantee the integrity, 
            quality or accuracy or such content.
          </p>
          <div className="terms-highlight-box">
            <p>
              <strong>📝 Content License:</strong> By posting or distributing User Content to or through 
              the Services, You grant Rosteox and its affiliates and subsidiaries a non-exclusive, 
              royalty-free, transferable right to use, display, perform, reproduce, distribute, publish, 
              modify, adapt, translate and create derivative works from such User Content.
            </p>
          </div>
        </div>

        {/* Section 4 - Account Security */}
        <div className="terms-section">
          <h3 className="section-subheading">4. Account, Password, and Security</h3>
          <p className="terms-text">
            You are the sole authorized user of Your account. You are responsible for maintaining the 
            confidentiality of any password and account number provided by You or Rosteox.com for accessing 
            the Service. You are solely and fully responsible for all activities that occur under Your 
            password or account. Rosteox.com has no control over the use of any User's account and expressly 
            disclaims any liability derived therefrom.
          </p>
        </div>

        {/* Section 5 - Storage Limits */}
        <div className="terms-section">
          <h3 className="section-subheading">5. Storage Limits</h3>
          <p className="terms-text">
            There may be storage limits associated with a our Service. These limits may be described in the 
            services descriptions on our website. We reserves the right to charge for additional storage or 
            overage fees at the rates specified on our website. We may impose new, or may modify existing, 
            storage limits for the Service at any time in our discretion, with or without notice to You.
          </p>
        </div>

        {/* Section 6 - Deletion */}
        <div className="terms-section">
          <h3 className="section-subheading">6. Deletion at End of Subscription Term</h3>
          <p className="terms-text">
            We may remove or delete Your data within a reasonable period of time after the termination of 
            Your Subscription Term.
          </p>
        </div>

        {/* Section 7 - Links */}
        <div className="terms-section">
          <h3 className="section-subheading">7. Links to Other Web Sites</h3>
          <p className="terms-text">
            Links (such as hyperlinks) from the Service to other sites on the Web do not constitute the 
            endorsement by us of those sites or their content. Such links are provided as an information 
            service, for reference and convenience only. We do not control any such sites, and are not 
            responsible for their content.
          </p>
        </div>

        <hr className="terms-divider" />

        {/* Legal Sections */}
        <h2 className="section-heading">Legal Terms</h2>

        {/* Section 9 - Limitation of Liability */}
        <div className="terms-section">
          <h3 className="section-subheading">9. Limitation of Liability</h3>
          <div className="terms-legal-box">
            <p>
              In no event shall we or our affiliates be liable to you or any third party for any special, 
              punitive, incidental, indirect or consequential damages of any kind, or any damages whatsoever, 
              including, without limitation, those resulting from loss of use, data or profits, whether or 
              not we have been advised of the possibility of such damages, and on any theory of liability, 
              arising out of or in connection with the use of this site or of any web site referenced or 
              linked to or from this site.
            </p>
            <p style={{ marginTop: '15px', fontWeight: '500', color: '#2342dc' }}>
              In the event this limitation of liability shall be for any reason held unenforceable or 
              inapplicable, you agree that the aggregate liability of Rosteox shall not exceed the subscription 
              fees paid or payable by you in the twelve (12) months prior to the event or occurrence giving 
              rise to such liability.
            </p>
          </div>
        </div>

        {/* Section 10 - Disclaimer */}
        <div className="terms-section">
          <h3 className="section-subheading">10. Disclaimer of Warranties</h3>
          <div className="terms-legal-box" style={{ background: '#f8f9fa' }}>
            <p>
              Your use of the Rosteox.com service is at Your sole risk. Rosteox.com provides the Services on 
              an <strong>"as-is"</strong> and <strong>"as available"</strong> basis. To the fullest extent 
              applicable by law, Rosteox.com and its officers, directors, employees, contractors, agents, 
              attorneys, partners, licensors, and other representatives expressly disclaim all warranties 
              of any kind, whether express or implied, but not limited to the implied warranties of 
              merchantability and non-infringement, or fitness for a particular purpose.
            </p>
          </div>
        </div>

        {/* Section 11 - Governing Law */}
        <div className="terms-section">
          <h3 className="section-subheading">11. Governing Law</h3>
          <div className="terms-gov-box">
            <p>
              These terms shall be governed by the law of <strong>India</strong> and any disputes arising 
              in relation to these terms shall be subject to the jurisdiction of the Courts of 
              <strong>Pune</strong>.
            </p>
          </div>
        </div>

        {/* Section 12 - Variation */}
        <div className="terms-section">
          <h3 className="section-subheading">12. Variation of the Conditions, Site, Application and Service</h3>
          <p className="terms-text">
            Rosteox reserves the right to change, modify or amend any or all the Conditions at any time 
            without any prior notice. In addition, Rosteox may vary or amend the Services provided through 
            the Site or the Application, functionality of the Site and/ or the Application and/ or the 
            "look and feel" of the Site and / or the Application at any time without notice and without 
            any liability towards the Members.
          </p>
        </div>

        {/* Section 13 - Entire Agreement */}
        <div className="terms-section">
          <h3 className="section-subheading">13. Entire Agreement and Order of Precedence</h3>
          <p className="terms-text">
            This Agreement is the entire agreement between You and Rosteox regarding Your use of Services 
            and content and supersedes all prior and contemporaneous agreements, proposals or 
            representations, written or oral, concerning its subject matter. Except as otherwise provided 
            herein, no modification, amendment, or waiver of any provision of this Agreement will be 
            effective unless in writing and signed by the party against whom the modification, amendment 
            or waiver is to be asserted. The parties agree that any term or condition stated in Your 
            purchase order or in any other of Your order documentation is void.
          </p>
        </div>

        {/* Footer */}
        <div className="terms-footer">
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

export default TermsAndConditions;