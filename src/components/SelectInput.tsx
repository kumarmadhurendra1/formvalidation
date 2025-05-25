import React from 'react';

interface SelectInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  error?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const SelectInput: React.FC<SelectInputProps> = ({
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