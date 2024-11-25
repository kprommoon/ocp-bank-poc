import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const AnalysisConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state?.formData;

  // Redirect if no form data
  React.useEffect(() => {
    if (!formData) {
      navigate('/request-analysis');
    }
  }, [formData, navigate]);

  if (!formData) return null;

  const formatDate = (date: any) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Soil Analysis Request Confirmed!
          </h1>
          <p className="text-gray-600">
            We have sent a confirmation email to {formData.email} with these details.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Request Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody className="divide-y">
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Farmer Name</td>
                    <td className="px-4 py-3 text-gray-700">{formData.farmerName}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">Crop Type</td>
                    <td className="px-4 py-3 text-gray-700 capitalize">{formData.cropType}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Farm Address</td>
                    <td className="px-4 py-3 text-gray-700">{formData.farmAddress}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">Contact Number</td>
                    <td className="px-4 py-3 text-gray-700">{formData.phoneNumber}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Email</td>
                    <td className="px-4 py-3 text-gray-700">{formData.email}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">Acreage</td>
                    <td className="px-4 py-3 text-gray-700">{formData.acreage} acres</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Preferred Sampling Date</td>
                    <td className="px-4 py-3 text-gray-700">{formatDate(formData.preferredSamplingDate)}</td>
                  </tr>
                  {formData.notes && (
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">Additional Notes</td>
                      <td className="px-4 py-3 text-gray-700">{formData.notes}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button
            onClick={() => navigate('/')}
            className="px-8"
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisConfirmation;