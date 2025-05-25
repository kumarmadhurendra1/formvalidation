import { FormData, FormErrors } from '../types';

export const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  // First Name validation
  if (!data.firstName.trim()) {
    errors.firstName = 'First name is required';
  } else if (!/^[A-Za-z\s]+$/.test(data.firstName)) {
    errors.firstName = 'First name should contain only alphabets';
  }

  // Last Name validation
  if (!data.lastName.trim()) {
    errors.lastName = 'Last name is required';
  } else if (!/^[A-Za-z\s]+$/.test(data.lastName)) {
    errors.lastName = 'Last name should contain only alphabets';
  }

  // Username validation
  if (!data.username.trim()) {
    errors.username = 'Username is required';
  } else if (!/^[A-Za-z0-9_]+$/.test(data.username)) {
    errors.username = 'Username should contain only alphanumeric characters and underscores';
  } else if (data.username.length < 4) {
    errors.username = 'Username should be at least 4 characters';
  }

  // Email validation
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Password validation
  if (!data.password) {
    errors.password = 'Password is required';
  } else if (data.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]/.test(data.password)) {
    errors.password = 'Password must include uppercase, lowercase, number, and special character';
  }

  // Phone validation
  if (!data.phoneCode) {
    errors.phoneCode = 'Country code is required';
  }
  
  if (!data.phoneNumber.trim()) {
    errors.phoneNumber = 'Phone number is required';
  } else if (!/^\d{10}$/.test(data.phoneNumber)) {
    errors.phoneNumber = 'Phone number must be 10 digits';
  }

  // Country validation
  if (!data.country) {
    errors.country = 'Country is required';
  }

  // City validation
  if (!data.city) {
    errors.city = 'City is required';
  }

  // PAN validation (Indian PAN format: ABCDE1234F)
  if (!data.panNumber.trim()) {
    errors.panNumber = 'PAN number is required';
  } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(data.panNumber)) {
    errors.panNumber = 'Invalid PAN format (e.g., ABCDE1234F)';
  }

  // Aadhar validation (12 digits)
  if (!data.aadharNumber.trim()) {
    errors.aadharNumber = 'Aadhar number is required';
  } else if (!/^\d{12}$/.test(data.aadharNumber)) {
    errors.aadharNumber = 'Aadhar number must be 12 digits';
  }

  return errors;
};

export const isFormValid = (errors: FormErrors): boolean => {
  return Object.keys(errors).length === 0;
};