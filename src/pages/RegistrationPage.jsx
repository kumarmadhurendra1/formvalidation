import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormInput } from '../components/FormInput';
import { PasswordInput } from '../components/PasswordInput';
import { PhoneInput } from '../components/PhoneInput';
import { SelectInput } from '../components/SelectInput';
import { validateForm, isFormValid } from '../utils/validation';
import { countries, getPhoneCodeByCountry, getCitiesByCountry } from '../utils/data';
import { UserCircle } from 'lucide-react';

export const RegistrationPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneCode: '',
    phoneNumber: '',
    country: '',
    city: '',
    panNumber: '',
    aadharNumber: '',
  });
  
  const [errors, setErrors] = useState({});
  const [cities, setCities] = useState([]);
  const [touched, setTouched] = useState({});
  
  // Update cities when country changes
  useEffect(() => {
    if (formData.country) {
      const countryCities = getCitiesByCountry(formData.country);
      setCities(countryCities);
      
      // Set phone code based on country
      const phoneCode = getPhoneCodeByCountry(formData.country);
      setFormData(prev => ({ ...prev, phoneCode }));
      
      // Reset city if country changes and the current city is not in the new country
      if (!countryCities.includes(formData.city)) {
        setFormData(prev => ({ ...prev, city: '' }));
      }
    } else {
      setCities([]);
    }
  }, [formData.country]);
  
  // Validate on field change for touched fields
  useEffect(() => {
    const validationErrors = validateForm(formData);
    
    // Only show errors for touched fields
    const filteredErrors = {};
    Object.keys(touched).forEach(key => {
      if (touched[key] && validationErrors[key]) {
        filteredErrors[key] = validationErrors[key];
      }
    });
    
    setErrors(filteredErrors);
  }, [formData, touched]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setTouched(prev => ({ ...prev, [name]: true }));
  };
  
  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);
    
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    
    if (isFormValid(validationErrors)) {
      // Navigate to confirmation page with form data
      navigate('/confirmation', { state: { formData } });
    }
  };
  
  return (
    <div className="py-8 px-4 min-h-screen flex items-center justify-center">
      <div className="form-container w-full">
        <div className="flex items-center justify-center mb-6">
          <UserCircle className="h-16 w-16 text-blue-600" />
        </div>
        
        <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Create Your Account
        </h1>
        
        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b">
              Personal Information
            </h2>
            
            <div className="form-row">
              <div className="form-col">
                <FormInput
                  id="firstName"
                  label="First Name"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  placeholder="John"
                  required
                />
              </div>
              
              <div className="form-col">
                <FormInput
                  id="lastName"
                  label="Last Name"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
          </div>
          
          {/* Account Information */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b">
              Account Information
            </h2>
            
            <div className="form-row">
              <div className="form-col">
                <FormInput
                  id="username"
                  label="Username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  error={errors.username}
                  placeholder="johndoe123"
                  required
                />
              </div>
              
              <div className="form-col">
                <FormInput
                  id="email"
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="mb-4">
              <PasswordInput
                id="password"
                label="Password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b">
              Contact Information
            </h2>
            
            <div className="mb-4">
              <PhoneInput
                codeId="phoneCode"
                codeLabel="Country Code"
                codeValue={formData.phoneCode}
                onCodeChange={handleChange}
                codeError={errors.phoneCode}
                
                numberId="phoneNumber"
                numberLabel="Phone Number"
                numberValue={formData.phoneNumber}
                onNumberChange={handleChange}
                numberError={errors.phoneNumber}
              />
            </div>
            
            <div className="form-row">
              <div className="form-col">
                <SelectInput
                  id="country"
                  label="Country"
                  value={formData.country}
                  onChange={handleChange}
                  options={countries.map(country => ({
                    value: country.name,
                    label: country.name
                  }))}
                  error={errors.country}
                  placeholder="Select Country"
                />
              </div>
              
              <div className="form-col">
                <SelectInput
                  id="city"
                  label="City"
                  value={formData.city}
                  onChange={handleChange}
                  options={cities.map(city => ({
                    value: city,
                    label: city
                  }))}
                  error={errors.city}
                  placeholder="Select City"
                  disabled={!formData.country}
                />
              </div>
            </div>
          </div>
          
          {/* Identification */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b">
              Identification Documents
            </h2>
            
            <div className="form-row">
              <div className="form-col">
                <FormInput
                  id="panNumber"
                  label="PAN Number"
                  type="text"
                  value={formData.panNumber}
                  onChange={handleChange}
                  error={errors.panNumber}
                  placeholder="ABCDE1234F"
                  maxLength={10}
                  pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                  required
                />
              </div>
              
              <div className="form-col">
                <FormInput
                  id="aadharNumber"
                  label="Aadhar Number"
                  type="text"
                  value={formData.aadharNumber}
                  onChange={handleChange}
                  error={errors.aadharNumber}
                  placeholder="123456789012"
                  maxLength={12}
                  pattern="[0-9]{12}"
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn-primary"
              disabled={Object.keys(errors).length > 0}
            >
              Register Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};