import { useState } from "react";
import Card from "../ui/Card.jsx";
import InputField from "../ui/InputField.jsx";

const PersonalInfoCard = () => {
  const [formData, setFormData] = useState({
    fullName: "Avni Sharma",
    email: "avni@example.com",
    age: "26",
    height: "165 cm",
    weight: "58 kg",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-text">Personal Information</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <InputField
          label="Height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <InputField
          label="Weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>
    </Card>
  );
};

export default PersonalInfoCard;