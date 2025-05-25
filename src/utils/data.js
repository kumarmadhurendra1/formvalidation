export const countries = [
  {
    name: 'India',
    code: 'IN',
    phone: '91',
    cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur']
  },
  {
    name: 'United States',
    code: 'US',
    phone: '1',
    cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego']
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    phone: '44',
    cities: ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool', 'Leeds', 'Sheffield', 'Edinburgh']
  },
  {
    name: 'Canada',
    code: 'CA',
    phone: '1',
    cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Quebec City', 'Winnipeg']
  },
  {
    name: 'Australia',
    code: 'AU',
    phone: '61',
    cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Newcastle']
  },
];

export const getCountryByCode = (code) => {
  return countries.find(country => country.code === code);
};

export const getCountryByName = (name) => {
  return countries.find(country => country.name === name);
};

export const getPhoneCodeByCountry = (countryName) => {
  const country = getCountryByName(countryName);
  return country ? country.phone : '';
};

export const getCitiesByCountry = (countryName) => {
  const country = getCountryByName(countryName);
  return country ? country.cities : [];
};