import React from 'react';
import SoilAnalysisForm from '../components/forms/SoilAnalysisForm';

const RequestAnalysis: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Request a Soil Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized fertilizer recommendations based on your soil's unique composition.
            Our mobile lab will visit your farm to collect samples.
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto">
          <SoilAnalysisForm />
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center text-gray-600">
          <p>
            Need help? Contact our support team at{' '}
            <a href="tel:+66123456789" className="text-ocp hover:text-ocp-dark">
              +66 12 345 6789
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestAnalysis;