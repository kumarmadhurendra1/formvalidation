import React from 'react';
import PropTypes from 'prop-types';

export const SelectInput = ({
  id,
  label,
  value,
  onChange,
  options,
  error,
  placeholder = 'Select',
  disabled = false,
}) => {
  const isValid = value !== '' && !error;
  const hasError = error && error.length > 0;
  
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}<span className="text-red-500 ml-1">*</span></label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`${isValid ? 'valid-field' : ''} ${hasError ? 'invalid-field' : ''}`}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${id}-error` : undefined}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p id={`${id}-error`} className="error-text">{error}</p>}
    </div>
  );
};

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};