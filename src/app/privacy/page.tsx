import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Veynqor, Inc. privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-16 pb-24 px-6">
      <div className="max-w-3xl mx-auto pt-12">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: March 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-400">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              Veynqor, Inc. (&ldquo;Veynqor,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
              protecting the privacy and security of the personal information we collect from visitors
              to our website (veynqor.com) and users of our products and services. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-gray-300">Contact Information:</strong> Name, email address, company name,
                phone number, and fleet size when you submit a form on our website.
              </li>
              <li>
                <strong className="text-gray-300">Usage Data:</strong> Information about how you interact with our
                website, including pages visited, time spent, and referring URLs.
              </li>
              <li>
                <strong className="text-gray-300">Device Information:</strong> Browser type, operating system, IP
                address, and device identifiers.
              </li>
              <li>
                <strong className="text-gray-300">Vehicle Telemetry Data:</strong> For customers using our products,
                we collect vehicle health and performance data transmitted by R-DRIVE devices, including
                CAN bus signals, GPS coordinates, and diagnostic information.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To deliver and improve our products and services</li>
              <li>To send you relevant communications about our products (with your consent)</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with trusted
              third-party service providers who assist us in operating our website and delivering our
              services, subject to confidentiality agreements. We may also disclose information when
              required by law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information, including
              encryption in transit and at rest, access controls, and regular security assessments.
              However, no method of transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes
              described in this policy, unless a longer retention period is required by law. Vehicle
              telemetry data is retained according to the terms of your service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, delete, or port
              your personal information. California residents have additional rights under the CCPA.
              To exercise your rights, contact us at privacy@veynqor.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Cookies</h2>
            <p>
              Our website may use cookies and similar technologies to improve your browsing experience
              and analyze site traffic. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material
              changes by posting the updated policy on our website with a new effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mt-4">
              <strong className="text-gray-300">Veynqor, Inc.</strong>
              <br />
              Email: privacy@veynqor.com
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
