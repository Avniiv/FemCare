import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../components/layout/PageContainer.jsx";
import Card from "../../components/ui/Card.jsx";
import PrimaryButton from "../../components/ui/PrimaryButton.jsx";
import InputField from "../../components/ui/InputField.jsx";
import heroWatercolor from "../../assets/illustrations/hero-watercolor.png";
import logo from "../../assets/logo/logo1.png";
import { registerUser } from "../../api/authApi";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);
    setSuccess("");

    // Frontend Validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setErrors(["Please fill in all fields."]);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors(["Passwords do not match."]);
      return;
    }

    setLoading(true);

    try {
      await registerUser({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      setSuccess("Account created successfully! Redirecting to Login...");

      // Clear Form
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      const responseData = err.response?.data;

      if (
        responseData?.errors &&
        Array.isArray(responseData.errors)
      ) {
        setErrors(responseData.errors.map((error) => error.msg));
      } else {
        setErrors([
          responseData?.message ||
            "Something went wrong. Please try again.",
        ]);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-16 flex items-center">
      <PageContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Illustration */}
        <div className="hidden lg:flex items-center justify-center">
          <img
            src={heroWatercolor}
            alt="Watercolor illustration representing women's wellness"
            className="w-full max-w-lg h-auto"
          />
        </div>

        {/* Register Card */}
        <Card className="flex flex-col gap-8 w-full max-w-lg mx-auto">
          <div className="flex flex-col gap-2 text-center">
            <img
              src={logo}
              alt="FemCare Logo"
              className="w-12 h-12 mx-auto"
            />

            <h1 className="text-3xl font-bold text-text">
              Welcome to FemCare
            </h1>

            <p className="text-gray-500">
              Create your account and begin your wellness journey.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <InputField
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />

            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />

            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            {errors.length > 0 && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                <ul className="list-disc list-inside space-y-1 text-sm text-red-600">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            {success && (
              <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600">
                {success}
              </div>
            )}

            <PrimaryButton
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-base ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </PrimaryButton>
          </form>

          <p className="text-sm text-gray-500 text-center">
            Already have an account?
            <br />

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-primary font-semibold hover:underline transition-colors duration-200 cursor-pointer"
            >
              Sign In
            </button>
          </p>
        </Card>
      </PageContainer>
    </section>
  );
};

export default Register;