import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      // =========================
      // LOGIN
      // =========================
      if (!isSignup) {
        const response = await fetch(
          "http://localhost:5000/user/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.email,
              password: formData.password,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          setMessage(data.message || "Login failed");
          return;
        }

        console.log("LOGIN SUCCESS:", data);

        // Save logged-in user
        localStorage.setItem(
          "primewayUser",
          JSON.stringify(data.user)
        );

        // Move to PrimeWay homepage
        navigate("/");
      }

      // =========================
      // SIGNUP
      // =========================
      else {
        const response = await fetch(
          "http://localhost:5000/user/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              password: formData.password,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          setMessage(data.message || "Signup failed");
          return;
        }

        console.log("SIGNUP SUCCESS:", data);

        setMessage(
          "Signup successful! Your OTP has been generated."
        );
      }
    } catch (error) {
      console.error("Connection error:", error);

      setMessage(
        "Unable to connect to the server. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">

        {/* Heading */}
        <div className="auth-header">
          <h2>
            {isSignup ? "Create Account" : "Welcome Back"}
          </h2>

          <p>
            {isSignup
              ? "Create your PrimeWay account"
              : "Login to your PrimeWay account"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Signup Fields */}
          {isSignup && (
            <>
              <div className="form-group">
                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {/* Email */}
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          {message && (
            <p className="auth-message">
              {message}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="auth-button"
            disabled={loading}
          >
            {loading
              ? "Please wait..."
              : isSignup
              ? "Create Account"
              : "Login"}
          </button>

        </form>

        {/* Switch Login / Signup */}
        <div className="auth-switch">

          {isSignup ? (
            <>
              Already have an account?

              <button
                type="button"
                onClick={() => {
                  setIsSignup(false);
                  setMessage("");
                }}
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don't have an account?

              <button
                type="button"
                onClick={() => {
                  setIsSignup(true);
                  setMessage("");
                }}
              >
                Create Account
              </button>
            </>
          )}

        </div>

      </div>
    </div>
  );
}

export default Login;