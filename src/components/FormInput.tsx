import React from 'react';

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  maxLength?: number;
  pattern?: string;
  required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
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