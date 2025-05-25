export interface FormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  phoneCode: string;
  phoneNumber: string;
  country: string;
  city: string;
  panNumber: string;
  aadharNumber: string;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  password?: string;
  phoneCode?: string;
  phoneNumber?: string;
  country?: string;
  city?: string;
  panNumber?: string;
  aadharNumber?: string;
}

export interface CountryData {
  name: string;
  code: string;
  phone: string;
  cities: string[];
}