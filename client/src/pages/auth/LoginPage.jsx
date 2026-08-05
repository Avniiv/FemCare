import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../components/layout/PageContainer.jsx";
import Card from "../../components/ui/Card.jsx";
import PrimaryButton from "../../components/ui/PrimaryButton.jsx";
import InputField from "../../components/ui/InputField.jsx";
import loginwatercolor from "../../assets/illustrations/login-watercolor.png";
import logo from "../../assets/logo/logo1.png";
import { loginUser } from "../../api/authApi";
import { saveToken } from "../../utils/auth";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    if (!formData.email || !formData.password) {
      setErrors(["Please fill in all fields."]);
      return;
    }

    setLoading(true);

    try {
      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      // Save JWT Token
      saveToken(response.data.token);

      setSuccess("Login successful! Redirecting...");

      // Clear form
      setFormData({
        email: "",
        password: "",
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
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
    <section className="w-full min-h-screen flex items-center py-16">
      <PageContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="hidden lg:flex items-center justify-center">
          <img
            src={loginwatercolor}
            alt="Watercolor illustration representing women's wellness"
            className="w-full max-w-md h-auto"
          />
        </div>

        <Card className="flex flex-col gap-8 w-full max-w-md mx-auto">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl">
              <img
                src={logo}
                alt="FemCare Logo"
                className="w-12 h-12"
              />
            </div>

            <h1 className="text-3xl font-bold text-text">
              Welcome Back
            </h1>

            <p className="text-gray-500">
              Sign in to continue your wellness journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            <div className="flex flex-col gap-2">
              <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />

              <span className="text-sm text-gray-400 cursor-not-allowed self-end">
                Forgot Password? (Coming Soon)
              </span>
            </div>

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
              className={`w-full ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Signing In..." : "Sign In"}
            </PrimaryButton>
          </form>

          <p className="text-sm text-gray-500 text-center">
            Don't have an account?
            <br />
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-primary font-medium hover:underline transition-all duration-200"
            >
              Create Account
            </button>
          </p>
        </Card>
      </PageContainer>
    </section>
  );
};

export default Login;