const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  error,
  disabled = false,
  required = false,
  className = "",
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="font-medium text-text">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={name}
        disabled={disabled}
        required={required}
        className={`rounded-xl border border-gray-300 px-4 py-3 transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary  disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;