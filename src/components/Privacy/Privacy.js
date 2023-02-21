import React from "react";
import "./Privacy.css";
const Privacy = () => {
  return (
    <div className="privacySection">
      {/* first banner section created */}
      <div className="privacyBanner">
        <h1>Privacy</h1>
        <h4>
          <a href="/">Home</a> &gt; Privacy
        </h4>
      </div>
      {/* second section now */}
      <div className="privacyWholePage">
        {/* first insider */}
        <h2>What information do we collect?</h2>
        <p>
          We collect information from you when you register on our site, place
          an order, subscribe to our newsletter or respond to a survey. When
          ordering or registering on our website, as appropriate, you may be
          asked to enter the following:
          <br />
          your name,
          <br />
          e-mail address,
          <br />
          mailing address or phone number.
          <br />
          You may however, visit our site anonymously.
        </p>
        {/* second insider */}
        <h2>What do we use your information for?</h2>
        <p>
          Any of the information we collect from you may be used in one of the
          following ways:
        </p>

        <ul className="listItems">
          <li>
            To personalize your experience (your information helps us to better
            respond to your individual needs)
          </li>
          <li>
            To improve our website and your shopping experience(we continually
            strive to improve our website offerings based on the information and
            feedback we receive from you)
          </li>
          <li>
            To improve customer service (your information helps us to more
            effectively respond to your customer service requests and support
            needs)
          </li>
          <li>To process transactions</li>
          <li>
            Your information, whether public or private, will not be sold,
            exchanged, transferred, or given to any other company for any reason
            whatsoever, without your consent, other than for the express purpose
            of delivering the purchased product or service requested.
          </li>
          <li>
            To administer a contest, special promotion, survey, activity or
            other site feature
          </li>
          <li>
            The email address you provide for order processing, may be used to
            send you important information and updates pertaining to your order,
            in addition to receiving occasional company news, updates, related
            product or service information, etc.
          </li>
        </ul>

        {/* third insider section */}
        <h2>How do we protect your information?</h2>
        <p>
          We implement a variety of security measures to maintain the safety of
          your personal information when you place an order or enter, submit, or
          access your personal information.
        </p>

        <p>
          We offer the use of a secure server. All information is transmitted
          via SSL technology and then encrypted into our Payment gateway
          provider’s database only to be accessible by those authorized with
          special access rights to such systems and are required to keep the
          information confidential.After a transaction, your private information
          (credit cards, social security numbers, financials, etc.) will not be
          stored on our servers.
        </p>
        {/* fourth insider section */}
        <h2>Do we use cookies?</h2>
        <p>
          Yes. Cookies are small files that a site or its service provider
          transfers to your computer’s hard drive through your Web browser (if
          you have allowed it via your settings. This enables the website to
          recognize your browser & capture and remember certain information.
        </p>
        <p>
          We use cookies to help us remember and process the items in your
          shopping cart, understand and save your preferences for future visits
          and compile aggregate data about site traffic and site interaction so
          that we can offer better site experiences and tools for you in the
          future. We may contract with third-party service providers to assist
          us in better understanding our website visitors. These service
          providers are not permitted to use the information collected on our
          behalf except to help us directly conduct and improve our business.
        </p>

        <p>
          If you prefer, you can choose to have your computer warn you each time
          a cookie is being sent, or you can choose to turn off all cookies via
          your browser settings. Like most websites, if you turn your cookies
          off, some of our services may not function properly. However, you can
          still place orders by contacting Customer Service.
        </p>

        {/* fifth insider section */}
        <h2>Do we disclose any information to outside parties?</h2>
        <p>
          Absolutely not. We do not sell, trade, or otherwise transfer your
          personally identifiable information to outside parties. This does not
          include trusted third parties who assist us in operating our website,
          conducting our business, or servicing you, so long as those parties
          agree to keep this information confidential. We may also release your
          information when we believe release is appropriate to comply with the
          law, enforce our site policies, or protect ours or others rights,
          property, or safety. However, non-personally identifiable visitor
          information may be provided to other parties for marketing,
          advertising, or other uses.
        </p>

        {/* sixth insider section */}
        <h2>Third party links</h2>
        <p>
          Occasionally, at our discretion, we may include or offer third party
          products on our website. These third party sites have separate and
          independent privacy policies. We therefore have no responsibility or
          liability for the content and activities of these linked sites.
          Nonetheless, we seek to protect the integrity of our site and welcome
          any feedback about these sites.
        </p>
        {/* seventh insider section */}
        <h2>Terms and Conditions</h2>
        <p>
          Please also visit our Terms and Conditions section establishing the
          use, disclaimers & limitations of liability governing the use of our
          website at Terms and Conditions.
        </p>

        {/* eight insider section */}
        <h2>Changes to our Privacy Policy</h2>
        <p>
          If we decide to change our privacy policy, we will post those changes
          on this page, and/or update the Privacy Policy modification date
          below.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
