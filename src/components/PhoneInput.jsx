import React from 'react';
import PropTypes from 'prop-types';
import { countries } from '../utils/data';

export const PhoneInput = ({
  codeId,
  codeLabel,
  codeValue,
  onCodeChange,
  codeError,
  
  numberId,
  numberLabel,
  numberValue,
  onNumberChange,
  numberError,
}) => {
  const isCodeValid = codeValue !== '' && !codeError;
  const hasCodeError = codeError && codeError.length > 0;
  
  const isNumberValid = numberValue !== '' && !numberError;
  const hasNumberError = numberError && numberError.length > 0;
  
  return (
    <div className="input-group">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="md:w-1/3">
          <label htmlFor={codeId}>{codeLabel}<span className="text-red-500 ml-1">*</span></label>
          <div className="flex items-center">
            <span className="mr-2">+</span>
            <select
              id={codeId}
              name={codeId}
              value={codeValue}
              onChange={onCodeChange}
              className={`${isCodeValid ? 'valid-field' : ''} ${hasCodeError ? 'invalid-field' : ''}`}
              aria-invalid={hasCodeError}
              aria-describedby={hasCodeError ? `${codeId}-error` : undefined}
            >
              <option value="">Select</option>
              {countries.map((country) => (
                <option key={country.code} value={country.phone}>
                  +{country.phone} ({country.name})
                </option>
              ))}
            </select>
          </div>
          {codeError && <p id={`${codeId}-error`} className="error-text">{codeError}</p>}
        </div>
        
        <div className="md:w-2/3">
          <label htmlFor={numberId}>{numberLabel}<span className="text-red-500 ml-1">*</span></label>
          <input
            id={numberId}
            name={numberId}
            type="tel"
            value={numberValue}
            onChange={onNumberChange}
            placeholder="10-digit number"
            maxLength={10}
            pattern="[0-9]{10}"
            className={`${isNumberValid ? 'valid-field' : ''} ${hasNumberError ? 'invalid-field' : ''}`}
            aria-invalid={hasNumberError}
            aria-describedby={hasNumberError ? `${numberId}-error` : undefined}
          />
          {numberError && <p id={`${numberId}-error`} className="error-text">{numberError}</p>}
        </div>
      </div>
    </div>
  );
};

PhoneInput.propTypes = {
  codeId: PropTypes.string.isRequired,
  codeLabel: PropTypes.string.isRequired,
  codeValue: PropTypes.string.isRequired,
  onCodeChange: PropTypes.func.isRequired,
  codeError: PropTypes.string,
  
  numberId: PropTypes.string.isRequired,
  numberLabel: PropTypes.string.isRequired,
  numberValue: PropTypes.string.isRequired,
  onNumberChange: PropTypes.func.isRequired,
  numberError: PropTypes.string
};