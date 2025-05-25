import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormData } from '../types';
import { CheckCircle } from 'lucide-react';

export const ConfirmationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state as { formData: FormData } || { formData: null };
  
  if (!formData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">No form data found</h1>
          <p className="mt-4">Please fill out the registration form.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-6 btn-primary"
          >
            Go to Registration
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-8 px-4 min-h-screen flex flex-col items-center justify-center">
      <div className="form-container w-full max-w-3xl">
        <div className="flex items-center justify-center mb-8 animate-fadeIn">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        
        <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Registration Successful!
        </h1>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 text-center">
          <p className="text-green-800">
            Thank you for registering with us. Your account has been created successfully.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b">
            Your Registration Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Personal Information</h3>
              <div className="space-y-2">
                <p><span className="font-medium">First Name:</span> {formData.firstName}</p>
                <p><span className="font-medium">Last Name:</span> {formData.lastName}</p>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Account Information</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Username:</span> {formData.username}</p>
                <p><span className="font-medium">Email:</span> {formData.email}</p>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Contact Information</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Phone:</span> +{formData.phoneCode} {formData.phoneNumber}</p>
                <p><span className="font-medium">Country:</span> {formData.country}</p>
                <p><span className="font-medium">City:</span> {formData.city}</p>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">Identification</h3>
              <div className="space-y-2">
                <p><span className="font-medium">PAN Number:</span> {formData.panNumber}</p>
                <p>
                  <span className="font-medium">Aadhar Number:</span> 
                  {formData.aadharNumber.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Return to Registration
          </button>
        </div>
      </div>
    </div>
  );
};