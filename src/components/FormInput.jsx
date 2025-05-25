import React from 'react';
import PropTypes from 'prop-types';

export const FormInput = ({
  id,
  label,
  type,
  value,
  onChange,
  error,
  placeholder,
  maxLength,
  pattern,
  required = true,
}) => {
  const isValid = value.trim() !== '' && !error;
  const hasError = error && error.length > 0;
  
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}{required && <span className="text-red-500 ml-1">*</span>}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        pattern={pattern}
        className={`${isValid ? 'valid-field' : ''} ${hasError ? 'invalid-field' : ''}`}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${id}-error` : undefined}
      />
      {error && <p id={`${id}-error`} className="error-text">{error}</p>}
    </div>
  );
};

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
  required: PropTypes.bool
};