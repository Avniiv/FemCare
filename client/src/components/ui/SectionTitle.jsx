const SectionTitle = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <h2 className="text-2xl font-bold text-text">{title}</h2>
      {subtitle && <p className="text-base text-gray-500">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;