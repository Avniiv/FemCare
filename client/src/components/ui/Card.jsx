const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-3xl shadow-md border border-gray-100 p-6 transiton-all duration-200 ${className}`}>
      {children}
    </div>
  );
};

export default Card;