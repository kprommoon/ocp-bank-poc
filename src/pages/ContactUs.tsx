import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          We'd love to hear from you! Please reach out with any questions or feedback.
        </p>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Phone</h2>
            <p>
              <a href="tel:+6621234567" className="text-ocp hover:text-ocp-dark">
                +66 2 123 4567
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p>
              <a href="mailto:info@ocpgroup.com" className="text-ocp hover:text-ocp-dark">
                info@ocpgroup.com
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Address</h2>
            <p>
              123 OCP Street,<br />
              Bangkok, Thailand
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
