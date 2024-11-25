import React from 'react';
import { useNavigate } from 'react-router-dom';
import SoilAnalysisForm from '../components/forms/SoilAnalysisForm';
import { ArrowLeft } from 'lucide-react';

const RequestAnalysis: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-16 md:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <div className="mb-2">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-ocp hover:text-ocp-dark"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </button>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-0 mb-2">
            Request a Soil Analysis
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-0">
            Get personalized fertilizer recommendations based on your soil's unique composition.
            Our mobile lab will visit your farm to collect samples.
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto">
          <SoilAnalysisForm />
        </div>

        {/* Additional Information */}
        <div className="mt-8 text-center text-gray-600">
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
